import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {

return(<>
    <section id="header" >
                <div className="text">
                   <h1 className="brand-name"> Camera Buff Studio</h1>
                   
                   <h2>Photography & Cinematography</h2>
                    
                   
                    <div className="btn">
                        <NavLink to="/Service" className="btn-get-started">Get Started</NavLink>
                    </div>
                </div>
                </section>
 </>
    );
}

export default Home ; 