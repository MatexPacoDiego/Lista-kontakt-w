import { useState } from "react";
import styles from "./Form.module.css";

export const Form = ({ onAddNewPerson }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddNewPerson({ name, tel, city });
      }}
    >
      <div>
        <input
          className={styles.input}
          type="text"
          defaultValue={name}
          name="name"
          placeholder="Imie"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className={styles.input}
          type="tel"
          defaultValue={tel}
          name="tel"
          placeholder="Telefon"
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className={styles.input}
          type="text"
          defaultValue={city}
          name="city"
          placeholder="Miasto"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      <button
        disabled={name.length === 0 || tel.length === 0 || city.length === 0}
      >
        Zapisz
      </button>
    </form>
  );
};
