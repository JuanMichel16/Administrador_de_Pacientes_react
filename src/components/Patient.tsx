import type { Patient as PatientInterface} from "@schemas/patient.schema"

interface PatientProps {
    patient: PatientInterface;
    setPatient: React.Dispatch<React.SetStateAction<PatientInterface>>;
    deletePatient: (patient: PatientInterface) => void;

}

const Patient = ({patient, setPatient, deletePatient} : PatientProps) => {
    const { name, owner, email, date, symptoms } = patient;
    return ( 
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {" "}
            <span className="font-normal normal-case">{name}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {" "}
            <span className="font-normal normal-case">{owner}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {" "}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha alta: {" "}
            <span className="font-normal normal-case">{date?.toLocaleString() ?? ''}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
            sintomas: {" "}
            <span className="font-normal normal-case">{symptoms}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-bold uppercase rounded-lg"
                onClick={() => setPatient(patient)}
                >Editar</button>

            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 cursor-pointer text-white font-bold uppercase rounded-lg"
                onClick={() => deletePatient(patient)}
                >Eliminar</button>
        </div>
    </div>
     );
}
 
export default Patient;