import React, { useEffect, useState } from 'react'
import cross from '../../assets/cross-23.png';

const List = () => {
  const [allproduct,setAllProduct]=useState([]);
  const fetchInfo = async()=>{
    await fetch('http://localhost:4000/all').then((res)=>res.json()).then((data)=>{setAllProduct(data)});

  }
  useEffect(()=>{
    fetchInfo();
  },[])
  const removeProduct= async(id)=>{
    await fetch('http://localhost:4000/remove',{
        method :'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({id:id})
  })
 await fetchInfo();}
  return (
    <div className=' flex flex-col items-center w-[100%] h-[740px] p-[10px_50px] 
    m-[30px] rounded-[6px] bg-white'>
      <h1>All Product </h1>
      <div className=' grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-[10px]  w-[100%] p-[20px_0px]  bg-gray-400  font-[600] text-[15px] '>
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div >
        <hr/>
        {allproduct.map((product,index)=>{
              return<> <div key={index} className=' items-center grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] font-[600] p-3 ' >
              <img src={product.image} className='w-35 h-32 object-cover rounded-md' />
              <p className="text-lg">{product.name}</p>
              <p  className="text-green-500">${product.old_price}</p>
              <p  className="text-green-500">${product.new_price}</p>
              <p className="text-gray-700">{product.category}</p>
              <button onClick={() => removeProduct(product.id)} className="text-red-500 text-2xl">
          ✖
        </button>
        
              </div><hr/></>
        })}
      </div>
    </div>
  )
}

export default List