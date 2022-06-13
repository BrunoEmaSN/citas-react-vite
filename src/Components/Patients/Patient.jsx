export const Patient = ({ patient, handlePatientSelected, handleDeletedPatient }) => {
  const {
    name,
    owner,
    email,
    date,
    symptoms
  } = patient;

  return (
    <div className="bg-white m-3 px-5 py-10 shadow-md rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">
            {name}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Dueño: {""}
          <span className="font-normal normal-case">
            {owner}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">
            {email}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">
            {date}
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: {""}
          <span className="font-normal normal-case">
            {symptoms}
          </span>
        </p>
        <div className="flex justify-end">
          <div className="px-2">
            <button onClick={handlePatientSelected} type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
              Editar
            </button>
          </div>
          <div className="px-2">
            <button onClick={handleDeletedPatient} type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
              Eliminar
            </button>
          </div>
        </div>
    </div>
  )
}
