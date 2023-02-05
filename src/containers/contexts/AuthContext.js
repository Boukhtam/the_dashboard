import React from "react"

export const Context = React.createContext()

const AuthProvider = ({children, ...props}) => {
  const [state, setState] = React.useState({
    user: null,
    token: null,
    anotherSetOfState: "iii",
  })

 const setUserData = (userData, token) => {
      setState(previousState => ({
        ...previousState,
        user: userData,
        token: token,
      }))
    }

  const value = {
    setUserData,   
    ...state,
  }

  React.useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => { 
  return React.useContext(Context);
}

export default AuthProvider