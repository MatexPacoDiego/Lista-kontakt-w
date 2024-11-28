import { Person } from "./components/Person/Person.jsx";
import { Form } from "./components/Form/Form.jsx";
import { useState } from "react";
import "./App.css";

const contacts = [
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
  const [people, setPeople] = useState(contacts);
  const increasePerson = () => {
    setAddPerson(true);
  };

  const addNewPerson = (data) => {
    const newPeople = [...contacts, data];
    setPeople(newPeople);
  };
  return (
    <>
      <h1>Lista kontaktów</h1>
      {addPerson ? (
        <Form onAddNewPerson={addNewPerson} />
      ) : (
        <button onClick={increasePerson}>Dodaj</button>
      )}
      <ul>
        {people.map((people) => (
          <Person
            key={people.tel}
            name={people.name}
            tel={people.tel}
            city={people.city}
          />
        ))}
      </ul>
    </>
  );
}
