import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider' // Capitalized correctly

function App() {
  return (
    <UserContextProvider>
      <h1>hello</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
