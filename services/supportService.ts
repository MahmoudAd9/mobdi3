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
    return fetcher(`${API_URL}/support/tickets`, {
      method: 'POST',
      body: ticketData,
    });
  },

  async getTickets(filters?: {
    status?: string;
    priority?: string;
    category?: string;
    page?: number;
    limit?: number;
  }) {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.priority) params.append('priority', filters.priority);
    if (filters?.category) params.append('category', filters.category);
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.limit) params.append('limit', filters.limit.toString());

    return fetcher(`${API_URL}/support/tickets?${params.toString()}`);
  },

  async getTicket(ticketId: string) {
    const response = await fetch(`${API_URL}/support/tickets/${ticketId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  async updateTicket(ticketId: string, updateData: {
    status?: string;
    priority?: string;
    assignee?: string;
  }) {
    const response = await fetch(`${API_URL}/support/tickets/${ticketId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(updateData),
    });
    return response.json();
  },

  // Ticket messages
  async addMessage(ticketId: string, messageData: {
    content: string;
    attachments?: File[];
  }) {
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
    return response.json();
  },

  async getMessages(ticketId: string, page = 1, limit = 50) {
    const response = await fetch(
      `${API_URL}/support/tickets/${ticketId}/messages?page=${page}&limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    return response.json();
  },

  // FAQ and knowledge base
  async getFaqCategories() {
    return fetcher(`${API_URL}/support/faq/categories`);
  },

  async getFaqs(categoryId?: string) {
    const url = categoryId
      ? `${API_URL}/support/faq?category=${categoryId}`
      : `${API_URL}/support/faq`;
    return fetcher(url);
  },

  async searchKnowledgeBase(query: string) {
    return fetcher(`${API_URL}/support/knowledge-base/search?q=${query}`);
  },

  // Support metrics
  async getSupportMetrics(timeRange: string = '30d') {
    return fetcher(`${API_URL}/support/metrics?timeRange=${timeRange}`);
  },
}; 