import React, {useState, useEffect} from "react";
import "./cart.css";

import Blusa from "../../assets/images/blusabranca.avif";


function Cart({show, handleClickCart, items}){
    let cartItems = items;


    useEffect(()=>{
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
        console.log("atualizado");
    })

    

    const [qtdItems, setQtds] = useState([]);

    let totalValue = () => {
        let total = 0;
        if(items){
            items.forEach((item) =>{
                total += parseFloat(item.price) * item.qtd;
            })
        };
        return total;
    }

    totalValue();

    console.log(totalValue());

    
    


        

    
        



    return(
        <div className="cart" style={{display: show ? "flex" : "none"}}>
            <div className="cartarea">
                <h3>Carrinho</h3>
                <ul>

                    {items ? items.map((item, index)=>{
                        const handleDecrease = () =>{
                            if(item.qtd >= 1){
                                const newItems = [...items];
                                if(newItems[index].qtd > 0){
                                    newItems[index].qtd--;
                                    setQtds(newItems);
                                }
                                if(item.qtd <= 0){
                                    items.splice(index, 1);
                                    console.log("ok");
                                }
                            }
                            
                        };
                        const handleIncrease = () =>{
                            const newItems = [...items];
                            newItems[index].qtd++;
                            setQtds(newItems);
                        }


                        return(
                    
                        <li key={index}>
                            <img src={item.image} alt="item"></img>
                            <p className="itemname">{item.name}</p>
                            <p className="itemprice">R$ {parseFloat(item.price) * item.qtd}</p>
                            <div className="itemcount">
                                <button onClick={handleDecrease}>-</button>
                                <p className="itemnumber">{item.qtd}</p>
                                <button onClick={handleIncrease}>+</button>
                            </div>
                        </li>
                        
                        )
                    }): <div>Nada</div>}


                </ul>
                
            </div>
            <div className="total">
                    <p>Total: R$ {totalValue()}</p>
                </div>
            <div className="cartbuttons">
                <button onClick={handleClickCart}>Sair</button>
                <button>Comprar</button>
            </div>
            
        </div>
    )
}


export default Cart;