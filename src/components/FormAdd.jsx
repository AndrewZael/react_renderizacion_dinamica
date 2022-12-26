import { useState } from 'react';
import Alert  from 'react-bootstrap/Alert';

const FormAdd = ({ listCollaborators, setListCollaborators, listFiltered, setListFiltered}) => {

    const [showAlert, setShowAlert] = useState(true);
    const [collaboratorExist, setCollaboratorExist] = useState(false);
    const  [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const add = (e) => {
        e.preventDefault();
        if(validatorCollaborator(mail)){
            setCollaboratorExist(true);
            setShowAlert(true);
        }else{
            const newCollaborator = {id: (new Date().getTime()).toString(36), name: name, mail: mail};
            setListCollaborators([newCollaborator, ...listCollaborators]);
            setListFiltered([newCollaborator, ...listFiltered]);
            e.target.reset();
            setCollaboratorExist(false);
        }
    }

    const validatorCollaborator = mail => listCollaborators.some(c => c.mail === mail);

    return(
        <form onSubmit={add} className="mb-4 row align-items-end">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <label htmlFor="input-name" className="small">Nombre colaborador</label>
            <input onChange={(e) => setName(e.target.value.trim().toLowerCase())}
                id="input-name" 
                name="name"
                required
                placeholder="Ej: Juan Hernandez" className="form-control w-100"/>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <label htmlFor="input-email" className="small">Correo colaborador</label>
            <input onChange={(e) => setMail(e.target.value.trim().toLowerCase())}
                id="input-email" 
                type="email"
                name="mail"
                required
                placeholder="Ej: mail@mail.com" className="form-control w-100"/>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <button className="btn btn-primary">Agregar colaborador</button>
          </div>

          { 
            (collaboratorExist && showAlert) ? 
              <div className='col-12'>
                <Alert variant="warning" 
                  onClose={() => setShowAlert(false)} dismissible className='mt-3 mb-0'>
                    Colaborador ya existe, email ya está en uso.
                   </Alert>
              </div> : null 
          }

        </form>


    )
}
export default FormAdd;