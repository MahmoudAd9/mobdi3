const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const paymentService = {
  // Payment processing
  async processPayment(paymentData: {
    amount: number;
    currency: string;
    paymentMethod: string;
    description?: string;
  }) {
    try {
      const response = await fetch(`${API_URL}/payments/process`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(paymentData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to process payment: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Process payment error:', error);
      throw error;
    }
  },

  // Transaction history
  async getTransactionHistory(filters?: {
    startDate?: string;
    endDate?: string;
    status?: string;
    type?: string;
  }) {
    try {
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
      
      if (!response.ok) {
        throw new Error(`Failed to get transaction history: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get transaction history error:', error);
      throw error;
    }
  },

  // Withdrawal requests
  async requestWithdrawal(withdrawalData: {
    amount: number;
    currency: string;
    paymentMethod: string;
    accountDetails: any;
  }) {
    try {
      const response = await fetch(`${API_URL}/withdrawals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(withdrawalData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to request withdrawal: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Request withdrawal error:', error);
      throw error;
    }
  },

  async getWithdrawalHistory() {
    try {
      const response = await fetch(`${API_URL}/withdrawals`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get withdrawal history: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get withdrawal history error:', error);
      throw error;
    }
  },

  // Payment methods
  async getPaymentMethods() {
    try {
      const response = await fetch(`${API_URL}/payment-methods`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get payment methods: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get payment methods error:', error);
      throw error;
    }
  },

  async addPaymentMethod(paymentMethodData: any) {
    try {
      const response = await fetch(`${API_URL}/payment-methods`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(paymentMethodData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to add payment method: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Add payment method error:', error);
      throw error;
    }
  },

  async removePaymentMethod(paymentMethodId: string) {
    try {
      const response = await fetch(`${API_URL}/payment-methods/${paymentMethodId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to remove payment method: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Remove payment method error:', error);
      throw error;
    }
  },

  // Invoice generation
  async generateInvoice(invoiceData: {
    amount: number;
    currency: string;
    description: string;
    recipientEmail: string;
  }) {
    try {
      const response = await fetch(`${API_URL}/invoices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(invoiceData),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to generate invoice: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Generate invoice error:', error);
      throw error;
    }
  },

  async getInvoices() {
    try {
      const response = await fetch(`${API_URL}/invoices`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get invoices: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Get invoices error:', error);
      throw error;
    }
  },
}; 