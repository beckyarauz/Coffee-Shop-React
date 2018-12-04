import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render(){
        return (
            <div className="About" id="About">
                 <div className="About-pic1"></div>
                 <div className="About-text-container">                 
                    <div className="About-text">
                        <h1>WAS?</h1>
                        <ul>
                        <li>Fair gehandelter Kaffee der Spitzenklasse. Espresso, Cappuccino, Americano, Caffè Latte...</li>
                        <li>Feine Kost aus Italien, Kreta und Österreich</li>
                        <li>Kleine süße oder herzhafte Leckereien</li>
                        <li>Originelles Ambiente und Mobiliar Wunderschöne,
                        sonnige Außenplätze Die perfekte Location für Ihre private Feier
                        </li>
                        </ul>
                    </div>
                    <div className="About-text">
                        <h1>WIE?</h1>
                        <p>Alle Kaffeegetränke werden auf einer zweigruppigen Handhebelmaschine
                        zubereitet, einer Bosco Sorrento, die in einer kleinen neapolitanischen
                        Manufaktur von Attilio Bosco in Handarbeit angefertigt wurde.</p>

                        <p>Wir verwenden Bio-Milch, auf Wunsch auch gerne lactosefreie oder
                        Soja-Milch.</p>
                        
                        <p>Unser Maschinen-Lieferant: die espressonisten </p>
                    </div>
                    </div>
                    <div className="About-pic2"></div>
            </div>
        );
    }
}

export default About;