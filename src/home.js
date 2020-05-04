import React, { useState, Component } from 'react';
import ListaToDo from './component/listaToDo';

class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    hanldeKeyDown = e => {
        if (e.keyCode == 13) {
            console.log(e.keyCode);
            console.log(e.target.value)
        }
    }

    nuevaTarea = () => {
        return this.hanldeKeyDown();
    }

    borrarTarea = () => {
        console.log("borrar esta tarea")
    }

    render() {
        return (
            <>

                <div className="contenedorGrande justify-center col-4">
                    <div className="card" >
                        <div className="card-header text-center bg-transparent"><h1>ToDo List</h1> </div>
                        <div className="card-body ">
                            <ListaToDo />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;