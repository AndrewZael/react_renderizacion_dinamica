import { useState } from "react";
import Filter from "./Filter.jsx";

const Collaborators = ({ list, listFiltered, setListFiltered, setListCollaborators }) => {
    
    const deleteCollaborator = (e, id) => {
        const i = list.findIndex(e => e.id === id);
        if(window.confirm(`¿Seguro que deseas eliminar al Colaborador ${list[i].name} cuyo ID es ${id}?`)){
            setTimeout(() => {
                const newList = [...list];
                const newListFiltered = [...listFiltered];
                newList[i].delete = true;
                newListFiltered[i].delete = true;
                setListCollaborators(newList);
                setListFiltered(newListFiltered);
            },1500);
        }
        selectRow(e);
    }

    const selectRow = e => {
        const row = e.target.parentElement.parentElement;
        row.classList.add('delete');
    }

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
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listFiltered.map(
                            item => !item.delete && <tr key={item.id}>
                                <td valign="middle">{item.id}</td>
                                <td valign="middle">{item.name}</td>
                                <td valign="middle">{item.mail}</td>
                                <td valign="middle" className="text-end">
                                    <button onClick={(e) => deleteCollaborator(e, item.id)} className="btn">
                                        <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="red" height="24" width="24" viewBox="0 0 48 48">
                                            <path d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Collaborators;