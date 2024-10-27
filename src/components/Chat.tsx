import React, { useEffect, useRef, useState } from 'react';
import { Message } from '../types/Types';
import { ChatInput } from './ChatInput';
import '../assets/chat.css';
type ChatProps = {
  chatId: string;
};

const Chat = ({ chatId }: ChatProps) => {
  const [messages, setMessage] = useState<Message[]>([]);
  const webSocket = useRef<WebSocket | null>(null);
  const fetchMessages = async () => {
    // const response = await fetch('/')
    // const data = await response.json()

    setMessage([]);
  };

  useEffect(() => {
    fetchMessages();
  }, [chatId]);

  useEffect(() => {
    webSocket.current = new WebSocket('ws://localhost:3000/');

    // webSocket.current.onopen = (event) => {
    //   webSocket.current?.send("doesn't matter");
    // };

    webSocket.current.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      setMessage((prevMessage) => [...prevMessage, msg]);
    };

    return () => {
      webSocket.current?.close();
    };
  }, []);

  const onSubmit = (value: string) => {
    const messageObj = JSON.stringify({
      userId: 'user456',
      content: value,
    });

    webSocket.current?.send(messageObj);
  };

  return (
    <main>
      <div className="chat-container">
        <div>
          {messages.map((message) => {
            return (
              <div key={message.messageId}>
                <p className="message">
                  <span>{message.userId}: </span> {message.content}
                </p>
              </div>
            );
          })}
        </div>
        <ChatInput onSubmit={onSubmit} />
      </div>
    </main>
  );
};

export default Chat;
