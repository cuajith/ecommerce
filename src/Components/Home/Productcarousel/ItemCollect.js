import React from 'react';
import Productcarousel from './Productcarousel';
import Item from './Item'
import './Productcarousel'
const DataCollect =()=>
{
    return(
        <>
             
             <section >
                 
                <div className="row justify-content-center">
                        {data.productData.map((item,index)=>{
                         return(
                             
                            <Productcarousel img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            key={index}/>
                         )
                     })}
                 </div>
             </section>
             
        </>
    )
}
export default DataCollect;