import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';

import renderUtil from '../../render';
import ProductDetail, {
  getStaticProps,
  getStaticPaths
} from '@pages/products/[slug]';
import productDetailMock from '@__mocks__/components/productDetail';

describe('ProductDetail', () => {
  it('should render snapshot', () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<ProductDetail {...productDetailMock} />);
    expect(component).toMatchSnapshot();
  });
  it('should render snapshot in mobile', () => {
    window.innerWidth = 319;
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<ProductDetail {...productDetailMock} />);
    expect(component).toMatchSnapshot();
  });
  it('should render product info', () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<ProductDetail {...productDetailMock} />);
    const imagesSlider = component.getByTestId('product-detail__images');
    const images = imagesSlider.querySelector('img');
    const categoryName = component.getByTestId('product-detail__category-name');
    const name = component.getByTestId('product-detail__name');
    const price = component.getByTestId('product-detail__price');
    const description = component.getByTestId('product-detail__description');
    const goBackBtn = component.getByTestId('product-detail__go-back');

    expect(images).toBeInTheDocument();
    expect(categoryName).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(goBackBtn).toBeInTheDocument();
  });
  it('should go back', () => {
    const spy = jest.fn();
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(
      <ProductDetail {...productDetailMock} onBack={spy} />
    );
    const goBackBtn = component.getByTestId('product-detail__go-back');
    fireEvent.click(goBackBtn);
    expect(spy).toHaveBeenCalled();
  });
  it('should go to home', async () => {
    const { render } = renderUtil({ redux: true, theme: true });
    const component = render(<ProductDetail {...productDetailMock} />);
    const navbar = component.getByTestId('navbar');
    const a = navbar.querySelector('a');
    fireEvent.click(a);
    expect(component).toMatchSnapshot();
  });

  it('Should get the product detail', async () => {
    const staticProps = await getStaticProps({
      params: { slug: 'chaqueta-tipo-bombera-para-hombre-freedom-00701' }
    });
    expect(staticProps).toHaveProperty('props');
    expect(staticProps.props).toHaveProperty('name');
    expect(staticProps.props).toHaveProperty('price');
    expect(staticProps.props).toHaveProperty('images');
    expect(staticProps.props).toHaveProperty('description');
    expect(staticProps.props).toHaveProperty('category');
  });
  it('should the list of paths', async () => {
    const staticPaths = await getStaticPaths();
    expect(staticPaths).toHaveProperty('paths');
    expect(staticPaths.fallback).toBeFalsy();
    expect(staticPaths.paths[0]).toHaveProperty('params');
    expect(staticPaths.paths[0].params).toHaveProperty('slug');
  });
});
