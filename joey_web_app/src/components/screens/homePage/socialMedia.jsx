import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default class SocialMedia extends React.Component {
    render(){
        return (
            <React.Fragment>
                    <div style= {styles.socialButtonsContainer}>     
                        <SocialIcon style = {styles.socialMediaButton}  url="http://twitter.com" />
                        <SocialIcon style = {styles.socialMediaButton} url ="http://facebook.com"/>
                        <SocialIcon style = {styles.socialMediaButton} url ="http://instagram.com"/>
                        <SocialIcon style = {styles.socialMediaButton} url ="https://www.youtube.com/user/Music94Maker/videos"/>
                        <SocialIcon style = {styles.socialMediaButton} url ="http://soundcloud.com"/>
                        <SocialIcon style = {styles.socialMediaButton} url ="http://spotify.com"/>                    
                        <SocialIcon style = {styles.socialMediaButton} url ="https://itunes.apple.com/bf/artist/kendrick-lamar/id368183298"/>
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
