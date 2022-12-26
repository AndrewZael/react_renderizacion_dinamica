import { useState } from "react";
import Filter from "./Filter.jsx";
import Message from "./Message.jsx";
import empty from '../assets/img/empty_street.svg';

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
            selectRow(e);
        }
    }

    const selectRow = e => {
        const row = e.target.parentElement.parentElement;
        row.classList.add('delete');
    }

    return(
        <div className="border shadow-sm rounded overflow-hidden">
            <header className="px-3 py-2 bg-light border-bottom mb-3 row align-items-center">
                <h2 className="col-12 col-sm-6 col-md-8 col-xl-9 h4 mb-2 mb-md-0 text-truncate">Listado de colaboradores</h2>
                <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                    <Filter list={list} setListFiltered={setListFiltered} />
                </div>
            </header>
            <table className="table table-striped mb-0">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listFiltered.map(
                            item => !item.delete && <tr key={item.id}>
                                <td valign="middle" className="text-capitalize">{item.name}</td>
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

            {listFiltered.length < 1 ?
            <Message 
                img={empty} 
                title="No existen resultados" 
                message="No se encontraron resultados para tu búsqueda, inténtalo nuevamente." /> : null
            }
        </div>
    )
}

export default Collaborators;