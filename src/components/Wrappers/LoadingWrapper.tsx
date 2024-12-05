import React, { useState, useEffect } from "react";

interface LoaderWrapperProps {
  loadFn: () => Promise<boolean>;
  fallback: React.ReactNode;
  children: React.ReactNode;
}
/* -------------------------------------------------------------------------- */

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({
  loadFn,
  fallback,
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("LoaderWrapper useEffect");
    loadFn().then(() => {
      setIsLoaded(true);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <>{fallback}</>;
  }

  return (
    <>
      {isLoaded ? (
        children
      ) : (
        <h1>
          Blub
          {/* FUTURE 404 page */}
        </h1>
      )}
    </>
  );
};

export default LoaderWrapper;
