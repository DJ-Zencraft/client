import { FC, useState, useEffect } from 'react';
import { Button } from '../button';
import { TextField } from '../textField';
import './ChatWidget.scss';
import api from '../../api/apiClient';
import { toast } from 'react-toastify';

interface Message {
  content: string;
  isBot: boolean;
}

export const ChatWidget: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) {
      toast.error('Введите сообщение');
      return;
    }

    try {
      setIsLoading(true);
      const userMessage = inputMessage;
      
      // Добавляем сообщение пользователя
      setMessages(prev => [...prev, { 
        content: userMessage, 
        isBot: false 
      }]);
      
      setInputMessage('');

      // Отправляем запрос к API
      const response = await api.post('/chat', {
        message: userMessage
      });

      // Добавляем ответ бота
      setMessages(prev => [...prev, {
        content: response.data.response,
        isBot: true
      }]);
      
    } catch (error: any) {
      const errorMessage = error.response?.data?.detail || 'Ошибка соединения с AI';
      setMessages(prev => [...prev, {
        content: errorMessage,
        isBot: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
      <Button 
        className="chat-toggle"
        text="AI Помощник"
        onClick={() => setIsOpen(!isOpen)}
        type="primary"
      />
      
      {isOpen && (
        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`message ${msg.isBot ? 'bot' : 'user'}`}
              >
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="message bot loading">
                <div className="typing-indicator">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="chat-input">
            <TextField
              value={inputMessage}
              onChange={setInputMessage}
              placeholder="Введите сообщение..."
              onEnter={handleSendMessage}
              disabled={isLoading}
            />
            <Button
              text="Отправить"
              onClick={handleSendMessage}
              type="secondary"
              disabled={isLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
};