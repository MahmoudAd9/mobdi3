import { Message } from '../types/message';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const messagingService = {
  // Message operations
  async sendMessage(conversationId: string, messageData: Partial<Message>) {
    try {
      const response = await fetch(`${API_URL}/messages/${conversationId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(messageData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to send message: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Send message error:', error);
      throw error;
    }
  },

  async getMessages(conversationId: string, page = 1, limit = 50) {
    try {
      const response = await fetch(
        `${API_URL}/messages/${conversationId}?page=${page}&limit=${limit}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error(`Failed to get messages: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get messages error:', error);
      throw error;
    }
  },

  async deleteMessage(messageId: string) {
    try {
      const response = await fetch(`${API_URL}/messages/${messageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete message: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Delete message error:', error);
      throw error;
    }
  },

  // Conversation operations
  async getConversations() {
    try {
      const response = await fetch(`${API_URL}/conversations`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get conversations: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async createConversation(participantIds: string[]) {
    try {
      const response = await fetch(`${API_URL}/conversations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ participants: participantIds }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to create conversation: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Create conversation error:', error);
      throw error;
    }
  },

  async getConversation(conversationId: string) {
    try {
      const response = await fetch(`${API_URL}/conversations/${conversationId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get conversation: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get conversation error:', error);
      throw error;
    }
  },

  // Message status
  async markAsRead(messageId: string) {
    try {
      const response = await fetch(`${API_URL}/messages/${messageId}/read`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to mark message as read: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Mark message as read error:', error);
      throw error;
    }
  },

  async markConversationAsRead(conversationId: string) {
    try {
      const response = await fetch(`${API_URL}/conversations/${conversationId}/read`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to mark conversation as read: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Mark conversation as read error:', error);
      throw error;
    }
  },

  // Notifications
  async getUnreadCount() {
    try {
      const response = await fetch(`${API_URL}/messages/unread/count`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get unread count: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get unread count error:', error);
      throw error;
    }
  },
}; 