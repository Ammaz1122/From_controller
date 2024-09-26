import React from 'react'
import { MdDelete } from "react-icons/md";

const SingleData = ({data,rem,id}) => {
  return (
    <>
    
   <div className="col-lg-4">
    <div className="card shadow p-4 my-2">
        <div className="d-flex justify-content-between">
        <h6> {data}  </h6>
        <MdDelete onClick={()=> rem(id)} size={25} cursor="pointer"/>
        </div>
    </div>
   </div>
    </>
  )
}

export default SingleData