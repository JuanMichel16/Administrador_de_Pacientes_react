import { Control, Controller, FieldError } from "react-hook-form";
import { Patient } from "schemas/patient.schema";

interface FieldProps {
  label: string;
  control: Control<Patient>
  name: keyof Patient;
  type?: string;
  placeholder?: string;
  error?: FieldError;
}

const InputForm = ({placeholder = '', name, label, type = 'text', control, error} : FieldProps) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block uppercase text-gray-700 font-bold">
          {label}
      </label>

      {type === 'textarea' ? (
        <Controller 
          name={name}
          control={control}
          render={({field}) => 
            <textarea
              {...field}  
              id={name} 
              placeholder={placeholder} 
              className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${error && 'border-red-600'} `} 
            />}
        />        
      ) : (
        <Controller 
          name={name}
          control={control}
          render={({field}) => 
            <input 
              {...field} 
              type={type} 
              placeholder={placeholder}
              className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${error && 'border-red-600'} `} 
              id={name} 
            />}
        />
      )}

      {error && <p className="text-red-600">{error.message}</p>}
    </div> 

  );
}
 
export default InputForm;