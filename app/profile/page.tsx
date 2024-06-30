"use client";
import React from "react";
import { useRouter } from "next/navigation";
import protectedRoutes from "@/hoc/protectedRoutes";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
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
      <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 m-8">
        <div className="flex items-start sm:gap-8">
          <div
            className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
            </div>
          </div>

          <div>
            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              <a href="#" className="hover:underline">
                This is a protected route
              </a>
            </h3>

            <p className="mt-1 text-sm text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              nulla amet voluptatum sit rerum, atque, quo culpa ut
              necessitatibus eius suscipit eum accusamus, aperiam voluptas
              exercitationem facere aliquid fuga. Sint.
            </p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <button
                  className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2  "
                  onClick={handleSignOut}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default protectedRoutes(Dashboard);
