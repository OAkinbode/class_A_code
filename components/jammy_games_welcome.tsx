type JammyProps = {
  name: string;
  recommendation: () => string;
};

// export default function JammyGamesWelcome({ name }: JammyProps) {
//   const temporaryPlayerNames: string[] = [
//     "redfox42",
//     "bluewhale99",
//     "greenlion77",
//     "yellowtiger88",
//   ];
//   return (
//     <div className="">
//       <p>
//         Welcome to Jammy Games! {name}. Your gateway to fun and engaging games.
//       </p>
//       <h2>Temporary Player Names:</h2>
//       <ul>
//         {temporaryPlayerNames.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

const JammyGamesWelcome: React.FC<JammyProps> = ({ name, recommendation }) => {
  return (
    <div className="">
      <p>
        Welcome to Jammy Games! {name}. Your gateway to fun and engaging games.
      </p>
      <p>{recommendation()}</p>
    </div>
  );
};

export default JammyGamesWelcome;
