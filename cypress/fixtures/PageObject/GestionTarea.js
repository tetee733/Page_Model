export class Tareas {
    constructor(){
        this.web = "https://todomvc.com/examples/react/dist/"
        this.tarea = " .new-todo"
        this.completed = '[data-testid="footer-navigation"] > :nth-child(3) > a'
        this.activar = ':nth-child(2) > a'
    }
    complete(){
        cy.visit(this.web)
        cy.get(this.tarea).type('tarea 1{enter}')
        cy.get(this.tarea).type('tarea 2{enter}')
        cy.get(this.tarea).type('tarea 3{enter}')
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get(this.completed).click()
        cy.get('[data-testid="todo-item-label"]').should("be.visible")
    }
    active(){
        cy.visit(this.web)
        cy.get(this.tarea).type('tarea 1{enter}')
        cy.get(this.tarea).type('tarea 2{enter}')
        cy.get(this.tarea).type('tarea 3{enter}')
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
        cy.get(this.activar).click()
        cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').should("be.visible")
        cy.get(':nth-child(2) > .view > [data-testid="todo-item-label"]').should("be.visible")
    }
    doble(){
        cy.visit(this.web)
        cy.get(this.tarea).type('tarea 1{enter}')
        cy.get(this.tarea).type('tarea 1{enter}')
    }
}
export const gestiontarea = new Tareas()
