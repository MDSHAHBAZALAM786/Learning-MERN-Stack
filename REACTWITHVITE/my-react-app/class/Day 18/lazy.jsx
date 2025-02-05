import React from 'react'
import { Suspense } from 'react'
const About= React.lazy(() => import('./components/About'))

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>Please Wait....</div>}>
        <About/>
      </Suspense>
    </div>
  )
}
