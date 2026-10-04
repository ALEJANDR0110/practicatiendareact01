function Producto(props) {
    const {id, nombre, precio, disponible, cambiarEstado} = props;

    const disponibilidad = () => {
        if(disponible) {
            return "Si";
        }else {
            return "No";
        }
    }

    return(
        <div>
            <h3>Producto:</h3>
            <h4>ID: {id}</h4>
            <h4>{nombre}</h4>
            <h4>{precio}</h4>
            <h4>Disponible: {disponibilidad()}</h4>
            <button onClick={() => cambiarEstado(id)}>Cambiar estado</button>
        </div>
    )
}

export default Producto;