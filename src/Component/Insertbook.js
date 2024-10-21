import React, { Fragment } from 'react';
import './insertbook.css';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {insertbook} from '../Slises/Bookslice';
function Insertbook() {
  const {isloggedin} = useSelector((state)=> state.auther);
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);

  const disputch = useDispatch();

  const handelsubmit = (e) =>{
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    }
    disputch(insertbook(data));
    title.current.value = '';
    price.current.value = '';
    description.current.value = ''

  }
  return (
    <Fragment>
    <div className='form'>
    <h1>Form insert</h1>
    <div className='border border-secondary p-2 '>
        <form  onSubmit={handelsubmit}>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">ID</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={description} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"ref={title} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="number" className="form-control" id="exampleInputPassword1" ref={price}/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
</div>

  <button type="submit" className="btn btn-primary" disabled={!isloggedin}>Submit</button>
</form>
</div>
</div>
    </Fragment>
  )
}

export default Insertbook;
