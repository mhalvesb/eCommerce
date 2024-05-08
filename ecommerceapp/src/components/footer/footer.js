import React from "react";
import {Link} from "react-router-dom";
import "./footer.css";



function Footer(){
    return(
        <footer>
            <div className="footernames">
                <div className="f1">
                    <h4>eCommerce</h4>
                    <p>Explore nossa variedade de produtos e desfrute de uma jornada de compras fácil e segura conosco.</p>
                </div>

                <div className="f1">
                    <h4>Social</h4>
                    <Link to="">Facebook</Link>
                    <Link to="">Instagram</Link>
                    <Link to="">Twitter</Link>
                </div>
                
                <div className="f1">
                    <h4>Links uteis</h4>
                    <p>Blusas</p>
                    <p>Calças</p>
                </div>
                

                <div className="f1">
                    <h4>Contato</h4>
                    <p>XXXXX@gmail.com</p>
                    <p>+55 (11)99999-9999</p>
                </div>
            </div>
        </footer>
    )
}


export default Footer;