import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css'
export class Footer extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <section className = "footerNav">
                    <h1 >
                        FOLLOW US ON SOCIAL MEDIA
                    </h1>

                    <div className = "socialButtonsContainer">
                        
                        <SocialIcon className ="socialMediaButton"  url="http://twitter.com" />
                        <SocialIcon className ="socialMediaButton" url ="facebook.com"/>
                        <SocialIcon className ="socialMediaButton" url ="instagram.com"/>
                    </div>
                    <h3>
                        &#169; 2019 Joey Tre' . Built by ChicCode, LLC
                    </h3>

                </section> 
            </React.Fragment>
        );
        }
}


