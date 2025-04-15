import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/context/ThemeContext';

// Mock the ThemeContext
jest.mock('@/context/ThemeContext', () => ({
  useTheme: () => ({
    theme: 'light',
    toggleTheme: jest.fn(),
  }),
}));

describe('ThemeToggle', () => {
  it('renders the light theme icon by default', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toHaveTextContent('🌙');
  });

  it('calls toggleTheme when clicked', () => {
    const mockToggleTheme = jest.fn();
    jest.spyOn(require('@/context/ThemeContext'), 'useTheme').mockImplementation(() => ({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    }));

    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });
    fireEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
}); 