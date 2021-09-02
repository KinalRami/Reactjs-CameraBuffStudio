import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {

return(<>
    <section id="header" >
                <div className="text">
                    <h1>Welcome To About Page!!</h1>
                   <br></br><br></br>
                   <h4 >Name:CameraBuffStudio</h4><br></br><br></br>
                   <h4 >Call Us:+91-8128168045</h4><br></br><br></br>
                   <h4 >Email:info@camerabuffstudio.in</h4><br></br><br></br>
                   <h4>Address:77,pankaj soci.,<br></br>
                       paldi,bhattha,<br></br>
                       Ahmedabad,<br></br>
                       gujarat.india-380007</h4>
                   <div className="btn">
                        <NavLink to="/Contact" className="btn-get-started">Contact Us</NavLink>
                    </div>          
                </div>
                
    </section>
 </>
    );
}

export default About ; 