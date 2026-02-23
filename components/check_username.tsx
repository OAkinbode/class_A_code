"use client";

import { useState, useEffect } from "react";
import { useUserStore } from "@/utils/store";
import { set } from "date-fns";

type UserDetails = {
  username: string;
  location: string;
};

export default function CheckUsername() {
  const [userdetails, setUserdetails] = useState<UserDetails>({
    username: "",
    location: "",
  });

  const setUsername = useUserStore((state) => state.setUsername);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // const exists = checkUserdb(userdetails.username);
    // exists
    //   ? alert("name already exists, pick another one..")
    //   : alert("congratulations");
    setUsername(userdetails.username); // Update the username in the Zustand store
    // Display the entered username and location
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserdetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="">
      <h2 className="text-xl text-blue-700">Pick a username and a location</h2>
      <form onSubmit={submitForm}>
        <div className="flex flex-col my-2">
          <label>Enter username</label>
          <input
            type="text"
            name="username"
            value={userdetails.username}
            onChange={onChangeText}
            className="border border-gray-800 bg-amber-50 mr-2 mb-2 rounded-md"
          />
          <label>Enter current location</label>
          <input
            type="text"
            name="location"
            value={userdetails.location}
            onChange={onChangeText}
            className="border border-gray-800 bg-amber-50 mr-2 mb-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="border border-gray-700 bg-green-300 rounded-md shadow-2xl p-1 text-green-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
