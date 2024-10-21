import React from 'react'

function Bookdetails({info}) {
  return (
    <div style={{width:'50px'}}>
      <div>
      {info ?
       <>
         <p>{info.title}</p>
         <p>{info.description}</p>
      </> : 'Waiting'};
      </div>
    </div>
  )
}

export default Bookdetails;
