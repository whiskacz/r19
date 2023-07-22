import React from 'react'

export default function Result( { 
Principle,
Monthly,
Rate,
Years 
} ) {
  const A = {
    P: Principle,
    r: Rate / 100,
    n: 12,
    t: Years,
    PMT: Monthly,
  };

  return (
    <div className='result'>
    <div>Result</div>
        <div>
       {A.P * Math.pow(1 + A.r / A.n, A.n * A.t).toFixed(2)}
      

        </div>
    </div>
  )
}
