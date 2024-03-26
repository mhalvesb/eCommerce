import React, {useState, useEffect} from "react";



function Message(type, msg){
    const [isVisible, setVisible] = useState(false);


    useEffect(()=>{
        if(!msg){
            setVisible(false);
            return
        }


        setVisible(true);
    },[msg])

    return(
        <div>
            
        </div>
    )
}