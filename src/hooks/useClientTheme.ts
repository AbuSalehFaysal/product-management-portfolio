import { useState, useEffect } from "react";

// Hook to only access theme on the client to avoid hydration issues
export function useClientTheme() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return { isMounted };
}
