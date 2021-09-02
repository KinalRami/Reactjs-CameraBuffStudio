import React from 'react';
import Data from './Data';
import Card from './Card';
//import { NavLink } from 'react-router-dom';

const Service = () =>{
    return(<>
        <div >
        <h1 className="tab-center">Our Services</h1>
    </div>
    
        <div className="cardblock">
                       {
                           Data.map((val,ind) =>
                           {
                               return <Card key={ind}  
                               imgsrc={val.imgsrc}
                               title={val.title}
                               />
                           })
                       }
        </div>
        
        
                                
</>
);
};

export default Service;