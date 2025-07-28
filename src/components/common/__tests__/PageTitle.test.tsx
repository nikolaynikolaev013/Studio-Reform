import { render, screen } from '@testing-library/react';
import { PageTitle } from '../PageTitle';

describe('PageTitle', () => {
  it('should render h2 element with correct text', () => {
    const titleText = 'Test Page Title';
    render(<PageTitle text={titleText} />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(titleText);
  });

  it('should render with Bulgarian text', () => {
    const bulgarianTitle = 'Нашите студиа';
    render(<PageTitle text={bulgarianTitle} />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(bulgarianTitle);
  });

  it('should render with empty string', () => {
    render(<PageTitle text="" />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('');
  });

  it('should render with special characters', () => {
    const specialTitle = 'Title with symbols: @#$%^&*()';
    render(<PageTitle text={specialTitle} />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(specialTitle);
  });

  it('should render with numbers', () => {
    const titleWithNumbers = 'Page 123 - Section 456';
    render(<PageTitle text={titleWithNumbers} />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(titleWithNumbers);
  });

  it('should apply correct CSS class', () => {
    render(<PageTitle text="Test" />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('title');
  });

  it('should handle long titles', () => {
    const longTitle = 'This is a very long title that might span multiple lines and should still be rendered correctly without any issues';
    render(<PageTitle text={longTitle} />);
    
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(longTitle);
  });
});
