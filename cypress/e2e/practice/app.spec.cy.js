describe("React TodoMVC", () => {
  const TODO_ITEM_ONE = "Fold the laundry"
  const TODO_ITEM_TWO = "Study Github"
  const TODO_ITEM_THREE = "feed the fur children"

  beforeEach(() => {
    cy.visit("http://localhost:8888")
  })
  it("adds a single todo", () => {
    cy.get(".new-todo").type(`${TODO_ITEM_ONE}{enter}`)
    cy.get(".todo-list li").should("have.length", 1)
  })

  it("adds three todos", () => {
    cy.createDefaultTodos()
    cy.get(".todo-list li").should("have.length", 3)
    cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
  })

  it("should append new items to the bottom of the list", () => {
    cy.createDefaultTodos()
    cy.get(".todo-list li").eq(0).find("label").should("contain", TODO_ITEM_ONE)
    cy.get(".todo-list li").eq(1).find("label").should("contain", TODO_ITEM_TWO)
    cy.get(".todo-list li")
      .eq(2)
      .find("label")
      .should("contain", TODO_ITEM_THREE)
    cy.get(".todo-list li").should("have.length", 3)
    cy.get(".todo-count").contains("3 items left")
  })
})
