import React from "react";

// this hooks to handle rehydration of static data when it builds and run on serverless, make sure to revisit the result when it deployed, use this hooks only if the static data is rendered wrongly e.g flickering a Lil bit when it loads completely
const useIsClient = () => {
  const [isClient, setIsClient] = React.useState<Boolean>(false);
  const key = isClient ? "client" : "server";

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return { isClient, key };
};

export default useIsClient;
