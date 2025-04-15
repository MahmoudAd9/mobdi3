const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const paymentService = {
  // Payment processing
  async processPayment(paymentData: {
    amount: number;
    currency: string;
    paymentMethod: string;
    description?: string;
  }) {
    const response = await fetch(`${API_URL}/payments/process`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(paymentData),
    });
    return response.json();
  },

  // Transaction history
  async getTransactionHistory(filters?: {
    startDate?: string;
    endDate?: string;
    status?: string;
    type?: string;
  }) {
    const params = new URLSearchParams();
    if (filters?.startDate) params.append('startDate', filters.startDate);
    if (filters?.endDate) params.append('endDate', filters.endDate);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.type) params.append('type', filters.type);

    const response = await fetch(`${API_URL}/transactions?${params.toString()}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  // Withdrawal requests
  async requestWithdrawal(withdrawalData: {
    amount: number;
    currency: string;
    paymentMethod: string;
    accountDetails: any;
  }) {
    const response = await fetch(`${API_URL}/withdrawals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(withdrawalData),
    });
    return response.json();
  },

  async getWithdrawalHistory() {
    const response = await fetch(`${API_URL}/withdrawals`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  // Payment methods
  async getPaymentMethods() {
    const response = await fetch(`${API_URL}/payment-methods`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  async addPaymentMethod(paymentMethodData: any) {
    const response = await fetch(`${API_URL}/payment-methods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(paymentMethodData),
    });
    return response.json();
  },

  async removePaymentMethod(paymentMethodId: string) {
    const response = await fetch(`${API_URL}/payment-methods/${paymentMethodId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },

  // Invoice generation
  async generateInvoice(invoiceData: {
    amount: number;
    currency: string;
    description: string;
    recipientEmail: string;
  }) {
    const response = await fetch(`${API_URL}/invoices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(invoiceData),
    });
    return response.json();
  },

  async getInvoices() {
    const response = await fetch(`${API_URL}/invoices`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return response.json();
  },
}; 