import { useState } from 'react'
import { AppHeader } from './cmps/app-header'
import { Routes, Route, Router } from 'react-router'
import routes from './routes'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="app">
      <AppHeader />
      <main className='app-main-container'>
          <Routes>
            {routes.map(route => <Route key={route.path} element={route.component} path={route.path} />)}
          </Routes>
      </main>
    </div>
  )
}

export default App
