"use client";

import { GoogleAuthProvider, signInWithPopup, AuthError } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/email_login";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      const authError = error as AuthError;
      console.error("Login Error:", authError.message);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      {/* <LoginForm /> */}
      <button
        className="p-2 rounded-md bg-green-800 text-white shadow-md"
        onClick={handleGoogleLogin}
      >
        Sign in with Google
      </button>
    </main>
  );
}
