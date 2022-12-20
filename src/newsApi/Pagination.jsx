import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
    const {getNext, getPrev, page, nbPages}=useGlobalContext();
  
  return (
    <>
      <div className="pagination_btn">
        <button className='prev btn' onClick={getPrev}> PREV </button>
        {page} To {nbPages}
        <button className='next btn' onClick={getNext}> NEXT </button>
      </div>
    </>
  )
}

export default Pagination;
