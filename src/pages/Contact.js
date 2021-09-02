import React, { useState } from 'react';

const Contact = () =>
{
    const [data,setData] = useState({
        name:'',
        email:'',
        msg:'',
    });

    const InputEvent = (event) =>
    {
        const {name,value} = event.target;

        setData((preval)=>{
            return {
                ...preval,
                [name]:value,
            }
        })
    }
    
    const formsubmit = (e) =>{
        e.preventDefault();
        alert(`Hey!! ${data.name} Thank you for contact Us.
        Your email is ${data.email}.
        Your Message is ${data.msg}.`);
    };

    return(<>
    <div className="form">
    <div className="formstyle">
        <div className="contact-us">
        <h1 className="title-us">GET IN TOUCH</h1>

            <form onSubmit={formsubmit}>
                <div className="inputfield">
                <div className="item">
                    <label className="label" >NAME:</label>
                    <input type="text" className="text"  value={data.name} onChange={InputEvent} 
                    name="name" placeholder="enter your name here" required></input>
                </div>
                <div className="item">
                    <label className="label">EMAIL</label>
                    <input type="email"   className="text"  value={data.email } onChange={InputEvent}  
                    name="email" placeholder="enter your email here" required></input>
                </div>
                <div className="item">
                    <label className="label">MESSAGE</label>
                    <textarea rows="4"  className="textarea"  value={data.msg} onChange={InputEvent} 
                    cols="5"  name="msg" placeholder="enter your message here" required></textarea>
                </div>
                </div>
                
                    <button  name="submit"  className="btn">SUBMIT</button>
                </form>
            </div>
        </div>
        </div>
    </>
);
};

export default Contact;