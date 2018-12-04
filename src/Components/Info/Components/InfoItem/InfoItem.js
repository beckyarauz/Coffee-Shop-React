import React from 'react';
import './InfoItem.css';

const InfoItem = (props) => {

    switch(props.type){
        case 'contact': return (
            <div className="InfoItem">
                <div className="Contact" id="Contact">
                    <h2>Wem?</h2>
                    <p>Tel.: {props.prop.tel}</p>
                    <p>Mail: {props.prop.mail}</p>
                    <p>Internet: {props.prop.web}</p>
                    <p>USt-Id: {props.prop.serial}</p> 
                </div>
            </div>
        );
        case 'schedule': return (
            <div className="InfoItem">
                <div className="Schedule" id="Schedule">
                <h2>Wann?</h2>
                    <h3>Montags - Sontags</h3>
                    <p>11:00 - 19:00 Uhr</p>
                </div>
            </div>
            );
        case 'address': return (
            <div className="InfoItem">
                <div className="Address" id="Address">
                <h2>Wo?</h2>
                    <p>Südwestkorso 63,</p>
                    <p>12161, Berlin</p>
                </div>
            </div>
            );
        case 'social': return (
            <div className="InfoItem" id="Social">
                <div className="Social">
                <h2>Social</h2>
                    <a href="https://www.facebook.com/" rel="noopener">
                        <img className="socialIcon" src={props.icons.fb} alt="Facebook Link" />
                    </a>
                    <a href="https://www.instagram.com/" rel="noopener">
                        <img className="socialIcon" src={props.icons.ig} alt="Facebook Link" />
                    </a>
                    <a href="https://www.facebook.com/" rel="noopener">
                        <img className="socialIcon" src={props.icons.tw} alt="Facebook Link" />
                    </a>
                </div>
            </div>
            );
        default: return (<div>None</div>);
    }
    
}

export default InfoItem;