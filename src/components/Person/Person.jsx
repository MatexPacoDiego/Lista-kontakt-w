import { useState } from "react";
import "./Person.css";

export const Person = ({ name, tel, city }) => {
  const [showMore, setShowMore] = useState(false);

  function MoveText() {
    setShowMore(!showMore);
  }
  return (
    <li className={showMore ? "active" : ""}>
      <h2>{name}</h2>

      <button onClick={MoveText}>{showMore ? "Ukryj" : "Pokaż"}</button>
      {showMore && (
        <>
          <h3>
            Telefon: <a href={tel}>{tel}</a>
          </h3>
          <h3>Miasto: {city}</h3>
        </>
      )}
    </li>
  );
};