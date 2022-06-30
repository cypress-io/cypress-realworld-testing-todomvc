describe("React TodoMVC", () => {
  it("adds a single todo", () => {
    cy.visit("http://localhost:8888")
    cy.get(".new-todo").type("Study Github {enter}")
    cy.get(".new-todo").type("feed the fur children {enter}")

    cy.get(".todo-list li").should("have.length", 2)
  })
})
