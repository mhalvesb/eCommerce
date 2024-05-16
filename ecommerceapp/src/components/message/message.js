import React, {useState, useEffect} from "react";



import "./message.css";


function Message({type, msg, isVisible}){
    const [hasVisible, setVisible] = useState(false);
   
        const timer = setTimeout(() =>{
            setVisible(false);
        }, 5000);


    useEffect(() =>{
        if(msg){
            setVisible(true);
        } else{
            setVisible(false);
        }
    }, [msg])

    return(
        <>
        {hasVisible && 
        <div className={type}>
           {msg}
        </div>}
        </>
    )
}


export default Message;