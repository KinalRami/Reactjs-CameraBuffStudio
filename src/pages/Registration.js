import React, { Component } from 'react';
import axios from 'axios';
export default class Registration extends Component{

    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeCPassword = this.onChangeCPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            Name:'',
            Email:'',
            Password:'',
            CPassword:''
        }
}
onChangeName(e){
    this.setState({
        Name:e.target.value
    });
}
onChangeEmail(e){
    this.setState({
        Email:e.target.value
    });
}
onChangePassword(e){
    this.setState({
        Password:e.target.value
    });
}
onChangeCPassword(e){
    this.setState({
        CPassword:e.target.value
    });
}
onSubmit(e){
    e.prevetDefault();
    const obj = {
        Name:this.state.Name,
        Email:this.state.Email,
        Password:this.state.Password,
        CPassword:this.state.CPassword
    };
    
    axios.Post('http://localhost/reactapi/registration.php',obj)
    .then(res => console.log(res.data));
    //console.log(obj)
    this.setState({
        Name:'',
        Email:'',
        Password:'',
        CPassword:''
    })
}
render(){
    return(
        <>
        <div className="form">
        <div className="formstyle">
            <div className="contact-us">
            <h1 className="title-us">Add User</h1>
    
                <form onSubmit={this.onSubmit}>
                    <div className="inputfield">
                    <div className="item">
                        <label className="label" >NAME:</label>
                        <input type="text" className="text"  value={this.state.Name} onChange={this.onChangeName} 
                        name="Name" placeholder="enter your name here" required></input>
                    </div>
                    <div className="item">
                        <label className="label">EMAIL</label>
                        <input type="email"   className="text" value={this.state.Email} onChange={this.onChangeEmail}   
                        name="Email" placeholder="enter your email here" required></input>
                    </div>
                    <div className="item">
                        <label className="label">Password</label>
                        <input type="password"   className="text"   value={this.state.Password} onChange={this.onChangePassword} 
                          name="Password" placeholder="enter your password here" required></input>
                    </div>
                    <div className="item">
                        <label className="label">confiorm Password</label>
                        <input type="password"   className="text"   value={this.state.CPassword} onChange={this.onChangeCPassword} 
                          name="CPassword" placeholder="enter your password here" required></input>
                    </div>
                    </div> 
                        <button  name="submit"  className="btn">SUBMIT</button>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

}

    
//export default Registration;