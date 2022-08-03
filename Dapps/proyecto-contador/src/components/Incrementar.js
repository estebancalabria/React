import * as React from 'react'

const Incrementar = ({ onIncrementar, valor }) => {
  return (
    <button onClick={onIncrementar}>
        Incrementar
        ({valor})
    </button>
  )
}

export default Incrementar
