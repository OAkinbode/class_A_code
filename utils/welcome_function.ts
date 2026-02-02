export function welcomeMessage(name: string): string {
  return `Welcome to Class A Code, ${name.toUpperCase()}!`;
  // return "Welcome to Class A Code, " + name;
}

export const fareWellMessage = (name: string) =>
  `Goodbye from Class A Code, ${name}!`;

export const calculateAge = (birthYear: number, currentYear: number) =>
  currentYear - birthYear;
