describe("React TodoMVC practice", () => {
  beforeEach("get into local host", () => {
    cy.visit("http://192.168.2.43:8888")
  })
  it("adds five todos", () => {
    // Without using the cy.createDefaultTodos() custom command
    // write a test that asserts you can add 5 todos
    // Hint: make sure to assert the length is equal to 5
    cy.createDefaultTodos()
    cy.get(".new-todo").type("do nails {enter}")
    cy.get(".new-todo").type("put lashes on {enter}")
    cy.get(".todo-list li").should("have.length", 5)
  })

  it("focuses on the todo input field, when the app is first opened", () => {
    // Write a test that asserts that the input field
    // is focused automatically when the app is first loaded.
    // Hint: you will need to use cy.focused()
    // https://docs.cypress.io/api/commands/focused

    cy.focused().should("have.class", "new-todo")
  })

  it("should clear text input field when an item is added", () => {
    // Write a test that ensures that the input field is cleared
    // after adding a todo
    cy.get(".new-todo")
      .type("get ready to go out {enter}")
      .should("have.text", "")
  })

  it('can mark a todo as "completed"', () => {
    // Write a test that ensures that a todo can be "completed"
    // Hint: You will need to verify the class name of the completed todo
    cy.createDefaultTodos()
    cy.get(".todo-list li").find(".toggle").click({ multiple: true })
    cy.get(".todo-list li").should("have.class", "completed")
  })

  it.only('the "Clear completed" button clears all completed todos', () => {
    // Write a test that ensures that the "Clear completed" removes
    // all completed todos from the app
    // Hint: You will need to verify the class name of the completed todo
    cy.createDefaultTodos()
    cy.get(".todo-list li").find(".toggle").click({ multiple: true })
    cy.get(".clear-completed").click()
    cy.get(".completed").should("not.exist")
  })

  it("allows you to edit a todo", () => {
    // Write a test that ensures that you can edit a todo
    // Hint: You will need to use cy.dblclick()
    // https://docs.cypress.io/api/commands/dblclick
  })

  it("should save edits on blur", () => {
    // Write a test that ensures that an edited todo is saved when it is blurred
    // Hint: You will need to use cy.blur()
    // https://docs.cypress.io/api/commands/blur
  })

  it("should display the current number of todo items", () => {
    // Write a test that ensures that the app counts the correct number of todos
    // left to be completed, i.e "3 items left" in the bottom left corner.
  })

  it("should persist its data after a page refresh", () => {
    // Write a test that ensures that the todos are persisted in the app
    // after the browser refreshes the page
    // Hint: You will need to use cy.reload()
    // https://docs.cypress.io/api/commands/reload
  })

  it("can display only completed todos", () => {
    // Write a test that ensures that only the completed todos are
    // displayed when the "Completed" button is clicked at the bottom
  })
})
