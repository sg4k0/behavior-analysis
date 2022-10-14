import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import './Sample.css'

export const SamplePage: React.FunctionComponent = () => {
  const [count, setCount] = useState(0)
  return (
    <Layout>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Layout>
  )
}
