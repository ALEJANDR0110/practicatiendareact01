import { useState } from "react";
import Producto from "./Producto";

function ListadoProductos() {
    const [productos, setProductos] = useState([
        { id: 1, nombre: "Teclado", precio: 25, disponible: true },
        { id: 2, nombre: "Ratón", precio: 15, disponible: false },
        { id: 3, nombre: "Monitor", precio: 180, disponible: true }
    ])

    const cambiarEstado = (id) => {
        const nuevosProductos = productos.map(p => {
            if (p.id === id) {
                return {
                    ...p,
                    disponible: !p.disponible
                };
            } else {
                return p;
            }
        });
        setProductos(nuevosProductos);
    };

    return(
        <div>
            <h1>Listado de Productos:</h1>
            {productos.map(p => (
                <Producto 
                    key={p.id}
                    id={p.id}
                    nombre={p.nombre}
                    precio={p.precio} 
                    disponible={p.disponible} 
                    cambiarEstado={cambiarEstado}
                />
            ))}
        </div>
    )
}

export default ListadoProductos;