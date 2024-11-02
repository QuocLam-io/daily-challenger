import React, { useState, useEffect } from "react";

interface LoaderWrapperProps {
  loadFn: () => Promise<boolean>;
  fallback: React.ReactNode; 
  children: React.ReactNode;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ loadFn, fallback, children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadFn().then((result) => {
      setIsLoaded(result);
      setLoading(false);
    });
  }, [loadFn]);

  if (loading) {
    return <>{fallback}</>;
  }

  return <>{isLoaded ? children : null}</>;
};

export default LoaderWrapper;