describe('my-first-lib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=myfirstlibcomponent--primary'));

  it('should render the component', () => {
    cy.get('test-storybook-my-first-lib').should('exist');
  });

  it('should display 😄 when clickin on the ClickMe button', () => {
    cy.get('[data-cy="clickMeBtn"]').click();
    cy.get('[data-cy="content"]').should('have.text', '😄');
  });
});
