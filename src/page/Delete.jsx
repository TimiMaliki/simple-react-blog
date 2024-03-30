import React from 'react'

const Delete = ({handleDelete}) => {
  return (
    <div>
          <button className='w-44 h-12 bg-black text-white rounded-lg' onClick={handleDelete}>Not Interested</button>
    </div>
  )
}

export default Delete