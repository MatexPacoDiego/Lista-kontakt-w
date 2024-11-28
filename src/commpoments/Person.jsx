import { Tel } from "./Tel";
import { useState } from "react";
import "./Person.css";

export const Person = (props) => {
  const [showMore, setShowMore] = useState(false);

  function MoveText() {
    setShowMore(!showMore);
  }
  return (
    <li className={showMore ? "active" : ""}>
      <h2>{props.name}</h2>

      <button onClick={MoveText}>{showMore ? "Ukryj" : "Pokaż"}</button>
      {showMore && (
        <>
          <h3>
            Telefon: <Tel tel={props.tel} />
          </h3>
          <h3>Miasto: {props.city}</h3>
        </>
      )}
    </li>
  );
};
