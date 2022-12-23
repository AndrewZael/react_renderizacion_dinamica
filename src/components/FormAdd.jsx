import { useState } from 'react';

const FormAdd = (props) => {
    
    const [user, setUser] = useState({});
    const add = (e) => {
        e.preventDefault();
        props.setListCollaborators([...props.listCollaborators, user]);
        props.setListFiltered([...props.listFiltered, user]);
        e.target.reset();    }

    const setValues = e => {
      const { name, value } = e.target;
      setUser(prev => ({
        ...prev,
        ["id"]: props.listCollaborators.length + 1,
        [name]: value
      }));
    }

    return(
        <form onSubmit={(e) => add(e)
          } className="mb-4 row align-items-end">
          <div className="col-12 col-md-4">
            <label htmlFor="input-name" className="small">Nombre colaborador</label>
            <input onChange={setValues}
                id="input-name" 
                name="name"
                required
                placeholder="Ej: Juan Hernandez" className="form-control w-100"/>
          </div>
          <div className="col-12 col-md-4">
            <label htmlFor="input-email" className="small">Correo colaborador</label>
            <input onChange={setValues}
                id="input-email" 
                type="email"
                name="mail"
                required
                placeholder="Ej: mail@mail.com" className="form-control w-100"/>
          </div>
          <div className="col-12 col-md-4">
            <button className="btn btn-primary">Agregar colaborador</button>
          </div>
        </form>
    )
}
export default FormAdd;