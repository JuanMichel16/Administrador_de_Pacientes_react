import { useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'; 
import { Patient, PatientSchema } from '@schemas/patient.schema'; 
import InputForm from './components/field/InputForm';
import { generateId } from '@/utils/generateId';

interface PatientFormProps {
    patients : Patient[];
    setPatients: React.Dispatch<React.SetStateAction<Patient[]>>;
    patient: Patient;
    setPatient: React.Dispatch<React.SetStateAction<Patient>>;
};

const initialPatientState: Patient = {
    name: '',
    owner: '',
    email: '',
    date: '',
    symptoms: '',
};


const PatientForm = ({patient, setPatients, patients, setPatient} : PatientFormProps) => {
    const { handleSubmit, control, formState: {errors}, reset } = useForm<Patient>({
        resolver: zodResolver(PatientSchema),
        defaultValues: {
            ...initialPatientState
        },
    })

    useEffect(() => {
        // Que se ejecute la funcion solo cuando haya algun patient
        if( Object.keys(patient).length > 0) {
            reset(patient)
        }
        
    }, [patient]);

    const resetForm = () => {
        setPatient({} as Patient)
        reset({...initialPatientState})
    }

    const onSubmit: SubmitHandler<Patient> = (data) => {
        if(patient.id) {
            const pacientesActualizados = patients.map( pacienteState => pacienteState.id === patient.id ? data : pacienteState) 
            setPatients(pacientesActualizados);

        } else {
            
            const client = {...data, id: generateId()}
            setPatients([...patients, {...client}]);
        }

        resetForm();
    }

    return ( 
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento patients</h2>

            <p className="text-lg mt-5 mb-10 text-center">
                Añade patients y {" "}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                <InputForm 
                    name='name' 
                    label='Nombre de la Mascota'
                    placeholder='Nombre de la mascota'
                    control={control}
                    error={errors.name}
                />

                <InputForm 
                    name='owner' 
                    label='Nombre Propietario'
                    placeholder='Nombre del propietario'
                    control={control}
                    error={errors.owner}
                />


                <InputForm 
                    name='email' 
                    label='Email'
                    placeholder='correo@correo.com'
                    control={control}
                    error={errors.email}
                />


                <InputForm 
                    name='date' 
                    label='Alta'
                    type='date'
                    control={control}
                    error={errors.date}
                />

                <InputForm 
                    name='symptoms' 
                    label='Sintomas'
                    type='textarea'
                    placeholder='Escriba los sintomas'
                    control={control}
                    error={errors.symptoms}
                />

                <div className='flex flex-col gap-2 flex-wrap'>
                    <button className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' type='submit'>
                        {patient.id ? 'Confirmar cambios' : 'Agregar Paciente'}
                    </button>

                    {patient.id &&
                        <button
                            type='button'
                            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                            onClick={resetForm}
                        >
                            Cancelar Cambios
                        </button> 
                    }
                </div>
            </form>
        </div>
    );
}
 
export default PatientForm;
