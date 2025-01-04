import React from 'react'

export default function Spinner() {
  return (
    <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:101,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="spinner"></div>
    </div>
  )
}
