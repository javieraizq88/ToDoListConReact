import React, { Component } from "react";

class ListaToDo extends Component {
    constructor() {
        super();
        this.state = {
            tareas: []
        }
    }

    agregarTarea(e) {
        if (e.keyCode == 13 && e.target.value !== '') {
            this.setState({
                tareas: this.state.tareas.concat(e.target.value)
            })
            e.target.value = " ";
        }
    }

    eliminarTarea(i) {
        const tareas = this.state.tareas;
        tareas.splice(i, 1);
        this.setState({
            tareas: tareas
        })
    }

    eliminarBoton(i) {
        const tareas = this.state.tareas;
        tareas.splice(i);
        this.setState({
            tareas: tareas
        })
    }

    render() {
        return (
            <>
                <div className=" card paper">
                    <div className="input group">
                        <input
                            id="agregarToDo"
                            type="text"
                            className="form-control"
                            placeholder="Agregar tarea"
                            onKeyDown={(e) => this.agregarTarea(e)} />
                    </div>
                    <br/>
                    {
                        this.state.tareas.length > 0 ? (
                            <ul className="list-group list-group-flush" id="list">
                                {
                                    this.state.tareas.map((tarea, i) => {
                                        return (
                                            <div>
                                                <span className="ml-2">{tarea}</span> 
                                                <span><i className=" fa fa-times float-right mr-2" onClick={() => this.eliminarTarea(i)} ></i></span>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        ) : (
                                <p className="mb-0 ml-1 text-center text-primary">No quedan tareas  </p>
                            )
                    }
                    <br/> 
                    <div className="input-group-append" id="button-addon4">
                        <button className="btn btn-danger" onClick={(i) => this.eliminarBoton(i)} type="button">Eliminar todas las tareas</button>
                    </div>
                </div>
            </>
        )
    }
}


export default ListaToDo;