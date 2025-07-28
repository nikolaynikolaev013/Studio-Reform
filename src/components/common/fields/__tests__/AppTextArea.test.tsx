import { render, screen, fireEvent } from '@testing-library/react';
import { AppTextArea } from '../AppTextArea';

describe('AppTextArea', () => {
  const defaultProps = {
    width: 300,
    value: '',
    placeholder: 'Enter message',
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render textarea with correct attributes', () => {
    render(<AppTextArea {...defaultProps} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('placeholder', 'Enter message');
    expect(textarea).toHaveAttribute('rows', '4');
    expect(textarea).toHaveValue('');
  });

  it('should render with custom rows', () => {
    const customRows = 8;
    render(<AppTextArea {...defaultProps} rows={customRows} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', customRows.toString());
  });

  it('should render with initial value', () => {
    const value = 'Initial message content';
    render(<AppTextArea {...defaultProps} value={value} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveValue(value);
  });

  it('should apply correct width style', () => {
    const width = 400;
    const { container } = render(<AppTextArea {...defaultProps} width={width} />);
    
    const inputGroup = container.firstChild as HTMLElement;
    expect(inputGroup).toHaveStyle({ width: `${width}px` });
  });

  it('should apply custom className', () => {
    const customClass = 'custom-textarea-class';
    const { container } = render(<AppTextArea {...defaultProps} className={customClass} />);
    
    const inputGroup = container.firstChild as HTMLElement;
    expect(inputGroup).toHaveClass(customClass);
  });

  it('should call onChange when textarea value changes', () => {
    const mockOnChange = jest.fn();
    render(<AppTextArea {...defaultProps} onChange={mockOnChange} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'new message' } });
    
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('new message');
  });

  it('should handle multiline text input', () => {
    const mockOnChange = jest.fn();
    render(<AppTextArea {...defaultProps} onChange={mockOnChange} />);
    
    const textarea = screen.getByRole('textbox');
    const multilineText = 'Line 1\nLine 2\nLine 3';
    fireEvent.change(textarea, { target: { value: multilineText } });
    
    expect(mockOnChange).toHaveBeenCalledWith(multilineText);
  });

  it('should handle long text input', () => {
    const mockOnChange = jest.fn();
    render(<AppTextArea {...defaultProps} onChange={mockOnChange} />);
    
    const textarea = screen.getByRole('textbox');
    const longText = 'This is a very long message that spans multiple lines and contains a lot of text to test the textarea functionality with longer content.';
    fireEvent.change(textarea, { target: { value: longText } });
    
    expect(mockOnChange).toHaveBeenCalledWith(longText);
  });

  it('should handle empty string input', () => {
    const mockOnChange = jest.fn();
    render(<AppTextArea {...defaultProps} value="some text" onChange={mockOnChange} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: '' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('');
  });

  it('should handle special characters and unicode', () => {
    const mockOnChange = jest.fn();
    render(<AppTextArea {...defaultProps} onChange={mockOnChange} />);
    
    const textarea = screen.getByRole('textbox');
    const specialText = 'Специални символи: @#$%^&*()\nНов ред с емоджи: 😊🎉';
    fireEvent.change(textarea, { target: { value: specialText } });
    
    expect(mockOnChange).toHaveBeenCalledWith(specialText);
  });

  it('should use default rows when not specified', () => {
    render(<AppTextArea {...defaultProps} />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', '4');
  });

  it('should handle rapid text changes', () => {
    const mockOnChange = jest.fn();
    render(<AppTextArea {...defaultProps} onChange={mockOnChange} />);
    
    const textarea = screen.getByRole('textbox');
    
    fireEvent.change(textarea, { target: { value: 'a' } });
    fireEvent.change(textarea, { target: { value: 'ab' } });
    fireEvent.change(textarea, { target: { value: 'abc' } });
    
    expect(mockOnChange).toHaveBeenCalledTimes(3);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, 'a');
    expect(mockOnChange).toHaveBeenNthCalledWith(2, 'ab');
    expect(mockOnChange).toHaveBeenNthCalledWith(3, 'abc');
  });
});
