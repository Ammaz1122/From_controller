import React, { useState } from 'react'
import SingleData from './SingleData'

const InputData = () => {

const [data,setData] = useState("")
const [error,setError] = useState(false)
const [name,setName] = useState([])

    const handleData = ()=>{
       
    
       if(data){
        // setError(false)
        console.log(data)
        setName([...name,
        {data,
            id:Date.now()
        }
        
        ])
       }else{
        setError(true)
       }
    
       setTimeout(() => {
        
        setError(false)

       }, 3000);

       setData("")
    
    }

        const removeData = (id)=>{
            const filterName = name?.filter((item,index)=>{
                    return item.id !== id
            })
            
            setName(filterName)
        }


  return (
    <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-2 m-auto my-3 shadow w-50">
                        <h3 className='text-center py-3'>Test</h3>
                        <label htmlFor="Name">Name</label>

                        <input 
                        value={data}
                        onChange={(e)=> setData(e.target.value)}
                        type="text" placeholder='Enter your Name' className='form-control my-2' />

                     
                     { error && <p className="text-danger fw-bolder m-0">
                            Please Enter your Name
                        </p>}
                        

                        <div className="button-data text-center ">
                        <button onClick={handleData} className="btn btn-outline-warning w-100">
                            Add Data
                        </button>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container">
                    <div className="row">
                    {
                name?.map((item,index)=>{
                    return <SingleData rem = {removeData} {...item} key={index}/>
                })
            }
                    </div>
                </div>
            
    
    </>



  )
}

export default InputData