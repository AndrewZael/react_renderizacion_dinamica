import { useState } from "react";
import Filter from "./Filter.jsx";

const Collaborators = ({ list, listFiltered, setListFiltered }) => {
    
    return(
        <div className="border shadow-sm rounded overflow-hidden">
            <header className="px-3 pt-2 pb-3 bg-light border-bottom mb-3 row align-items-center">
                <h2 className="col-9 h4 mb-0">Listado de colaboradores</h2>
                <div className="col">
                    <Filter list={list} setListFiltered={setListFiltered} />
                </div>
            </header>
            <table className="table table-striped mb-0">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listFiltered.map(
                            item => <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.mail}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Collaborators;