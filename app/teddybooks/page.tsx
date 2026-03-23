"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const TeddybearBooks = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [book, setBook] = useState<any>({});

  useEffect(() => {
    if (Object.keys(book).length === 0) {
      // eslint-disable-next-line react-hooks/immutability
      fetchBook();
    } else {
      console.log("Book data updated: ", book);
    }
  }, [book]);

  async function fetchBook() {
    const response = await fetch(
      "https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json",
    );
    const data = await response.json();
    setBook(data);
  }

  return (
    <div>
      <h1>Welcome to the Teddy Bear Books Page!</h1>
      <div className="flex flex-row gap-2 p-2">
        <Image
          src={book["ISBN:0201558025"]?.thumbnail_url || "/next.svg"}
          alt="Teddy Bear"
          width={100}
          height={100}
        />
        <p>Book Key: {book["LCCN:93005405"]?.bib_key}</p>
      </div>
    </div>
  );
};
export default TeddybearBooks;
