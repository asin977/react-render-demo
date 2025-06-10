import React from 'react'

export const ChildOne = ({children}) => {
    console.log('ChildOne Render')
  return (
    <div>
      {children}
    </div>
  )
}

export default ChildOne
