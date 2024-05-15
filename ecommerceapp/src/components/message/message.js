import React, {useState, useEffect} from "react";



import "./message.css";


function Message({type, msg, isVisible}){
    const [hasVisible, setVisible] = useState(true);
   

    useEffect(() =>{
        console.log("set");
    }, [isVisible]);

    const timer = setTimeout(() =>{
        setVisible(true);
    }, 10000);

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