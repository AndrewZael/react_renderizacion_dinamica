const Filter = ({ list, setListFiltered }) => {

    return (
        <label className="small w-100">
            <input type="search" onChange={(e) => {
                const newList = list.filter(item => {
                    return item ? 
                    item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(e.target.value) : list;
                }
                );
                setListFiltered(newList);
            }}
                id="input-filter"   
                placeholder="Buscar colaborador..." className="form-control w-100"/>
        </label>
    )
}
export default Filter;