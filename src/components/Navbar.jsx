import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


export default function Navbar()  {
    const [user] = useAuthState(auth);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (

      <>
      <div className="fixed-top border" >
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            BlogApp
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AddArticle"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Create
              </NavLink>
            </li>

           {user? ( 
            <>
            <li className="nav-item">
              <NavLink
                exact
                
                
                className="nav-links"
                onClick={handleClick}
              >
                {user?.displayName}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={()=>{signOut(auth)}}
              >
                Logout
              </NavLink>
            </li>

            </>
           ) : (

            <li className="nav-item">
              <NavLink
                exact
                to="/signin"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
           )}

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      </div>
    </>
     
     
     
     
     
    //  <div className="fixed-top border" style={{ backgroundColor: "whitesmoke" }}>
    //     <nav className="navbar">
    //       <div>
    //         <img
    //           src="logo192.png"
    //           width={30}
    //           height={30}
    //           alt="logo"
    //           className="ms-5"
    //         />
    //       </div>
    //       <Link className="nav-link" to="/">
    //         Home{" "}
    //       </Link>
    //       <Link className="nav-link" to="/AddArticle">
    //         Create{" "}
    //       </Link>
    //       {/* <div>
    //         {user && (
    //           <>
    //             <span className="pe-4">
    //               Signed is as {user.displayName || user.email}
    //             </span>
    //             <button className="btn btn-primary btn-sm me-3"
    //             onClick={()=>{signOut(auth)}}
    //             >Logout</button>
    //           </>
    //         )}
    //       </div> */}
    //        {/* <div className="row g-3"> */}
    //               <div className="navbar-nav me-auto mb-2 mb-lg-0">
    //                 {user ? (
    //                   <>
    //                     <div className="profile-logo">
    //                       <img
    //                         src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
    //                         alt="logo"
    //                         style={{
    //                           width: "30px",
    //                           height: "30px",
    //                           borderRadius: "50%",
    //                           marginTop: "12px",
    //                         }}
    //                       />
    //                     </div>
    //                     <p style={{ marginTop: "12px", marginLeft: "5px" }}>
    //                       {user?.displayName}
    //                     </p>
    //                     <button className="btn btn-primary btn-sm me-3"
    //             onClick={()=>{signOut(auth)}}
    //             >Logout</button>
    //                   </>
    //                 ) : (
    //                   // <Link to="/signin" style={{ textDecoration: "none" }}>
    //                   //   <li
    //                   //     className={`nav-item nav-link ${
    //                   //       active === "login" ? "active" : ""
    //                   //     }`}
    //                   //     onClick={() => setActive("login")}
    //                   //   >
    //                   //     Login
    //                   //   </li>
    //                   // </Link>
    //                   <Link to="/signin">Login to create article</Link>
    //                 )}
    //               </div>
    //             {/* </div> */}
    //     </nav>
    //   </div>
    );
  
}
