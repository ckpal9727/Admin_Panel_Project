import React from 'react'
import { useState } from 'react'

const AddProduct = () => {

    const[p_brand,setp_brand]=useState("");
    const[p_image,setp_image]=useState("");
    const[p_model,setp_model]=useState("");
    const[p_os,setp_os]=useState("");
    const[p_cellularTechnology,setp_cellularTechnology]=useState("");
    const[p_memoryStorage,setp_memoryStorage]=useState("");
    const[p_color,setp_color]=useState("");
    const[p_screeSize,setp_screeSize]=useState("");
    const[p_ram,setp_ram]=useState("");
    const[p_battery,setp_battery]=useState("");
    const[p_sim,setp_sim]=useState("");
    const[p_camera,setp_camera]=useState("");
    const[p_quantity,setp_quantity]=useState("");
    const[p_price,setp_price]=useState("");
    const[p_description,setp_description]=useState("");
   
  return (
    <div>
        Product Brand : <input type="text" name="p_brand"/><br/>
        Image : <input type="file" name="p_image"/><br/>
        Model : <input type="text" name="p_model"/><br/>
        Os : <input type="text" name="p_os"/><br/>
        Cellualar technology: <input type="text" name="p_cellularTechnology"/><br/>
       Memory storage : <input type="text" name="p_memoryStorage"/><br/>
       Color : <input type="text" name="p_color"/><br/>
        Screen size: <input type="text" name="p_screeSize"/><br/>
       RAM : <input type="text" name="p_ram"/><br/>
       Battery : <input type="text" name="p_battery"/><br/>
       Sim : <input type="text" name="p_sim"/><br/>
       Camera : <input type="text" name="p_camera"/><br/>
       Quantity : <input type="text" name="p_quantity"/><br/>
       Price : <input type="text" name="p_price"/><br/>
       Description : <input type="text" name="p_description"/><br/>
       <input type="submit" value="Add"/>
    </div>
  )
}

export default AddProduct