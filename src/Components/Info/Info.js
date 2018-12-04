import React, { Component } from 'react';
import './Info.css';
import InfoItem from './Components/InfoItem/InfoItem';

import imgFB from './images/icon-fb.png'
import imgIG from './images/icon-ig.png'
import imgTW from './images/icon-twitter.png'

class Info extends Component {
    state = {
        info: [
            {type: 'address'},
            {type: 'schedule'},
            {
                type: 'contact', 
                tel:'030- 48822648', 
                mail: 'post@wild-caffe.de',
                web: 'wild-caffe.de',
                serial: 'DE261502042',
            },
            {type: 'social', 
             icons:{
                    fb: imgFB,
                    tw: imgTW,
                    ig: imgIG,
                }
            }
        ]
    }
    render(){
        let items = null;

        if (this.state.info) {
            items = (
              <div className="InfoItems">
              {this.state.info.map((itm,index) => {
                return (
                  <InfoItem 
                    type={itm.type}
                    key={index}
                    icons={itm.icons}
                    prop={itm}
                     />
                )
              })}
            </div>
            )
          }

        return (
            <div className="Info" >

                 {items}

            </div>
        );
    }
}

export default Info;