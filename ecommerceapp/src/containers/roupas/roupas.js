import React, {useEffect, useState} from "react";

import "./roupa.css";

import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";

function BlusaBranca(props){
    const [useAnimDesc, setUseAnimDesc] = useState(false);
    const [useAnimSpec, setUseAnimSpec] = useState(false);
    const [selectedLi, setLi] = useState(null);

    const storageItem = JSON.parse(localStorage.getItem("cartItem"));
    const initialItem = storageItem ? JSON.parse(localStorage.getItem("cartItem")) : [];
    const [cartItems, setCartItems] = useState(initialItem);





    const addItems = (productName, productImage, productPrice) =>{
        const newItem = {
            name: productName,
            image: productImage,
            price: productPrice,
            qtd: 1,
        }


        setCartItems([...cartItems, newItem]);
    }
    const handleItemClick = (index) =>{
        setLi(index);
    }

        const itemSize = [38, 40, 42, 44, 46, 48];
    

    const handleClickDesc = () =>{
        if(useAnimDesc){
            setUseAnimDesc(false);
        } else{
            setUseAnimDesc(true);
        }
    }
    const handleClickSpec = () =>{
        if(useAnimSpec){
            setUseAnimSpec(false);
        } else{
            setUseAnimSpec(true);
        }
    }


    useEffect(()=>{
        localStorage.setItem("cartItem", JSON.stringify(cartItems));
    }, [addItems]);
    return(
        <div>
            <Header items={cartItems}/>
            <section>
            <div className="roupa">
                <div className="roupaarea">
                    <div className="firstrow">
                        <div className="roupaimg">
                            <img src={props.img} alt="roupa"></img>
                        </div>
                        <div className="roupatext">
                            <div className="price">
                                <h1>{props.name}</h1>
                                <hr></hr>
                                <p>R$ {props.price}</p>
                                <div className="juros">
                                    <p>10x de R$ 20,00 sem juros no cartão de crédito</p>
                                </div>
                            </div>
                            

                            <div className="color"><div className="colortxt"><p className="grey">Cor:</p> <p>Branca</p></div> 
                            <div className="colorradius">
                                <div className="colorarea"></div>
                            </div>
                            </div>
                            <div className="sizes">
                                <p>Tamanho</p>
                                <ul className="ulsize">
                                   {itemSize.map((item, index) =>{
                                    return(
                                        <li key={index} className={index == selectedLi  ? "selected" : ""} onClick={() => handleItemClick(index)}>
                                            {item}
                                        </li>
                                    )
                                   })}
                                </ul>
                            </div>
                            <button className="addCart" onClick={() =>addItems(props.name, props.img, props.price)}>Adicionar ao carrinho</button>
                            <div className="frete">
                                <label>Consultar o frete</label>
                                <br></br>
                                <input type="text" placeholder="Digite seu CEP"></input> 
                                <button>OK</button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="secrow">
                        <div className="desc">
                            <button onClick={handleClickDesc}>Descrição</button>
                            <div className={useAnimDesc ? "descanim" : "desctxt"}>
                                <p>Para uma composição urbana sofisticada e com muito estilo, 
                                    o Blazer feminino slim abotoamento duplo verde |
                                    AK by Riachuelo é a terceira peça perfeita para a sua composição. Sua modelagem em 
                                    alfaiataria traz o toque de sofisticação que você precisa para um look business woman. 
                                    Confeccionada em poliéster e elastano, com ombreiras remetem ao estilo dos anos 80, 
                                    sendo um clássico que não pode faltar no seu guarda-roupa. São diversas opções para 
                                    você combinar com essa peça, aposte!</p> 

                                <h3>Características:</h3>
                                <ul className="uldesc">
                                    <li>Marca: AK by Riachuelo</li>
                                    <li>Composição: Poliester 95%; Elastano 5%</li>
                                    <li>Forro Poliéster 100%</li>
                                    <li>Modelo slim</li>
                                    <li>Aboatoamento duplo</li>
                                    <li>Fechamento duplo com botão</li>
                                    <li>Bolsos decorativos</li>
                                </ul>

                                <p>Medidas da modelo: altura: 1,71m; busto: 83cm; cintura: 89cm; quadril: 60cm. Modelo está vestindo: 38</p>

                                <p>Pensando na mulher mais madura, 
                                    a AK by Riachuelo foi desenvolvida para criar peças que trazem sofisticação, 
                                    modernidade e funcionalidade. 
                                    A marca conta com peças confeccionadas em tecidos naturais com caimento leve e tecidos plano com mais estrutura, 
                                    gerando um mix de produtos que transitam entre o casual e o glamoroso.</p>

                                <p>A cor do produto nas fotos reproduzidas com modelos pode sofrer alteração, em decorrência do uso do flash.</p>
                            </div>

                            <button onClick={handleClickSpec}>Especificações</button>
                            <div className={useAnimSpec ? "descanim" : "desctxt"}>
                                <ul className="specul">
                                    <li><h6 className="specs">Instrução de lavagem:</h6> <h6 className="specinfo">Lavar em temperatura máxima de 30°; 
                                    Não usar alvejante a base de cloro; Proibido usar secadora</h6></li>
                                    <li><h6 className="specs">País de fabricação</h6> <h6 className="specinfo">VN - Vietnã</h6></li>
                                    <li><h6 className="specs">Cor: </h6> <h6 className="specinfo">Branca</h6></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
            </section>

            <Footer/>
        </div>
        
    )
}


export default BlusaBranca;