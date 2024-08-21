import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Signup(){
    return(<div style={{display:'flex',
                        justifyContent:'flex-start',
                    borderRadius:'0px',
                    height: '540px',
                    width:'1007px',  
                    marginBottom:'80px',
                    marginTop:'70px',
                    marginLeft: '300px',
                    marginRight: '300px',
                    boxShadow: '0 0 30px rgba(0, 100, 0, 1)',
                    padding: '5px',
                    alignItems:'center',
                    backgroundImage:'url(https://www.internacionalhi.com/wp-content/uploads/2017/01/texture-green-paper-pattern-scratch-background-photo-hd-wallpaper.jpg)',
                    borderRadius:'50px'
                    }}>

    
    
         <div style={{
            
            alignItems: 'center',
            borderRadius:'50px',
            width: '400px',
            padding: '90px',
            height: '50vh',
            justifyContent: 'c',
            display: 'flex',
            marginLeft: '1px',
            marginRight: '1px',
            marginTop: '5px',
            marginBottom:'5px',
            border:'20px'
            }}>
            <div style={{
                padding: 'px',
                marginLeft:'1px',
                marginRight:'1px'
                }}>
                    <div style={{display:'flex',justifyContent:'left'}}>
                <h1 style={{
                    marginRight: '2px',
                    color:"WHIte",
                    marginLeft:'1px',
                    marginRight:'50px',
                    marginBottom:'10px',
                    fontFamily:'cursive',
                    fontStyle:'i',
                    fontWeight:'normal',
                    width:'500px'
                }}>
                    Welcome To GreenBasket 
                {/* </h2> */}

                {/* <h2 style={{
                    color:"WHIte",
                
                    marginBottom:'3px',
                    fontFamily:'cursive',
                    fontWeight:'bolder',
                    marginLeft:'1px',
                }}> */}
                  
                </h1>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    marginLeft: '20px',
                    marginRight: '500px',
                    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    padding: '20px',
                    alignItems:'center'
                    }}>
                
                
                

                

                {/* <div style={{
                     
                     direction:'flex',
                     color:'white',
                     fontFamily:'inherit',
                     fontStyle:'italic'
                     }}> */}
                        <h2 style={{display:'flex',
                     color:'white',
                     fontFamily:'Myriad Pro Regular',
                     fontStyle:'italic',
                     marginRight:'1px',
                     marginLeft:'2px',
                     marginBottom:'2PX',
                     width:'400px'}}></h2>
                   <h2 style={{display:'flex',
                     color:'white',
                     fontFamily:'Myriad Pro Regular',
                     fontStyle:'italic',
                     marginRight:'1px',
                     marginLeft:'2px',
                     width:'400px'}}>Get Freshness Delivered,  </h2>
                     <h2 style={{color:'white',
                     fontFamily:'Myriad Pro Regular',
                     fontStyle:'italic',
                     marginRight:'1px',
                     marginLeft:'2px',
                     width:'400px',
                     marginTop:'1px'
                     }}>To Your Doorstep</h2>
                {/* </div> */}
                <img src="https://media1.giphy.com/media/KlKhrRmGuDURcJnEvp/200w.gif?cid=6c09b9529wwnj7qzap4f3qo7cd3mblyw7fqsk7ur3ug1tswf&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
                      

            </div>
            </div>
            </div>
    
    
        {/* <div style={{boxShadow: '0 0 20px rgba(0, 100, 0, 1)',borderRadius:'50px'}}> */}
        
            <div style={{backgroundColor: 'whitesmoke',
                alignItems: 'center',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)',
                width: '280px',
                padding: '90px',
                height: '273px',
                justifyContent: 'center',
                display: 'flex',
                marginLeft: '110px',
                marginRight: '',
                marginTop: '0px',
                marginBottom:'10px',
                borderRadius:'10px'
                }}>
                <div style={{
                    padding: '20px',
                    alignItems: 'flex-end'
                    }}>
                    <h1 style={{
                        marginRight: '5px',
                        color:"palegreen",
                        textAlign: 'center',
                        marginBottom:'30px'
                    }}>
                        SIGNUP
                    </h1>
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: '20px',
                        marginRight: '20px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
                        padding: '20px',
                        alignItems:'center'
                        }}>
                    <div style={{ 
                        marginBottom: '20px' ,
                        direction:'flex',
                        alignItems:'center'
                        }}>
                        <label htmlFor="username" style={{ color: 'black' }}>Username</label>
                        <input type="text" placeholder="enter the username"  size={30} style={{ marginLeft: '5px', padding: '5px',justifyContent:'center'  }} />
                    </div>
    
                    <div style={{
                         marginBottom: '20px',
                         direction:'flex' 
                         }}>
                        <label htmlFor="email" style={{ color: 'black' }}>Email</label>
                        <input type="email" placeholder="enter the email.id"  className="form-control rounded-0" size={30} required style={{ marginLeft: '5px',alignItems:'center' ,padding: '5px',justifyContent:'center' ,direction:'flex' }} />
                    </div>
    
                    <div style={{
                         marginBottom: '20px',
                         direction:'flex',
                         AlignItems:'center'
                          }}>
                        <label htmlFor="password" style={{ color: 'black' }}>Password </label>
                        <input type="password"  placeholder="enter the password" className="form-control rounded-0 " size={30} required style={{ marginLeft: '5px', padding: '5px',alignItems:'center',justifyContent:'center'  }} />
                    </div>
    
                    <div style={{
                         marginBottom: '20px' ,
                         direction:'flex'
                         }}>
                        <label htmlFor="reenter" style={{ color: 'black' }}>Re-enter Password</label>
                        <input type="password"  placeholder="reenter the password"size={30}  required style={{ marginLeft: '5px', padding: '5px',justifyContent:'center' }} />
                    </div>
    
                    <button type="submit"style={{
                        width: '100%',
                        color: 'black',
                        padding: '5px',
                        backgroundColor: 'GREEN',
                        color:'white',
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        alignItems:'center'
                    }}> signup
                        </button>
    
                        {/* <button> login
                        </button>   */}
                        <Link to='/signup'>
                <button  type="submit"style={{
                        alignItems:'center',
                        width: '100%',
                        color: 'black',
                        padding: '5px',
                        backgroundColor: ' rgb(212, 217, 220)',
                        marginTop:'10px',
                        border: 'gray',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        boxShadow: '0 0 200px rgba(0, 0, 0, 0.1)'
                        
                    }}>LOGIN</button>
              </Link>
    
                    </div>
                </div>
            </div>
            
            
          </div> 
        // </div>
        );
    }
    
    export default Signup;