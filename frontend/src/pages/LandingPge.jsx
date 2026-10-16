import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
export default function LandingPge() {
  return (
//     <div className='landingPageContainer'>
//         <nav>
//             <div className='navHeader'>
//                 <h2>Apna Video Call</h2>
//             </div>
//             <div className='navList'>
//                 <p>join as guest</p>
//                 <p>Register</p>
//                 <p>Login</p>
//             </div>
//         </nav>
//         <div className='landingPageMobileImage'>
//             <div className='MobileImageLeft'> 
//                 <h1><span style={{color:"#ff9839"}}>Connects</span> With Your Loved Ones</h1>
//                 <p>cover a distance by Apna Video Call</p>
//                 <div style={{height:"50px" , width:"100px" , textAlign:"center",backgroundColor:"#ff9839",display:"flex" , justifyContent:"center",alignItems:"center"}}>
//                    <Link style={{textDecoration:"none",}}to={"auth"}>Get Started</Link>
//                 </div>
//             </div>
//             <div  className='MobileImageLeft'>
//                 <img src='../public/mobile.png' />
//             </div>

//         </div>
//     </div>

    <div className='landingPageContainer'>
            <div className="navbarContainer">
            <div className='navbarLeft'>
                <h1>Apna Video Call</h1>
            </div>
            <div className='navbarRight'>
                <p>Join as Guest</p>
                <p>Register</p>
                <button>Login</button>
            </div>
            </div>

            <div className='mainLandingComponent'>
            <div className='leftLandingMainComponent'>
            <div className='leftLanding'>
                <h1><span style={{color:"orange"}}>Connect</span> with your loved ones</h1>
                <p>cover a distance by Apna Video Call</p>
                
            </div>
            <div className="leftLandingButton" role='button'> <Link to="/auth"> Get Started</Link></div>
            </div>
            <div className='rightLanding'>
                <img src='../public/mobile.png'/>
            </div>
            </div>
    </div>
)
}
