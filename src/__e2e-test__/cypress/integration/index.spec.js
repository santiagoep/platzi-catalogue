context('Home', () => {
  it('Go To Home', () => {
    cy.visit('/');
    cy.get('.product').should(($product) => {
      expect($product).to.have.length(10);
    });
    cy.get('#query-text-filters').type('Chaqueta Negra');
    cy.get('.product__price').should(($price) => {
      expect($price).to.have.length(3);
    });
    cy.get('#sort-filters').select('price_from_lowest_to_highest');
    cy.get('.product__price')
      .first()
      .then(($productPrice) => {
        expect($productPrice.text()).to.include('154.852');
      });
    cy.get('.product__price')
      .eq(1)
      .then(($productPrice) => {
        expect($productPrice.text()).to.include('212.900');
      });
    cy.get('#sort-filters').select('price_from_highest_to_lowest');
    cy.get('.product__price')
      .first()
      .then(($productPrice) => {
        expect($productPrice.text()).to.include('494.000');
      });
    cy.get('.product__price')
      .eq(1)
      .then(($productPrice) => {
        expect($productPrice.text()).to.include('212.900');
      });
    cy.get('#query-text-filters').clear();
    cy.get('.product').should(($product) => {
      expect($product).to.have.length(10);
    });
    cy.get('.product__price')
      .first()
      .then(($productPrice) => {
        expect($productPrice.text()).to.include('89.900');
      });
    cy.get('.product__price').first().click();
    cy.get('[data-testid=product-detail__category-name]').should('be.visible');
    cy.get('[data-testid=product-detail__name]').should('be.visible');
    cy.get('[data-testid=product-detail__description]').should('be.visible');
    cy.get('[data-testid=product-detail__go-back]').should('be.visible');
    cy.get('[data-testid=product-detail__go-back]').click();
    cy.get('.product__price').first().click();
    cy.get('[alt="Logo Platzi"]').click();
  });
});
