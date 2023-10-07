import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const CardDetails = () => {
    const[getdata,SetGetdata]=useState()
    const {id}=useParams();
    const datas =useLoaderData();

    useEffect(()=>{
        const fetchedData=datas.map(data=>data.id===id)
        SetGetdata(fetchedData);
        console.log(fetchedData)

    },[id,datas])
   
    return (
        <div>

            <Card data={getdata}></Card>
            
        </div>
    );
};

export default CardDetails;