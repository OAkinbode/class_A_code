"use client";
import { useUserStore } from "@/utils/store";

const TwistingJackPage = () => {
  const username = useUserStore((state) => state.username);
  return (
    <div>
      <h1>Welcome to the Twisting Jack Page!</h1>
      <p>This is a special page for Twisting Jack enthusiasts.</p>
      <p> The game is coming soon....</p>
      {username && <p>Current username: {username}</p>}
    </div>
  );
};
export default TwistingJackPage;
