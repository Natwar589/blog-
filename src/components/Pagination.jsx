import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

const Pagination = () => {
  const {page,totalPage,handlePageChange} = useContext(Appcontext);
  return (
    <div className='shadow-md shadow-black p-2' >
      <div className='flex justify-evenly'>
        { page>1 &&
          (<button
          className='border-black shadow-md p-2 border-spacing-1 w-14' onClick={()=>handlePageChange(page-1)}>
            Prev
          </button>)
        }
        {
          page < totalPage &&

         ( <button 
          className='border-black shadow-md p-2 border-spacing-1 w-14' 
         onClick={()=>handlePageChange(page+1)}>
            Next
          </button>)
        }
        <p className='mt-2'>
          Page {page} and {totalPage}
        </p>
      </div>
    </div>
  )
}

export default Pagination