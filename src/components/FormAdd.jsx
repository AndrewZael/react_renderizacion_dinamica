import { useState } from 'react';
import Alert  from 'react-bootstrap/Alert';

const FormAdd = (props) => {

    const [showAlert, setShowAlert] = useState(true);
    const [collaboratorExist, setCollaboratorExist] = useState(false);
    const [collaborator, setCollaborator] = useState({});
    const add = (e) => {
        e.preventDefault();
        if(validatorCollaborator(collaborator.mail)){
            setCollaboratorExist(true);
            setShowAlert(true);
        }else{
            props.setListCollaborators([collaborator, ...props.listCollaborators]);
            props.setListFiltered([collaborator, ...props.listFiltered]);
            e.target.reset();
            setCollaboratorExist(false);
        }
    }

    const setValues = e => {
      const { name, value } = e.target;
      setCollaborator(prev => ({
        ...prev,
        ["id"]: (new Date().getTime()).toString(36),
        ["delete"]: false,
        [name]: value
      }));
    }

    const validatorCollaborator = mail => props.listCollaborators.some(c => c.mail === mail);

    return(
        <form onSubmit={add} className="mb-4 row align-items-end">
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

          { 
            (collaboratorExist && showAlert) ? 
              <div className='col-12'>
                <Alert variant="warning" 
                  onClose={() => setShowAlert(false)} dismissible className='mt-3 mb-0'>
                    Colaborador ya existe
                   </Alert>
              </div> : null 
          }

        </form>


    )
}
export default FormAdd;