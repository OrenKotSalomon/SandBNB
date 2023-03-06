import { useState } from 'react'
import { AppHeader } from './cmps/app-header'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <AppHeader />
    </div>
  )
}

export default App
