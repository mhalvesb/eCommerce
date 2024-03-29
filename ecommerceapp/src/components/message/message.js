import React, {useState, useEffect} from "react";

import "./message.css";


function Message({type, msg}){
    const [isVisible, setVisible] = useState(false);


    useEffect(()=>{
        if(!msg){
            setVisible(false);
            return
        }


        setVisible(true);
    },[msg])

    return(
        <div className={type}>
           {msg}
        </div>
    )
}


export default Message;