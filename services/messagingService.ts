import { Message } from '../types/message';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const messagingService = {
  // Message operations
  async sendMessage(conversationId: string, messageData: Partial<Message>) {
    const response = await fetch(`${API_URL}/messages/${conversationId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(messageData),
    });
    return response.json();
  },

  async getMessages(conversationId: string, page = 1, limit = 50) {
    const response = await fetch(
      `${API_URL}/messages/${conversationId}?page=${page}&limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return response.json();
  },

  async deleteMessage(messageId: string) {
    const response = await fetch(`${API_URL}/messages/${messageId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  // Conversation operations
  async getConversations() {
    const response = await fetch(`${API_URL}/conversations`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  async createConversation(participantIds: string[]) {
    const response = await fetch(`${API_URL}/conversations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ participants: participantIds }),
    });
    return response.json();
  },

  async getConversation(conversationId: string) {
    const response = await fetch(`${API_URL}/conversations/${conversationId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  // Message status
  async markAsRead(messageId: string) {
    const response = await fetch(`${API_URL}/messages/${messageId}/read`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  async markConversationAsRead(conversationId: string) {
    const response = await fetch(`${API_URL}/conversations/${conversationId}/read`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  // Notifications
  async getUnreadCount() {
    const response = await fetch(`${API_URL}/messages/unread/count`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },
}; 