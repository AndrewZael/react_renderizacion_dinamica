const Filter = ({ list, setListFiltered }) => {

    return (
        <>
        <label htmlFor="input-filter" className="small">Buscar colaborador</label>
        <input onChange={(e) => {
            const newList = list.filter(item => {
                return item ? 
                item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(e.target.value) : list;
            }
            );
            setListFiltered(newList);
            console.log(newList);
        }}
            id="input-filter"   
            placeholder="Buscar..." className="form-control w-100"/>
        </>
    )
}
export default Filter;