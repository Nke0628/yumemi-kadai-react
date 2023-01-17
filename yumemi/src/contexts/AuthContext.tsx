import React, { createContext, useState } from 'react'

type authContextType = {
  authApiKey: string
  setAuthApiKey: (apiKey: string) => void
}

export const AuthContext = createContext<authContextType>({
  authApiKey: '',
  setAuthApiKey: (authApiKey) => {},
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authApiKey, setAuthApiKey] = useState<string>('')
  return (
    <AuthContext.Provider value={{ authApiKey, setAuthApiKey }}>
      {children}
    </AuthContext.Provider>
  )
}
