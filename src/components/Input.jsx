const Input = ({ name, placeholder, label, setValue, required = true, type = 'text' }) => {
    return(
        <div className="col-12 col-md-4">
            <label htmlFor={'input-' + name} className="small">{label}</label>
            <input onChange={(e) => {setValue(e.target.value)}}
                id={'input-' + name} 
                type={type}
                name={name} 
                required={required} 
                placeholder={placeholder} className="form-control w-100"/>
        </div>
    );
}

export default Input;