import React from 'react';
import Typed from 'react-typed';

const Typewriter = () => {

   
  return (
    <div className='animated-typing'>
        <Typed
        strings={['Developer', 'UI/UX', "Trainer"]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
        />

    </div>
  )
}

export default Typewriter