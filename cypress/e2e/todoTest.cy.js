import { gestiontarea } from "../PageObject/GestionTarea"
describe('Test ToDo', () => {
    it(' Comprobar que al marcar tareas el filtro Completed funciona correctamente', () => {
    gestiontarea.complete()
    })
    it(' Comprobar que al marcar tareas el filtro Active funciona correctamente', () => {
    gestiontarea.active
    })
    it('Agregar dos tareas con el mismo nombre', () => {
    gestiontarea.doble
    })
    })