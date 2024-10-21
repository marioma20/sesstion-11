import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { withdraw, deposite } from './Store/Actions';
import { withdraw_n, deposite_n } from './Slices/Bank_slice';
import Products from './Components/Products';
import Insertbook from './Component/Insertbook';
import Bookcontainer from './Component/Bookcontainer';
function App() {
  // const state = useSelector(state => state.bank);
  // const Dispatch = useDispatch()
  // console.log(state);
  ///////////////////////////////////
  return (
    <div className="App">
     {/* <h1>Bank Acount: {state}</h1> */}
     {/* <button onClick={()=>{ */}
      {/* Dispatch(withdraw_n(100)); */}
     {/* }}>withdraw</button> */}
    {/* <button onClick={()=>{ */}
      {/* Dispatch(deposite_n(100)); */}
    {/* }}>deposite</button> */}

    {/* <Products/>   */}


    {/* ////////////////////////// */}
     <Insertbook/>
     <hr/>
     <Bookcontainer/>

    </div>
  );
}

export default App;
