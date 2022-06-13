import { useEffect, useState } from 'react';
import { generateId } from '../../Helpers/generateId';

const initialState = {
  name: "",
  owner: "",
  email: "",
  date: "",
  symptoms: ""
}

export const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [formValues, setFormValues] = useState(initialState);
  const {
    name,
    owner,
    email,
    date,
    symptoms
  } = formValues;

  const [error, setError] = useState(false);

  useEffect(() => {
    if(patient.id){
      setFormValues(patient);
    }
  }, [patient]);

  const handleInputChange = ({ target }) => {
    setFormValues((prev) => ({
      ...prev,
      [target.name]: target.value
    }));
  }

  const handleResetInputs = () => {
    setPatient({});
    setFormValues(initialState);
    setError(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateInputs()){
      const patientValues = {
        ...formValues,
        id: generateId()
      };

      setPatients((prev) => {
        if(patient.id){
          return patients.map((p) => p.id === patient.id ? patientValues : p);
        }else{
          return [
            ...prev,
            patientValues
          ]
        }
      });
      handleResetInputs();
    }
  }

  const validateInputs = () => {
    if([name, owner, email, date, symptoms].includes('')){
      setError(true);
      return false;
    }

    return true;
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-bold text-3xl mb-10">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
        Añade Paciente y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
          { error && <Error message="Todos los campos son obligatorios" /> }
          <div className="mb-5">
            <label htmlFor="name" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre de la mascota"
              value={name}
              onChange={handleInputChange}
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Dueño</label>
            <input
              type="text"
              name="owner"
              id="owner"
              placeholder="Dueño"
              value={owner}
              onChange={handleInputChange}
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={handleInputChange}
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>
            <input
              type="date"
              name="date"
              id="date"
              value={date}
              onChange={handleInputChange}
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea
              id="symptoms"
              name="symptoms"
              placeholder="Describe los sintomas"
              value={symptoms}
              onChange={handleInputChange}
              className="border-2 p-2 mt-2 w-full placeholder-gray-400 rounded-md"
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={patient.id ? 'Editar Paciente' : 'Agregar Paciente'} />
        </form>
    </div>
  )
}
