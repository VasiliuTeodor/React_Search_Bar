import React from "react";
import { useState, useEffect } from "react";
import "./Search_Characters.css";

export function SearchCharacters() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`https://61e06d0b63f8fc0017618763.mockapi.io/dataset_names`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search..."
        id="search-bar"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <table className="table">
        {characters
          ?.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((character) => {
            return (
              <tbody key={character.id} className="table-body">
                <tr key={character.id} className="table-rows">
                  <td key={character.id}>{character.name}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
