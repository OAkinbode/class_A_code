import React from "react";

export default function JammyGamesWelcome() {
  const temporaryPlayerNames: string[] = [
    "redfox42",
    "bluewhale99",
    "greenlion77",
    "yellowtiger88",
  ];
  return (
    <div>
      <h1>Welcome to Jammy Games!</h1>
      <p>Your gateway to fun and engaging games.</p>
      <h2>Temporary Player Names:</h2>
      <ul>
        {temporaryPlayerNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
