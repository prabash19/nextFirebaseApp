"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const protectedRoutes = (WrappedComponent: React.FC) => {
  const ComponentWithAuth: React.FC = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        router.replace("/login");
        setLoading(false);
      } else {
        setToken(storedToken);
        setLoading(false);
      }
    }, [router]);
    if (loading) {
      return <div>Loading...</div>;
    }
    if (!token) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default protectedRoutes;
