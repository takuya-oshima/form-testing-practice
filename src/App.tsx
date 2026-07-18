import { SignupForm } from './SignupForm'

function App() {
  return <SignupForm onSubmit={(email) => alert(`送信: ${email}`)} />
}

export default App
