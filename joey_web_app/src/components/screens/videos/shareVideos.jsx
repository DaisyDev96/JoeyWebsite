import React from 'react';
import { FacebookShareButton,  TwitterShareButton, FacebookIcon , TwitterIcon,  TumblrShareButton, TumblrIcon } from "react-share";
export class SharePost extends React.Component {
    render(){
        return (
            <React.Fragment >
                <h5> Share On Social Media</h5>
                <FacebookShareButton
                    url={this.props.uri}
                >
                    <FacebookIcon size={32} round={true}/>
                </FacebookShareButton>

                <TwitterShareButton
                    url={this.props.uri}>
                    <TwitterIcon size={32} round={true}/>
                </TwitterShareButton>

                <TumblrShareButton
                    url = {this.props.uri}
                >
                    <TumblrIcon size={32} round={true}/>
                </TumblrShareButton>        
                                
            </React.Fragment>
        );
        }
}