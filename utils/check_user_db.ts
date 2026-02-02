const usernames = ["Telusman", "waterman", "chicken_runner"];

export function checkUserdb(suggestedName: string) {
  const exists = usernames.some((user) => user === suggestedName);
  return exists;
}
