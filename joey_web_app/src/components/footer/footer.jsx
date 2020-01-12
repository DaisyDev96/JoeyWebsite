import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css'
import socialIcon from 'react-social-icons/dist/social-icon';
export class Footer extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <section className = "footerNav">
                    <h1 >
                        FOLLOW ME ON SOCIAL MEDIA
                    </h1>

                    <div className = "socialButtonsContainer">
                        
                        <SocialIcon className ="socialMediaButton"  url="https://twitter.com/Joey_Tr3" />
                        <SocialIcon className ="socialMediaButton" url ="https://www.facebook.com/thomas.tracy.73"/>
                        <SocialIcon className ="socialMediaButton" url ="http://instagram.com"/>
                        <SocialIcon className ="socialMediaButton" url ="https://www.youtube.com/user/Music94Maker/videos"/>
                        <SocialIcon className ="socialMediaButton" url ="http://soundcloud.com"/>
                        <SocialIcon className ="socialMediaButton" url ="https://open.spotify.com/artist/1ZwvbWG7MCpi4lb3TRDzET?si=NwUGHNqbT92Lat82sRbCzw"/>                    
                    </div>
                    <h3 >
                        &#169; 2019 Joey Tre' . Built by ChicCode, LLC
                    </h3>

                </section> 
            </React.Fragment>
        );
        }
}


