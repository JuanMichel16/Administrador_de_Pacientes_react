import { useState } from 'react';
import Header from './components/Header'
import ListadoPacientes from './components/PatientsList';
import PatientForm from './components/PatientForm/PatientForm';
import type { Patient } from '@schemas/patient.schema';

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [patient, setPatient] = useState<Patient>({} as Patient);

  const deletePatient = (patient: Patient) => {
    const newPatients = patients.filter( pacienteTotal => pacienteTotal.id !== patient.id );
    setPatients(newPatients);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <PatientForm patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient} />
        <ListadoPacientes patients={patients} setPatient={setPatient} deletePatient={deletePatient}/>
      </div>

    </div>
  )
}

export default App
