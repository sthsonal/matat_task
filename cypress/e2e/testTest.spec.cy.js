describe("Add to Cart and Checkout Flow", () => {
  it("Add item to cart and proceed to checkout", () => {
    cy.on("uncaught:exception", () => false);
    cy.visit("https://matat-vibez.myshopify.com/password");
    cy.get('input[type="password"]').type('Matat2020{enter}', { log: false });

    // Navigate to Shop Now from homepage
    cy.contains("Shop Now").click({ force: true });

    // Select product in Products page
    cy.get('a[href*="/products/"]').first().click({ force: true });

    // Add product to cart
    cy.get('form[action*="/cart/add"] button[type="submit"]').first().click();

    // Go to cart and checkout
    cy.contains("Cart").click({ force: true });
    cy.get("#CartDrawer-Checkout").click();

    // Assert url on the checkout page
    cy.url().should("include", "/checkouts/");
  });
});
