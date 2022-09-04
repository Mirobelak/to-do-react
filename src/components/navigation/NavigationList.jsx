import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationList = () => {
  return (
    <div >
        <div style={{textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "2rem"}}>
            <NavLink style={{textDecoration: "none", color: "black",cursor: "pointer"}} to="/content" >
               Content
            </NavLink>
            <NavLink style={{textDecoration: "none", color: "black", cursor: "pointer"}} to="/about" >
               About
            </NavLink>
            
        </div>
    </div>
  )
}

export default NavigationList