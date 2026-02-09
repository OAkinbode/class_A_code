export type Game = {
  title: string;
  genre: string;
  releaseYear: number;
  // addToCart?: (cartFunction: () => void) => void;
};

export function welcomeMessage(name: string): string {
  return `Welcome to Class A Code, ${name.toUpperCase()}!`;
  // return "Welcome to Class A Code, " + name;
}

export const fareWellMessage = (name: string) =>
  `Goodbye from Class A Code, ${name}!`;

export const calculateAge = (birthYear: number, currentYear: number) =>
  currentYear - birthYear;

export const listOfNames: string[] = ["Alice", "Bob", "Charlie", "Diana"];

export const listOfGames: Game[] = [
  {
    title: "The Legend of Zelda",
    genre: "Action-Adventure",
    releaseYear: 1986,
  },
  { title: "Super Mario Bros.", genre: "Platformer", releaseYear: 1985 },
  { title: "Minecraft", genre: "Sandbox", releaseYear: 2011 },
  { title: "Fortnite", genre: "Battle Royale", releaseYear: 2017 },
  { title: "Among Us", genre: "Party", releaseYear: 2018 },
];
