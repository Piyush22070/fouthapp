"use client"
import { useState } from "react"

let c= 0  
export default function Page(){
    
      
    const [count,setCount] = useState(c)

    const inc = (()=>{
        c= c+1
        setCount(c)
    })
    return <>
        <div>Count : {count}</div>
        <button onClick={inc}>inc</button>
    </>
}