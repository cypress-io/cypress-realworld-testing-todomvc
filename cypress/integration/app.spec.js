


describe("React TodoMVC", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8888");
  })

  it("adds a single todo", () => {//JORGE 
    const inputToDoCSS = "input.new-todo";
    const listOfToDoItemsCSS = ".todo-list > li";
    // We need to focus on the input field.

    // We need to enter in the name of our todo.
    // We need to press the enter key to add our todo.
    cy.get(inputToDoCSS)
      .type("Buy Milk{enter}");


    cy.get(listOfToDoItemsCSS).should("have.length", 1);

  });

});
