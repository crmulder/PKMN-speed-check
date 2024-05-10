import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TestComponent2.css';


const TestComponent2 = () => {
  const [poke, setPokes] = useState([]);
  useEffect(() => {
     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPokes(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);


  return(
    <div className='TestComponent2'>{poke ? ( `${poke.name}` ) : ("Loading...")}, Base speed: {poke.stats ? ( `${poke.stats[5].base_stat}` ) : ("Loading...")}</div>
  );
};


TestComponent2.propTypes = {};

TestComponent2.defaultProps = {};

export default TestComponent2;
