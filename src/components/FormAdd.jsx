import Input from './Input.jsx';

const FormAdd = (props) => {
    
    const add = (id, name, mail) => {
        const newCollaborator =  { id, name, mail }
        props.setListCollaborators([...props.listCollaborators, newCollaborator]);
        props.setListFiltered([...props.listFiltered, newCollaborator]);
    }

    return(
        <form onSubmit={(e) => 
            {
              e.preventDefault()
              add(props.listCollaborators.length + 1, props.collaborator, props.mail)
              e.target.reset()
            }
          } className="mb-4 row align-items-end">
          <Input 
            label="Nombre colaborador" 
            name="collaborator"
            placeholder="Ej: Juan Hernandez"
            setValue={props.setCollaborator}
          />
          <Input 
            label="Correo colaborador" 
            name="mail"
            type="email" 
            placeholder="Ej: mail@mail.com"
            setValue={props.setMail} 
          />
          <div className="col-12 col-md-4">
            <button className="btn btn-primary">Agregar colaborador</button>
          </div>
        </form>
    )
}
export default FormAdd;