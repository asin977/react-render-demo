import React from 'react'


export const ChildFour = ({name}) => {
  console.log('ChildFour Render')
  return <div> Hello {name} It is currently {Date.getHours()}:{date.getMinutes()}:{""}
  {date.getSeconds()}
  </div>
}

export const MemoizedChildFour= React.memo(ChildFour)
