describe("React TodoMVC",() => {
    it('adds a single todo', () => {
        cy.visit("http://localhost:8888")
        cy.get(".new-todo").type("Buy milk{enter}")
    });
})