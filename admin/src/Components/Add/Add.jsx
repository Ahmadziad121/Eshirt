import React, { useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa"
import upload_area from "../../assets/upload.webp"

const Add = () => {
    const [image,setImage]= useState(false);
    const [productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"Women",
        new_price:"",
        old_price:"",
    })
    const imageHandler=(e)=>{
            setImage(e.target.files[0])
    }
    const changeHandler =(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_product = async()=>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;

        let formData=new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,

        }
        ).then((resp)=>resp.json()).then((data)=>{responseData=data})

        if(responseData.success){
            product.image=responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert('product Added'):alert('Failed')
        })
        }
    }

  return (
    <div className='pt-[10px] box-border w-[100%] max-w-[800px] pr-[50px] mt-[20px] mr-[30px] rounded-[6px]  bg-white '>
        <div className='pt-[10px]' >
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px]  outline-none bg-gray-100'/>
        </div>
        <div className='pt-[10px] '>
            <div>
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px]  outline-none bg-gray-100'/>
            </div>
            <div className='pt-[10px] '>
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px]  outline-none bg-gray-100'/>
            </div>
        </div>
        <div className='pt-[10px]'>
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name='category' className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px]  outline-none bg-gray-100'>
                <option value='Women'>Women</option>
                <option value='Men'>Men</option>
                <option value='Kids'>Kids</option>
                <option value='Classic'>Classic</option>
            </select>
        </div>
        <div className='pt-[10px]'>
            <label htmlFor='file-input'>
            <img className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px]  outline-none bg-gray-100' src={image?URL.createObjectURL(image):upload_area} />
            </label>
            <input onChange={imageHandler} type='file' name='image' id='file-input' hidden className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px]  outline-none bg-gray-100'/>
        </div>
        <button onClick={()=>{Add_product()}} className='box-border w-[100%] h-[50px] rounded-[4px] pl-[15px]  outline-none bg-gray-100'>ADD</button>
    </div>
  )
}

export default Add