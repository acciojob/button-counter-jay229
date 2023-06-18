import React from 'react'
import { useState } from 'react';

function Button() {
    const [count, setCount] = useState(0);

  return (
    <div>
    <p>Button clicked {count} times</p>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Button