context('Home', () => {
  it('Go To Home', () => {
    cy.visit('/');

    cy.get('.product').should('have.length', 10);

    // Should search
    cy.get('#query-text-filters').type('Chaqueta Negra');
    cy.get('.product__price').should('have.length', 3);

    // Should filter price from lowest to highest
    cy.get('#sort-filters').select('price_from_lowest_to_highest');
    cy.get('.product__price')
      .first()
      .then(($productPrice) =>
        expect($productPrice.text()).to.include('154.852')
      );
    cy.get('.product__price')
      .eq(1)
      .then(($productPrice) => {
        expect($productPrice.text()).to.include('212.900');
      });

    // Should filter prices from highest to lowest
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

    // Should clear search
    cy.get('#query-text-filters').clear();
    cy.get('.product').should('have.length', 10);
    cy.get('.product__price')
      .first()
      .then(($productPrice) => {
        expect($productPrice.text()).to.include('89.900');
      });

    // Should go to product detail
    cy.get('.product').first().click();
    cy.url().should('include', '/products/');
    cy.get('[data-testid=product-detail__category-name]').should('be.visible');
    cy.get('[data-testid=product-detail__name]').should('be.visible');
    cy.get('[data-testid=product-detail__description]').should('be.visible');
    cy.get('[data-testid=product-detail__go-back]').should('be.visible');

    // Should go back to home
    cy.get('[data-testid=product-detail__go-back]').click();

    // Should click on logo and back to home
    cy.get('.product').first().click();
    cy.get('[alt="Logo Platzi"]').click();
    cy.url().should('include', '/');
  });
});
