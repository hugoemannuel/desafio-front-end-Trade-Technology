import React, { useState, useMemo } from "react";
import LoginContext, { iLoginContext } from './LoginContext';
import { ICountries } from "../../services/countries";


const LoginProvdier: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setContries] = useState<ICountries[]>();
  const [apiKey, setApiKey] = useState<string>()

  const loginContext: iLoginContext = useMemo(() => ({
    countries,
    setContries,
    apiKey,
    setApiKey,
  }), [apiKey, countries])

  return (
    <LoginContext.Provider value={loginContext}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvdier;

