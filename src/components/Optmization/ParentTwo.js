import React, { useState } from 'react'
import {MemoizedChildTwo} from './ChildTwo'

export const ParentTwo= ()=> {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Vishwas')

   console.log('ParentOne Render')
   return (
     <div>
         <button onClick = {()=> setCount(c => c+1)}>Count - {count}</button>
         <button onClick = {()=> setName('codevolution')}Change name></button>
        <MemoizedChildTwo name={name}/>
     </div>
   )
}

export default ParentTwo


