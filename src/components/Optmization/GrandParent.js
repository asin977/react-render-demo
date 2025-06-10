import React,{useState} from 'react'

export const GrandParent = () => {

    const [newCount,setNewCount] = useState(0)
  return (
    <div>
      <button onClick = {()=> setNewCount((nc)=> nc + 1)}>
        GrandParent Count - {newCount} 
      </button>
    </div>
  )
}

export default GrandParent
