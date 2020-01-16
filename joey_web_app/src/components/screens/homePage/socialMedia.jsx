import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default class SocialMedia extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <div style= {styles.socialButtonsContainer}>     
                        <SocialIcon target="_blank" style = {styles.socialMediaButton} url="https://twitter.com/Joey_Tr3" />
                        <SocialIcon target="_blank"style = {styles.socialMediaButton} url ="https://www.facebook.com/thomas.tracy.73"/>
                        <SocialIcon target="_blank" style = {styles.socialMediaButton} url ="https://www.instagram.com/joey_tr3/"/>
                        <SocialIcon target="_blank"style = {styles.socialMediaButton} url ="https://www.youtube.com/user/Music94Maker/videos"/>
                        <SocialIcon target="_blank"style = {styles.socialMediaButton} url ="https://soundcloud.com/joeytre"/>
                        <SocialIcon target="_blank" style = {styles.socialMediaButton} url ="https://open.spotify.com/artist/1ZwvbWG7MCpi4lb3TRDzET?si=NwUGHNqbT92Lat82sRbCzw"/>                    
                        <SocialIcon target="_blank"style = {styles.socialMediaButton} url ="https://itunes.apple.com/bf/artist/kendrick-lamar/id368183298"/>
                    </div>
            </React.Fragment>

        );
        }
    }
        const styles = {
            socialButtonsContainer : {
                justifyContent: 'space-evenly',
                display: 'flex',
                marginTop : 5,
                overFlow : 'hidden'
            }, 
            socialMediaButton:  {
                width : 30,
                height : 30
            }
        }
