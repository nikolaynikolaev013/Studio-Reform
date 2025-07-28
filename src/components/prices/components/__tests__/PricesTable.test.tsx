import { render, screen } from '@testing-library/react';
import { PricesTable, StudioPricesData } from '../PricesTable';

describe('PricesTable', () => {
  const mockStudioPrices: StudioPricesData[] = [
    {
      sectionKey: 'Single Sessions',
      prices: [
        { key: 'Single training', value: '25лв' },
      ],
    },
    {
      sectionKey: 'Package Deals',
      prices: [
        { key: '4 trainings', value: '94лв' },
        { key: '8 trainings', value: '176лв' },
        { key: '12 trainings', value: '240лв' },
      ],
    },
  ];

  it('should render prices container', () => {
    const { container } = render(<PricesTable studioPrices={mockStudioPrices} />);
    
    const pricesContainer = container.querySelector('.prices_container');
    expect(pricesContainer).toBeInTheDocument();
  });

  it('should render all price sections', () => {
    render(<PricesTable studioPrices={mockStudioPrices} />);
    
    expect(screen.getByText('Single Sessions')).toBeInTheDocument();
    expect(screen.getByText('Package Deals')).toBeInTheDocument();
  });

  it('should render all price items', () => {
    render(<PricesTable studioPrices={mockStudioPrices} />);
    
    // Check single session prices
    expect(screen.getByText('Single training')).toBeInTheDocument();
    expect(screen.getByText('25лв')).toBeInTheDocument();
    
    // Check package deal prices
    expect(screen.getByText('4 trainings')).toBeInTheDocument();
    expect(screen.getByText('94лв')).toBeInTheDocument();
    expect(screen.getByText('8 trainings')).toBeInTheDocument();
    expect(screen.getByText('176лв')).toBeInTheDocument();
    expect(screen.getByText('12 trainings')).toBeInTheDocument();
    expect(screen.getByText('240лв')).toBeInTheDocument();
  });

  it('should render correct number of price sections', () => {
    const { container } = render(<PricesTable studioPrices={mockStudioPrices} />);
    
    const priceSections = container.querySelectorAll('.prices_section');
    expect(priceSections).toHaveLength(2);
  });

  it('should render correct number of price rows', () => {
    const { container } = render(<PricesTable studioPrices={mockStudioPrices} />);
    
    const priceRows = container.querySelectorAll('.prices_table_row');
    expect(priceRows).toHaveLength(4); // 1 + 3 from the mock data
  });

  it('should handle empty studio prices', () => {
    const { container } = render(<PricesTable studioPrices={[]} />);
    
    const pricesContainer = container.querySelector('.prices_container');
    expect(pricesContainer).toBeInTheDocument();
    expect(pricesContainer?.children).toHaveLength(0);
  });

  it('should handle section with empty prices array', () => {
    const emptyPricesData: StudioPricesData[] = [
      {
        sectionKey: 'Empty Section',
        prices: [],
      },
    ];
    
    render(<PricesTable studioPrices={emptyPricesData} />);
    
    expect(screen.getByText('Empty Section')).toBeInTheDocument();
    
    const { container } = render(<PricesTable studioPrices={emptyPricesData} />);
    const priceRows = container.querySelectorAll('.prices_table_row');
    expect(priceRows).toHaveLength(0);
  });

  it('should handle section with empty sectionKey', () => {
    const emptyKeyData: StudioPricesData[] = [
      {
        sectionKey: '',
        prices: [
          { key: 'Test price', value: '50лв' },
        ],
      },
    ];
    
    render(<PricesTable studioPrices={emptyKeyData} />);
    
    expect(screen.getByText('Test price')).toBeInTheDocument();
    expect(screen.getByText('50лв')).toBeInTheDocument();
  });

  it('should apply correct CSS classes', () => {
    const { container } = render(<PricesTable studioPrices={mockStudioPrices} />);
    
    expect(container.querySelector('.prices_container')).toBeInTheDocument();
    expect(container.querySelector('.prices_section')).toBeInTheDocument();
    expect(container.querySelector('.prices_section_title')).toBeInTheDocument();
    expect(container.querySelector('.prices_table_row')).toBeInTheDocument();
    expect(container.querySelector('.prices_table_key')).toBeInTheDocument();
    expect(container.querySelector('.prices_table_value')).toBeInTheDocument();
  });

  it('should handle Bulgarian text correctly', () => {
    const bulgarianPrices: StudioPricesData[] = [
      {
        sectionKey: 'Индивидуални тренировки',
        prices: [
          { key: 'Единична тренировка', value: '25лв' },
          { key: 'Пакет от 4 тренировки', value: '94лв' },
        ],
      },
    ];
    
    render(<PricesTable studioPrices={bulgarianPrices} />);
    
    expect(screen.getByText('Индивидуални тренировки')).toBeInTheDocument();
    expect(screen.getByText('Единична тренировка')).toBeInTheDocument();
    expect(screen.getByText('Пакет от 4 тренировки')).toBeInTheDocument();
  });

  it('should render prices in correct order', () => {
    const orderedPrices: StudioPricesData[] = [
      {
        sectionKey: 'First Section',
        prices: [
          { key: 'First price', value: '10лв' },
          { key: 'Second price', value: '20лв' },
        ],
      },
      {
        sectionKey: 'Second Section',
        prices: [
          { key: 'Third price', value: '30лв' },
        ],
      },
    ];
    
    const { container } = render(<PricesTable studioPrices={orderedPrices} />);
    
    const sections = container.querySelectorAll('.prices_section');
    expect(sections[0]).toHaveTextContent('First Section');
    expect(sections[1]).toHaveTextContent('Second Section');
    
    const rows = container.querySelectorAll('.prices_table_row');
    expect(rows[0]).toHaveTextContent('First price');
    expect(rows[1]).toHaveTextContent('Second price');
    expect(rows[2]).toHaveTextContent('Third price');
  });
});
