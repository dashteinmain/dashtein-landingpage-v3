"use client";

import React, { useState, useEffect } from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar,
  ConversationHeader,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { useWebhook } from './useWebhook';

interface ChatMessage {
  message: string;
  sentTime: string;
  sender: 'user' | 'bot';
  direction: 'incoming' | 'outgoing';
  position: 'single' | 'first' | 'normal' | 'last';
}

const SimpleChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?",
      sentTime: "just now",
      sender: "bot",
      direction: "incoming",
      position: "single",
    }
  ]);

  const { sendMessage, loading } = useWebhook();

  // Prevenir scroll del body cuando el chat está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Ocultar tooltip cuando se abre el chat
  useEffect(() => {
    if (isOpen) {
      setShowTooltip(false);
    }
  }, [isOpen]);

  const handleSend = async (message: string): Promise<void> => {
    const userMessage: ChatMessage = {
      message,
      sentTime: "just now",
      sender: "user",
      direction: "outgoing",
      position: "single",
    };

    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await sendMessage(message);
      const botMessage: ChatMessage = {
        message: response || "Lo siento, no recibí una respuesta válida.",
        sentTime: "just now",
        sender: "bot",
        direction: "incoming",
        position: "single",
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        message: "Lo siento, ocurrió un error. Intenta de nuevo.",
        sentTime: "just now",
        sender: "bot",
        direction: "incoming",
        position: "single",
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return (
    <>
      {/* Botón flotante con Avatar */}
      {!isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          {/* Tooltip/Callout dismissible */}
          {showTooltip && (
            <div
              style={{
                position: 'absolute',
                bottom: '80px',
                right: '0',
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                maxWidth: '250px',
                zIndex: 999,
              }}
            >
              <button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                }}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'transparent',
                  border: 'none',
                  color: '#999',
                  cursor: 'pointer',
                  fontSize: '18px',
                  padding: '0',
                  lineHeight: '1',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                aria-label="Cerrar"
              >
                ✕
              </button>
              <p style={{ margin: '0', fontSize: '14px', color: '#333' }}>
                ¡Hola! Estoy aquí para asistirte
              </p>
              {/* Flecha apuntando al botón */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '20px',
                  width: '0',
                  height: '0',
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderTop: '10px solid white',
                }}
              />
            </div>
          )}

          {/* Avatar Badge - ahora también clickeable */}
          <div
            onClick={() => setIsOpen(true)}
            style={{
              position: 'absolute',
              top: '-25px',
              right: '-5px',
              animation: 'bounce 2s infinite',
              zIndex: 1001,
              cursor: 'pointer',
            }}
          >
            <Avatar
              src="/favicon.png"
              name="Bot"
              size="md"
              status="available"
            />
          </div>

          {/* Botón flotante */}
          <button
            onClick={() => setIsOpen(true)}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: '#2e72f0ff',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              color: 'white',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => 
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => 
              (e.currentTarget.style.transform = 'scale(1)')
            }
          >
            💬
          </button>
        </div>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <>
          {/* Backdrop invisible - cierra el chat al hacer clic fuera */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 998,
            }}
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Container */}
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              width: '350px',
              height: '500px',
              zIndex: 999,
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            <MainContainer>
              <ChatContainer>
                <ConversationHeader>
                  <ConversationHeader.Back onClick={() => setIsOpen(false)} />
                  <Avatar
                    src="/favicon.png"
                    name="Asistente Virtual"
                  />
                  <ConversationHeader.Content
                    userName="Asistente Virtual"
                    info="En línea"
                  />
                </ConversationHeader>
                <MessageList
                  typingIndicator={loading ? <TypingIndicator content="Escribiendo..." /> : null}
                >
                  {messages.map((message, index) => (
                    <Message
                      key={index}
                      model={{
                        message: message.message,
                        sentTime: message.sentTime,
                        sender: message.sender,
                        direction: message.direction,
                        position: message.position,
                      }}
                    >
                      {message.direction === 'incoming' && (
                        <Avatar
                          src="/favicon.png"
                          name="Bot"
                        />
                      )}
                    </Message>
                  ))}
                </MessageList>
                <MessageInput
                  placeholder="Escribe tu mensaje aquí..."
                  onSend={handleSend}
                  attachButton={false}
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </>
      )}

      {/* Estilos para animación */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
};

export default SimpleChatWidget;