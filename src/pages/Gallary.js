import React from 'react';
import Photo from './Photo';
import Img from './Img';


const Gallary = () =>{
    return(<>
        <div className="gallary">
                       {
                           Photo.map((val,ind) =>
                           {
                               return <Img key={ind}  
                               imgsrc={val.imgsrc}
                               
                               />
                           })
                       }
        </div>
                                
</>
);
};
export default Gallary;