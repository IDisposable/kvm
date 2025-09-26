package hidrpc

import (
	"fmt"

	"github.com/google/uuid"
	"github.com/jetkvm/kvm/internal/usbgadget"
)

// MessageType is the type of the HID RPC message
type MessageType byte

const (
	TypeHandshake                        MessageType = 0x01
	TypeKeyboardReport                   MessageType = 0x02
	TypePointerReport                    MessageType = 0x03
	TypeWheelReport                      MessageType = 0x04
	TypeKeypressReport                   MessageType = 0x05
	TypeKeypressKeepAliveReport          MessageType = 0x09
	TypeMouseReport                      MessageType = 0x06
	TypeKeyboardMacroReport              MessageType = 0x07
	TypeCancelKeyboardMacroReport        MessageType = 0x08
	TypeKeyboardLedState                 MessageType = 0x32
	TypeKeydownState                     MessageType = 0x33
	TypeKeyboardMacroState               MessageType = 0x34
	TypeCancelKeyboardMacroByTokenReport MessageType = 0x35
)

type QueueIndex int

const (
	Version        byte = 0x01 // Version of the HID RPC protocol
	HandshakeQueue int  = 0    // Queue index for handshake messages
	KeyboardQueue  int  = 1    // Queue index for keyboard and macro messages
	MouseQueue     int  = 2    // Queue index for mouse messages
	MacroQueue     int  = 3    // Queue index for macro cancel messages
	OtherQueue     int  = 4    // Queue index for other messages
)

// GetQueueIndex returns the index of the queue to which the message should be enqueued.
func GetQueueIndex(messageType MessageType) int {
	switch messageType {
	case TypeHandshake:
		return HandshakeQueue
	case TypeKeyboardReport, TypeKeypressReport, TypeKeyboardLedState, TypeKeydownState, TypeKeyboardMacroState:
		return KeyboardQueue
	case TypePointerReport, TypeMouseReport, TypeWheelReport:
		return MouseQueue
	// we don't want to block the queue for these messages
	case TypeKeyboardMacroReport, TypeCancelKeyboardMacroReport, TypeCancelKeyboardMacroByTokenReport:
		return MacroQueue
	default:
		return OtherQueue
	}
}

// Unmarshal unmarshals the HID RPC message from the data.
func Unmarshal(data []byte, message *Message) error {
	l := len(data)
	if l < 1 {
		return fmt.Errorf("invalid data length: %d", l)
	}

	message.t = MessageType(data[0])
	message.d = data[1:]
	return nil
}

// Marshal marshals the HID RPC message to the data.
func Marshal(message *Message) ([]byte, error) {
	if message.t == 0 {
		return nil, fmt.Errorf("invalid message type: %d", message.t)
	}

	data := make([]byte, len(message.d)+1)
	data[0] = byte(message.t)
	copy(data[1:], message.d)

	return data, nil
}

// NewHandshakeMessage creates a new handshake message.
func NewHandshakeMessage() *Message {
	return &Message{
		t: TypeHandshake,
		d: []byte{Version},
	}
}

// NewKeyboardReportMessage creates a new keyboard report message.
func NewKeyboardReportMessage(keys []byte, modifier uint8) *Message {
	return &Message{
		t: TypeKeyboardReport,
		d: append([]byte{modifier}, keys...),
	}
}

// NewKeyboardLedMessage creates a new keyboard LED message.
func NewKeyboardLedMessage(state usbgadget.KeyboardState) *Message {
	return &Message{
		t: TypeKeyboardLedState,
		d: []byte{state.Byte()},
	}
}

// NewKeydownStateMessage creates a new keydown state message.
func NewKeydownStateMessage(state usbgadget.KeysDownState) *Message {
	data := make([]byte, len(state.Keys)+1)
	data[0] = state.Modifier
	copy(data[1:], state.Keys)

	return &Message{
		t: TypeKeydownState,
		d: data,
	}
}

// NewKeyboardMacroStateMessage creates a new keyboard macro state message.
func NewKeyboardMacroStateMessage(state bool, isPaste bool) *Message {
	data := make([]byte, 2)
	if state {
		data[0] = 1
	}
	if isPaste {
		data[1] = 1
	}

	return &Message{
		t: TypeKeyboardMacroState,
		d: data,
	}
}

// NewKeyboardMacroTokenMessage creates a new keyboard macro token message.
func NewKeyboardMacroTokenMessage(token uuid.UUID) *Message {
	data, _ := token.MarshalBinary()

	return &Message{
		t: TypeKeyboardMacroState,
		d: data,
	}
}
