import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Careers } from '../Careers';

// Mock child components
jest.mock('../components/InfoCard', () => ({
  InfoCard: ({ title, description }: any) => (
    <div data-testid="info-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ),
}));

jest.mock('../components/Badge', () => ({
  Badge: ({ text }: any) => (
    <span data-testid="badge">{text}</span>
  ),
}));

jest.mock('../../common/PageTitle', () => ({
  PageTitle: ({ text }: { text: string }) => (
    <h1 data-testid="page-title">{text}</h1>
  ),
}));

const renderCareers = () => {
  return render(
    <MemoryRouter>
      <Careers />
    </MemoryRouter>
  );
};

describe('Careers', () => {
  it('should render page title', () => {
    renderCareers();
    
    expect(screen.getByTestId('page-title')).toBeInTheDocument();
  });

  it('should render info cards', () => {
    renderCareers();
    
    const cards = screen.getAllByTestId('info-card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should render badges', () => {
    renderCareers();
    
    const badges = screen.getAllByTestId('badge');
    expect(badges.length).toBeGreaterThan(0);
  });

  it('should have proper structure', () => {
    const { container } = renderCareers();
    
    const careersContainer = container.querySelector('.careers');
    expect(careersContainer).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    expect(() => renderCareers()).not.toThrow();
  });
});
