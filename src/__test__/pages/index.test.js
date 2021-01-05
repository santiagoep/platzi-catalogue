import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

import renderUtil from '../render';
import Home, { getStaticProps } from '@pages/index';
import productListMock from '@__mocks__/components/productList';

describe('Home', () => {
  it('should render snapshot', () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home products={productListMock} />);
    expect(component).toMatchSnapshot();
  });
  it('should render snapshot in mobile', () => {
    window.innerWidth = 319;
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home products={productListMock} />);
    expect(component).toMatchSnapshot();
  });
  it('should render products', () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home products={productListMock} />);
    expect(component.getAllByTestId('product').length).toBe(3);
  });
  it('should render product with info', async () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home products={productListMock} />);
    const product = component.getAllByTestId('product')[0];
    const image = product.querySelectorAll('img')[0];
    const hoverImage = product.querySelectorAll('img')[1];
    const name = product.querySelector('h2');
    const price = product.querySelectorAll('p')[0];
    const cta = product.querySelectorAll('p')[1];
    expect(image).toBeInTheDocument();
    expect(hoverImage).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(cta).toBeInTheDocument();
  });
  it('should navigate to product detail', () => {
    const spy = jest.fn();
    const { render } = renderUtil({ redux: true, theme: true });
    productListMock[0].onClick = spy;
    const component = render(<Home products={productListMock} />);
    fireEvent.click(component.getAllByTestId('product')[0]);
    expect(spy).toHaveBeenCalled();
  });
  it('should render filters', () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home products={productListMock} />);
    const filters = component.getByTestId('filters');
    const filterTitle = filters.querySelector('h6');
    expect(filterTitle).toBeInTheDocument();
    const searchInput = component.getByPlaceholderText('Buscar...');
    expect(searchInput).toBeInTheDocument();
    const sortInput = component.getByLabelText('Ordenar');
    expect(sortInput).toBeInTheDocument();
  });
  it('should filter by query text', async () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home products={productListMock} />);
    expect(component.getAllByTestId('product').length).toBe(3);
    const searchInput = component.getByPlaceholderText('Buscar...');
    fireEvent.change(searchInput, { target: { value: 'Chaqueta' } });
    expect(component.getAllByTestId('product').length).toBe(1);
  });
  it('should filter by sort', async () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<Home products={productListMock} />);
    const products = component.getAllByTestId('product');
    expect(products[0].querySelectorAll('p')[0].textContent).toMatch('124');
    expect(products[1].querySelectorAll('p')[0].textContent).toMatch('126');
    expect(products[2].querySelectorAll('p')[0].textContent).toMatch('125');
    const sortInput = component.getByLabelText('Ordenar');
    fireEvent.change(sortInput, {
      target: { value: 'price_from_highest_to_lowest' }
    });
    expect(products[0].querySelectorAll('p')[0].textContent).toMatch('126');
    expect(products[1].querySelectorAll('p')[0].textContent).toMatch('125');
    expect(products[2].querySelectorAll('p')[0].textContent).toMatch('124');
    fireEvent.change(sortInput, {
      target: { value: 'price_from_lowest_to_highest' }
    });
    expect(products[0].querySelectorAll('p')[0].textContent).toMatch('124');
    expect(products[1].querySelectorAll('p')[0].textContent).toMatch('125');
    expect(products[2].querySelectorAll('p')[0].textContent).toMatch('126');
  });

  it('Should get the list of products', async () => {
    const staticProps = await getStaticProps();
    expect(staticProps).toHaveProperty('props');
    expect(staticProps).toHaveProperty('revalidate');
    expect(staticProps.props).toHaveProperty('products');
  });
});
