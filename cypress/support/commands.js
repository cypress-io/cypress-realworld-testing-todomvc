Cypress.Commands.add("createDefaultTodos", () => {
    const TODO_ITEM_ONE = "Buy Milk"
    const TODO_ITEM_TWO = "Pay Rent"
    const TODO_ITEM_THREE = "Pickup Dry Cleaning"

    cy.get(".new-todo")
        .type(`${TODO_ITEM_ONE}{enter}`)
        .type(`${TODO_ITEM_TWO}{enter}`)
        .type(`${TODO_ITEM_THREE}{enter}`)
});

