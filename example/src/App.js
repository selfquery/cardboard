import React from 'react'

import Cardboard from 'cardboard'
import 'cardboard/dist/index.css'

const App = () => {
  return (
    <>
      <Cardboard layer={1} debug={1} fluid>
        hello
      </Cardboard>

    </>
  )
}

export default App
