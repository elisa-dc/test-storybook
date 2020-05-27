describe('my-second-lib', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mysecondlibcomponent--primary&knob-todos')
  );

  it('should render the component', () => {
    cy.get('test-storybook-my-second-lib').should('exist');
  });

  it('should contain 2 todos', () => {
    cy.get('[data-cy="todos"]').should('have.length', 2);
  });
});
