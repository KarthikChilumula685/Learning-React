import React from 'react'

function Test(props) {
  return (
    <div>
      <h1 className='mb-4 text-amber-200'>Today's IPL match in between {props.team1} and {props.team2} </h1>
    </div>
  )
}

export default Test
