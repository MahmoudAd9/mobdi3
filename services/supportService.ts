import { fetcher } from '../utils/fetcher';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const supportService = {
  // Ticket operations
  async createTicket(ticketData: {
    title: string;
    description: string;
    category: string;
    priority: string;
  }) {
    try {
      const response = await fetcher(`${API_URL}/support/tickets`, {
        method: 'POST',
        body: ticketData,
      });
      
      if (!response.ok) {
        throw new Error(`Failed to create ticket: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.error('Create ticket error:', error);
      throw error;
    }
  },

  async getTickets(filters?: {
    status?: string;
    priority?: string;
    category?: string;
    page?: number;
    limit?: number;
  }) {
    try {
      const params = new URLSearchParams();
      if (filters?.status) params.append('status', filters.status);
      if (filters?.priority) params.append('priority', filters.priority);
      if (filters?.category) params.append('category', filters.category);
      if (filters?.page) params.append('page', filters.page.toString());
      if (filters?.limit) params.append('limit', filters.limit.toString());

      const response = await fetcher(`${API_URL}/support/tickets?${params.toString()}`);
      if (!response.ok) {
        throw new Error(`Failed to get tickets: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get tickets error:', error);
      throw error;
    }
  },

  async getTicket(ticketId: string) {
    try {
      const response = await fetch(`${API_URL}/support/tickets/${ticketId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get ticket: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get ticket error:', error);
      throw error;
    }
  },

  async updateTicket(ticketId: string, updateData: {
    status?: string;
    priority?: string;
    assignee?: string;
  }) {
    try {
      const response = await fetch(`${API_URL}/support/tickets/${ticketId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(updateData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update ticket: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Update ticket error:', error);
      throw error;
    }
  },

  // Ticket messages
  async addMessage(ticketId: string, messageData: {
    content: string;
    attachments?: File[];
  }) {
    try {
      const formData = new FormData();
      formData.append('content', messageData.content);
      if (messageData.attachments) {
        messageData.attachments.forEach(file => {
          formData.append('attachments', file);
        });
      }

      const response = await fetch(`${API_URL}/support/tickets/${ticketId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`Failed to add message: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Add message error:', error);
      throw error;
    }
  },

  async getMessages(ticketId: string, page = 1, limit = 50) {
    try {
      const response = await fetch(
        `${API_URL}/support/tickets/${ticketId}/messages?page=${page}&limit=${limit}`,
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

  // FAQ and knowledge base
  async getFaqCategories() {
    try {
      const response = await fetcher(`${API_URL}/support/faq/categories`);
      if (!response.ok) {
        throw new Error(`Failed to get FAQ categories: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get FAQ categories error:', error);
      throw error;
    }
  },

  async getFaqs(categoryId?: string) {
    try {
      const url = categoryId
        ? `${API_URL}/support/faq?category=${categoryId}`
        : `${API_URL}/support/faq`;
      const response = await fetcher(url);
      if (!response.ok) {
        throw new Error(`Failed to get FAQs: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get FAQs error:', error);
      throw error;
    }
  },

  async searchKnowledgeBase(query: string) {
    try {
      const response = await fetcher(`${API_URL}/support/knowledge-base/search?q=${query}`);
      if (!response.ok) {
        throw new Error(`Failed to search knowledge base: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Search knowledge base error:', error);
      throw error;
    }
  },

  // Support metrics
  async getSupportMetrics(timeRange: string = '30d') {
    try {
      const response = await fetcher(`${API_URL}/support/metrics?timeRange=${timeRange}`);
      if (!response.ok) {
        throw new Error(`Failed to get support metrics: ${response.statusText}`);
      }
      return response;
    } catch (error) {
      console.error('Get support metrics error:', error);
      throw error;
    }
  },
}; 