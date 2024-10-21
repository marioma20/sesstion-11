import React from 'react'

function Booklist({data, isloading, isloggedin, disputch, deletedata, handeleviewdata}) {

  const booklist = data.length > 0 ? data.map((item)=>{
    return(
    <>
           <li>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>
                <button style={{color: 'blue', border:'none', cursor:'pointer'}} onClick={()=>disputch(handeleviewdata(item))}>view</button>
                <button style={{color: 'red', border:'none', cursor: 'pointer'}} onClick={()=>disputch(deletedata(item))}>delete</button>
            </div>
        </li>
    </>
    );
  }) : 'No Data Is Found!!!';
  return (
    <div>
    {isloading ? 'Isloading...' :
     <>
      <ul>
      {booklist};
      </ul>
    </>}
 
    </div>
  )
}

export default Booklist;
