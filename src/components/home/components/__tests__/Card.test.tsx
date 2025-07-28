import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  const defaultProps = {
    firstText: 'First text content',
    secondText: 'Second text content',
    imageClass: 'test-image-class',
  };

  it('should render card with text content', () => {
    render(<Card {...defaultProps} />);
    
    expect(screen.getByText('First text content')).toBeInTheDocument();
    expect(screen.getByText('Second text content')).toBeInTheDocument();
  });

  it('should render horizontal rule between texts', () => {
    const { container } = render(<Card {...defaultProps} />);
    
    const hr = container.querySelector('hr');
    expect(hr).toBeInTheDocument();
  });

  it('should apply correct CSS classes', () => {
    const { container } = render(<Card {...defaultProps} />);
    
    expect(container.querySelector('.card')).toBeInTheDocument();
    expect(container.querySelector('.card_image')).toBeInTheDocument();
    expect(container.querySelector('.card_text')).toBeInTheDocument();
  });

  it('should apply custom image class', () => {
    const customImageClass = 'custom-image-style';
    const { container } = render(<Card {...defaultProps} imageClass={customImageClass} />);
    
    const imageElement = container.querySelector('.card_image');
    expect(imageElement).toHaveClass(customImageClass);
  });

  it('should render JSX element as secondText', () => {
    const jsxSecondText = <strong>Bold second text</strong>;
    render(<Card {...defaultProps} secondText={jsxSecondText} />);
    
    const boldElement = screen.getByText('Bold second text');
    expect(boldElement).toBeInTheDocument();
    expect(boldElement.tagName).toBe('STRONG');
  });

  it('should render with empty strings', () => {
    render(<Card firstText="" secondText="" imageClass="test-class" />);
    
    const { container } = render(<Card firstText="" secondText="" imageClass="test-class" />);
    const textSpans = container.querySelectorAll('.card_text span');
    
    expect(textSpans[0]).toHaveTextContent('');
    expect(textSpans[1]).toHaveTextContent('');
  });

  it('should handle long text content', () => {
    const longFirstText = 'This is a very long first text that might span multiple lines and should be handled correctly by the card component';
    const longSecondText = 'This is also a very long second text that contains a lot of information and should be displayed properly';
    
    render(<Card firstText={longFirstText} secondText={longSecondText} imageClass="test-class" />);
    
    expect(screen.getByText(longFirstText)).toBeInTheDocument();
    expect(screen.getByText(longSecondText)).toBeInTheDocument();
  });

  it('should handle Bulgarian text', () => {
    const bulgarianFirstText = 'Първи текст на български';
    const bulgarianSecondText = 'Втори текст на български език';
    
    render(<Card firstText={bulgarianFirstText} secondText={bulgarianSecondText} imageClass="bg-class" />);
    
    expect(screen.getByText(bulgarianFirstText)).toBeInTheDocument();
    expect(screen.getByText(bulgarianSecondText)).toBeInTheDocument();
  });

  it('should handle special characters in text', () => {
    const specialFirstText = 'Text with symbols: @#$%^&*()';
    const specialSecondText = 'More symbols: <>?:"{}|';
    
    render(<Card firstText={specialFirstText} secondText={specialSecondText} imageClass="special-class" />);
    
    expect(screen.getByText(specialFirstText)).toBeInTheDocument();
    expect(screen.getByText(specialSecondText)).toBeInTheDocument();
  });

  it('should render complex JSX in secondText', () => {
    const complexJsx = (
      <div>
        <span>Complex content with </span>
        <em>emphasis</em>
        <span> and </span>
        <strong>bold text</strong>
      </div>
    );
    
    render(<Card firstText="First text" secondText={complexJsx} imageClass="complex-class" />);
    
    expect(screen.getByText('Complex content with')).toBeInTheDocument();
    expect(screen.getByText('emphasis')).toBeInTheDocument();
    expect(screen.getByText('and')).toBeInTheDocument();
    expect(screen.getByText('bold text')).toBeInTheDocument();
  });

  it('should maintain proper structure with spans', () => {
    const { container } = render(<Card {...defaultProps} />);
    
    const cardText = container.querySelector('.card_text');
    const spans = cardText?.querySelectorAll('span');
    
    expect(spans).toHaveLength(2);
    expect(spans?.[0]).toHaveTextContent('First text content');
    expect(spans?.[1]).toHaveTextContent('Second text content');
  });
});
