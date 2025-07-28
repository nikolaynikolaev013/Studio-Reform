import { render, screen, fireEvent } from '@testing-library/react';
import { AppButton } from '../AppButton';

describe('AppButton', () => {
  it('should render button with correct text', () => {
    const buttonText = 'Test Button';
    render(<AppButton text={buttonText} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonText);
  });

  it('should have default button type', () => {
    render(<AppButton text="Test" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('should accept custom button type', () => {
    render(<AppButton text="Submit" type="submit" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should call onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    render(<AppButton text="Click me" onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should apply custom className', () => {
    const customClass = 'custom-button-class';
    render(<AppButton text="Test" className={customClass} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass(customClass);
  });

  it('should apply maxWidth style when provided', () => {
    const maxWidth = 200;
    render(<AppButton text="Test" maxWidth={maxWidth} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ maxWidth: `${maxWidth}px` });
  });

  it('should not apply maxWidth style when not provided', () => {
    render(<AppButton text="Test" />);
    
    const button = screen.getByRole('button');
    expect(button).not.toHaveStyle({ maxWidth: expect.anything() });
  });

  it('should handle multiple clicks', () => {
    const mockOnClick = jest.fn();
    render(<AppButton text="Multi-click" onClick={mockOnClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    
    expect(mockOnClick).toHaveBeenCalledTimes(3);
  });

  it('should work without onClick handler', () => {
    render(<AppButton text="No handler" />);
    
    const button = screen.getByRole('button');
    expect(() => fireEvent.click(button)).not.toThrow();
  });

  it('should render with reset type', () => {
    render(<AppButton text="Reset" type="reset" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'reset');
  });
});
