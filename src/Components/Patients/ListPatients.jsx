import { generateId } from '../../Helpers/generateId';
import { Patient } from './Patient';

export const ListPatients = ({ patients, setPatient, setPatients }) => {
  const handleDeletedPatient = (patientId) => {
    const patientsFilter = patients.filter((p) => p.id !== patientId);
    setPatients(patientsFilter);
  }

  return (
    <div className="md:w-1/2 lg:w-3/5">
      { patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado Pacientes
            </h2>
            <p className="text-lg mt-5 mb-10 text-center">
              Administra tus {""}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            <div className="md:h-screen overflow-y-scroll">
              {
                patients.map((patient) => (
                  <Patient
                    key={generateId}
                    patient={patient}
                    handlePatientSelected={() => setPatient(patient)}
                    handleDeletedPatient={() => handleDeletedPatient(patient.id)}
                  />
                ))
              }
            </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
          <div className="md:h-screen overflow-y-scroll">
            {
              patients.map((patient) => (
                <Patient key={generateId} patient={patient} />
              ))
            }
          </div>
        </>
      ) }
      
    </div>
  )
}
