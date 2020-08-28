
describe("Live Search", function(){
  it("Pesquisar nome", function(){
    cy.visit('./index.html')
    cy.get('#search')
    .type("Neymar").debug().type('{enter}')
    cy.contains('gol do neymar')
  })
})