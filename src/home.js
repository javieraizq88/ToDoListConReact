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
    return this.hanldeKeyDown () ;
} 
    // handleClick = () => (
    //     this.setState
    // )

    borrarTarea = () => {
        console.log("borrar esta tarea")
    }

    render() {
        return (
            <>

                <div className="contenedorGrande justify-center col-4">
                    <div className="card" >
                        <div className="card-header bg-transparent">To do</div>
                        <div className="card-body text-success">

<ListaToDo />
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;