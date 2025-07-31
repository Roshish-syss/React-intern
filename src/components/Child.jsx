import React from 'react'

const Child = (props) => {
    const {data}=props;
  return (
    <div className='w-36 h-36 flex items-center justify-center bg-amber-200'>{data}</div>
  )
}

export default Child