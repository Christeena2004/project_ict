
import React, { useState } from 'react';
import { Link } from "react-router-dom";
function Login(){
    return(
    <div style={{display:'flex',
                 padding:'30px',
                 width:'850px',
                 backgroundImage:'url(https://www.internacionalhi.com/wp-content/uploads/2017/01/texture-green-paper-pattern-scratch-background-photo-hd-wallpaper.jpg)',
                 borderRadius:'50px',
                 marginLeft:'350px'
                 
                 
    }}>
        <div style={{marginTop:'100px',
                    width:'250px',
                    height:'500PX',
                    marginRight:'50px',
                
                    // boxShadow: '0 0 500px rgba(0, 100, 0, 1)'
        }}>
      <img src="https://as1.ftcdn.net/v2/jpg/04/86/87/48/1000_F_486874827_sBBBCF1wNtLDS6HLnwvyYb3TttROjlyb.jpg" alt="" width={"600px"}  height={"430px"} borderRadius={"50px"}/>
      </div>
        <div style={{backgroundColor: 'white',
                alignItems: 'center',
                
                width: '300px',
                padding: '90px',
                height: '430px',
                justifyContent: 'center',
                display: 'flex',
                marginLeft: '200px',
                marginRight: 'auto',
                marginTop: '100px',
                marginBottom:'50px',
                borderRadius:'50px',
               // boxShadow: '0 0 px rgba(255, 255, 255, 255)'
            }}>
                <div style={{
                    padding: '20px',
                    alignItems: 'center'
                    }}>
                    <h1 style={{
                        margin: '10px',
                        color:"green",
                        textAlign: 'center',
                        marginBottom:'30px'
                    }}>
                        LOGIN
                    </h1>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: '20px',
                        marginRight: '20px',
                        boxShadow: '0 0 25px rgba(0, 0, 0, 2)',
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
    
                    
    
                    <button type="submit"style={{
                        width: '100%',
                        color: 'black',
                        padding: '5px',
                        backgroundColor: '#4CAF50',
                        
                        border: 'none',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        alignItems:'center'
                    }}> login
                        </button>
    
                        {/* <Link to='/proceed'>
                <button className="login">LOGIN</button>
              </Link>     */}
    
                    </div>
                </div>
            </div>

     </div> 

        );
    }
    
    export default Login;