import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('should render badge text', () => {
    const badgeText = 'Test Badge';
    render(<Badge text={badgeText} />);
    
    expect(screen.getByText(badgeText)).toBeInTheDocument();
  });

  it('should apply badge styles', () => {
    const { container } = render(<Badge text="Test" />);
    
    const badge = container.querySelector('.badge');
    expect(badge).toBeInTheDocument();
  });

  it('should render with empty text', () => {
    render(<Badge text="" />);
    
    const { container } = render(<Badge text="" />);
    const badge = container.querySelector('.badge');
    expect(badge).toBeInTheDocument();
  });

  it('should render with Bulgarian text', () => {
    const bulgarianText = 'Български текст';
    render(<Badge text={bulgarianText} />);
    
    expect(screen.getByText(bulgarianText)).toBeInTheDocument();
  });

  it('should render with special characters', () => {
    const specialText = 'Badge with symbols: @#$%^&*()';
    render(<Badge text={specialText} />);
    
    expect(screen.getByText(specialText)).toBeInTheDocument();
  });

  it('should render with numbers', () => {
    const numberText = 'Badge 123';
    render(<Badge text={numberText} />);
    
    expect(screen.getByText(numberText)).toBeInTheDocument();
  });

  it('should render long text', () => {
    const longText = 'This is a very long badge text that might wrap to multiple lines';
    render(<Badge text={longText} />);
    
    expect(screen.getByText(longText)).toBeInTheDocument();
  });
});
