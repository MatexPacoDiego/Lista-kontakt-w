import { Person } from "./commpoments/Person.jsx";
import { Form } from "./commpoments/Form.jsx";
import { useState } from "react";
import "./App.css";

const person = [
  {
    name: "Filip",
    tel: 666555222,
    city: "Kraków",
  },
  {
    name: "Karol",
    tel: 222666555,
    city: "Lębork",
  },
];

export default function App() {
  const [addPerson, setAddPerson] = useState(false);
  const [peolpe, setPeople] = useState(person);
  const AddPerson = () => {
    setAddPerson(true);
  };

  const AddNewPerson = (data) => {
    const newPeople = [...person, data];
    setPeople(newPeople);
  };
  return (
    <>
      <h1>Lista kontaktów</h1>
      {addPerson ? (
        <Form onAddNewPerson={AddNewPerson} />
      ) : (
        <button onClick={AddPerson}>Dodaj</button>
      )}
      <ul>
        {peolpe.map((peolpe) => (
          <Person
            key={peolpe.tel}
            name={peolpe.name}
            tel={peolpe.tel}
            city={peolpe.city}
          />
        ))}
      </ul>
    </>
  );
}
