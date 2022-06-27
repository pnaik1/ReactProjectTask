import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect ,useState} from 'react';
import { CartState } from "../context/Context";
import Button from '@mui/material/Button';
import "./Dropdown.css";
function CartItem() {

    const [total,setTotal]=useState();

    console.log(total);
    return (  
        <>
        <ul
          className= "services-submenu " style={{marginLeft:"-400px"}}
        >
        
                <div className="friendgrp frnds" >
                  <div className="frnd2">
                  <h5>
                    Cart
                  </h5>
                    <span style={{ padding: 10 }}>Cart is Empty!</span>
                  </div>
                
              </div>   
        </ul>
      </>
    );
}

export default CartItem;