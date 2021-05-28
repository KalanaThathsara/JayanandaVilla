import React, { Component } from 'react'
import Title from '../components/Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';


export default class Services extends Component {
    state={
        Services:[
            {
                icon:<FaCocktail/>,
                title:"Free Snacks",
                info:'dfdfdfd fdfdfdfd ddfdfdfd fdfdfdf fdfdfd fdfdfd dfdfd fdfdfd'
            },
            {
                icon:<FaHiking/>,
                title:"Places",
                info:'dfdfdfd fdfdfdfd ddfdfdfd fdfdfdf fdfdfd fdfdfd dfdfd fdfdfd'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Vehicles",
                info:'dfdfdfd fdfdfdfd ddfdfdfd fdfdfdf fdfdfd fdfdfd dfdfd fdfdfd'
            },
            {
                icon:<FaBeer/>,
                title:"Beer",
                info:'dfdfdfd fdfdfdfd ddfdfdfd fdfdfdf fdfdfd fdfdfd dfdfd fdfdfd'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
            
            <div className="services-center">
                {this.state.Services.map((item,index) => {
                    return (
                        <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>


                        </article>
                    );
                })}

                
            </div>
            </section>
        );
    }
}
