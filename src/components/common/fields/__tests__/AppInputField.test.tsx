import { render, screen, fireEvent } from '@testing-library/react';
import { AppInputField } from '../AppInputField';

describe('AppInputField', () => {
  const defaultProps = {
    width: 300,
    value: '',
    placeholder: 'Enter text',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render input field with correct attributes', () => {
    render(<AppInputField {...defaultProps} />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Enter text');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveValue('');
  });

  it('should render with custom type', () => {
    render(<AppInputField {...defaultProps} type="email" />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('should render with initial value', () => {
    const value = 'Initial value';
    render(<AppInputField {...defaultProps} value={value} />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue(value);
  });

  it('should apply correct width style', () => {
    const width = 250;
    const { container } = render(<AppInputField {...defaultProps} width={width} />);
    
    const inputGroup = container.firstChild as HTMLElement;
    expect(inputGroup).toHaveStyle({ width: `${width}px` });
  });

  it('should apply custom className', () => {
    const customClass = 'custom-input-class';
    const { container } = render(<AppInputField {...defaultProps} className={customClass} />);
    
    const inputGroup = container.firstChild as HTMLElement;
    expect(inputGroup).toHaveClass(customClass);
  });

  it('should call onChange when input value changes', () => {
    const mockOnChange = jest.fn();
    render(<AppInputField {...defaultProps} onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('new value');
  });

  it('should handle multiple character inputs', () => {
    const mockOnChange = jest.fn();
    render(<AppInputField {...defaultProps} onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.change(input, { target: { value: 'ab' } });
    fireEvent.change(input, { target: { value: 'abc' } });
    
    expect(mockOnChange).toHaveBeenCalledTimes(3);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, 'a');
    expect(mockOnChange).toHaveBeenNthCalledWith(2, 'ab');
    expect(mockOnChange).toHaveBeenNthCalledWith(3, 'abc');
  });

  it('should handle empty string input', () => {
    const mockOnChange = jest.fn();
    render(<AppInputField {...defaultProps} value="some text" onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('');
  });

  it('should handle special characters', () => {
    const mockOnChange = jest.fn();
    render(<AppInputField {...defaultProps} onChange={mockOnChange} />);
    
    const input = screen.getByRole('textbox');
    const specialText = 'Специални символи: @#$%^&*()';
    fireEvent.change(input, { target: { value: specialText } });
    
    expect(mockOnChange).toHaveBeenCalledWith(specialText);
  });

  it('should render password type input', () => {
    render(<AppInputField {...defaultProps} type="password" />);
    
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toHaveAttribute('type', 'password');
  });
});
