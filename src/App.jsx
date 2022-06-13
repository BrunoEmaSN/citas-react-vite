import { useEffect, useState } from "react"
import { Form } from "./Components/Form/Form"
import { Header } from "./Components/Header/Header"
import { ListPatients } from "./Components/Patients/ListPatients";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getPatients = () => {
      const patientsStorage = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(patientsStorage);
    }

    getPatients();
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListPatients
          patients={patients}
          setPatient={setPatient}
          setPatients={setPatients}
        />
      </div>
    </div>
  )
}

export default App
