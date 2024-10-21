import React from 'react';
import Booklist from './Booklist';
import Bookdetails from './Bookdetails';
import {getbook, deletedata, viewdata} from '../Slises/Bookslice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Bookcontainer() {
  const [select, setselected] = useState([]);
  const {book,isloading} = useSelector((state)=>state.book);
  const {isloggedin} = useSelector((state)=>state.auther);
  const disputch = useDispatch();

  useEffect(()=>{
    disputch(getbook())
  }, [disputch])

  const handeleviewdata = (id) =>{
    const selectbook = book.find((item)=>item.id == id);
    setselected((prev)=>{
      return{...prev, ...select};
    })
  }
  return (
    <div>
      <Booklist  data={book} isloading={isloading} isloggedin={isloggedin} disputch={disputch} deletedata={deletedata} handeleviewdata={handeleviewdata}/>
      <Bookdetails info = {select}/>
    </div>
  )
}

export default Bookcontainer
