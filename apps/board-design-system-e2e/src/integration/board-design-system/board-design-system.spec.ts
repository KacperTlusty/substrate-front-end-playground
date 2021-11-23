describe('board-design-system: BoardDesignSystem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=boarddesignsystem--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BoardDesignSystem!');
    });
});
