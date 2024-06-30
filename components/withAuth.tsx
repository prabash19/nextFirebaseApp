"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "../auth";

const withAuth = (WrappedComponent: React.FC) => {
  const ComponentWithAuth: React.FC = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.replace("/signup");
      }
    }, [loading, user, router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
