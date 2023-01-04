import React, { useState, useEffect } from 'react';
import Error from './Error';


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [ cliente, setCliente ] = useState({mascota: "", propietario: "", email: "", fecha: "", sintomas: ""});
    const [ error, setError] = useState(false);
    const { mascota, propietario, email, fecha, sintomas } = cliente;

    useEffect(() => {
        // Que se ejecute la funcion solo cuando haya algun paciente
        if( Object.keys(paciente).length > 0) {
            setCliente(paciente);
        }
        
    }, [paciente]);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([mascota, propietario, email, fecha, sintomas].includes("") ) {
            setError(true);
            return;
        }

        if(paciente.id) {
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? cliente : pacienteState) 
            setPacientes(pacientesActualizados);
            setPaciente({})

        } else {

            cliente.id = generarId();
            setPacientes([...pacientes, cliente]);
        }

        setError(false);
        // Vaciar formulario
        setCliente({mascota: "", propietario: "", email: "", fecha: "", sintomas: ""})
    }

    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="text-lg mt-5 mb-10 text-center">
                Añade pacientes y {" "}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {error && <Error>Todos los campos son obligatorios</Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block uppercase text-gray-700 font-bold">
                        Nombre Mascota
                    </label>

                    <input
                        id="mascota"
                        type="text"
                        name="mascota"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={mascota}
                        onChange={(e) => setCliente({...cliente, [e.target.name]: e.target.value})}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block uppercase text-gray-700 font-bold">
                        Nombre Propietario
                    </label>

                    <input
                        id="propietario"
                        name="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setCliente({...cliente, [e.target.name]: e.target.value})}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block uppercase text-gray-700 font-bold">
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="correo@correo.com"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setCliente({...cliente, [e.target.name]: e.target.value})}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block uppercase text-gray-700 font-bold">
                        Alta
                    </label>

                    <input
                        id="alta"
                        name="fecha"
                        type="date"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setCliente({...cliente, [e.target.name]: e.target.value})}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block uppercase text-gray-700 font-bold">
                        Sintomas
                    </label>

                    <textarea
                        id="sintomas"
                        name="sintomas"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) => setCliente({...cliente, [e.target.name]: e.target.value})}
                    />
                </div>

                <input 
                type="submit" 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                value="Agregar Paciente"
                />
            </form>
        </div>
     );
}
 
export default Formulario;
