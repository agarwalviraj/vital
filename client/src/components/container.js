 import React from 'react'
 import {useState} from 'react'
 import 
 
 function Container() {
     const [display,setDisplay] = useState(false);
     return (
         <div>
             <button onClick={()=> setDisplay(!display)}>press</button> 
         </div>
     )
 }
 
 export default Container
 