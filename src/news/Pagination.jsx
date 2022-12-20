import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
  const {page, nbPages, getPrev, getNext}=useGlobalContext();

  return (
    <>
      <div className="pagination_btn">
        <button className='prev btn' onClick={getPrev}> PREV </button>
        {page + 1} to {nbPages}
        <button className='next btn' onClick={getNext}> NEXT </button>
      </div>
    </>
  )
}

export default Pagination;