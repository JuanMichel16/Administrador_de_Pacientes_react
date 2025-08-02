import { Patient } from "@schemas/patient.schema";
import Paciente from "./Patient";

interface PatientsListProps {
    patients: Patient[];
    setPatient : React.Dispatch<React.SetStateAction<Patient>>;
    deletePatient: (patient: Patient) => void;
}

const PatientsList = ({patients, setPatient, deletePatient} : PatientsListProps) => {

    return ( 
            <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll mx-3">

                { patients && patients.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">Listado patients</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Administra tus {" "}
                            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
                        </p>

                        {patients.map( pacient => (
                            <Paciente 
                                key={pacient.id} 
                                patient={pacient}
                                setPatient={setPatient}
                                deletePatient={deletePatient}
                            />
                        ))}
                    </>

                ) : (

                    <>
                        <h2 className="font-black text-3xl text-center">No hay patients</h2>
                        <p className="text-xl mt-5 mb-10 text-center">
                            Comienza agregando patients y {" "}
                            <span className="text-indigo-600 font-bold">apareceran en este lugar</span>
                        </p>
                    </>
                )}
            </div>
    );
}
 
export default PatientsList;
