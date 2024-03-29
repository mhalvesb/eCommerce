import React, {useState, useEffect} from "react";



import "./message.css";


function Message({type, msg}){
    const [isVisible, setVisible] = useState(false);
    
   

    useEffect(()=>{
        if(!msg){
            setVisible(false);
            return
        } else{
            setVisible(true);
        }


        
    },[msg]);

    const timer = setTimeout(() =>{
        setVisible(false)
    }, 10000)

    return(
        <>
        {isVisible && 
        <div className={type}>
           {msg}
        </div>}
        </>
    )
}


export default Message;