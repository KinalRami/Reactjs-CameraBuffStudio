import React from 'react';

const Card = (props) => {
    return(<>
         <div className="card">
            <img src={props.imgsrc} alt={props.imgsrc} 
            display="block" width="100%" height="85%"></img>
            <h1>{props.title}</h1>
         </div>                   
</>
);
};

export default Card;