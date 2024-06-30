"use client";
import React from "react";
import { useRouter } from "next/navigation";
import withAuth from "@/components/withAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
const Dashboard: React.FC = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/signup");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return (
    <div>
      <h1>This is a protected route.</h1>
      <button onClick={handleSignOut}>Sign out </button>
    </div>
  );
};

export default withAuth(Dashboard);
