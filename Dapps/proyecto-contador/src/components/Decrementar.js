import * as React from 'react';
import PropTypes from "prop-types";

const Decrementar = (props) => {
  return (
    <button onClick={props.onDecrementar}>
        Decrementar
        ({props.valor})
    </button>
  )
}

Decrementar.propTypes = {
    valor : PropTypes.number.isRequired,
    onDecrementar : PropTypes.func.isRequired
}

export default Decrementar
