describe("React TodoMVC",() => {
   beforeEach(() => {
    cy.visit("http://localhost:8888")
   });
   
    it('adds a single todo', () => {
        cy.get(".new-todo").type("Buy milk{enter}")
        cy.get(".todo-list li").should("have.length",1)
    });

    it("adds three todos",() => {
        cy.get(".new-todo").type("Buy something{enter}")
        cy.get(".new-todo").type("Buy things{enter}")
        cy.get(".new-todo").type("Buy else{enter}")
    })
})