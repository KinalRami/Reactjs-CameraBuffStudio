import React from 'react';

const Img = (props) => {
    return(<>
        <div className="img">
            <img src={props.imgsrc} alt={props.imgsrc} 
            width="100%" height="100%"></img>
        </div>                   
</>
);
};

export default Img;