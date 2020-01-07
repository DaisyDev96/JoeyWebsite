import React from 'react';
import { database } from '../.././../config/config';
export default class Subscribe extends React.Component {
    state = {
        email : ""
    }
    uniqueId = () =>{
        return this.s4()  + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' +
        this.s4() + this.s4(); 
    }
    s4 = () =>{
        return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1)
    } 
    updateEmail = (e) =>{
        e.preventDefault()
        this.setState({email : e.target.value})
    }
    updateEmailList = () =>{
        var that = this;
        if(this.state.email !== ''){
            var emailTest = this.emailIsValid(this.state.email)
            if(emailTest){
                var id = this.uniqueId();
                database.ref('emailList/'+id ).set(that.state.email);
                    this.setState({email:""})
            }
            else {
                alert('Please Enter a real Email')
            }
        }else {
            alert('Please Enter Email Before Continuing' )
        }
    }
    emailIsValid =  (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    render(){
        return (
            <React.Fragment >
                <section style = {styles.text}>
                        <h4> Subscribe form </h4>
                        <form>      
                            <input style={{width: '15%',
                                borderRadius : "5%",
                                color: 'white'}} type="text"  placeHolder = "Email Address "value={this.state.email} onChange = {this.updateEmail}  />
                        </form>
                    <button style ={{width: '15%',
                            borderRadius : "5%",
                            color: 'white',
                            backgroundColor: 'black'
                        }} onClick = {this.updateEmailList}>
                            Submit 
                        </button>
                </section>
            </React.Fragment>
        );
        }
}

const styles = {
    text :{
        textAlign: 'center',
        color: 'white',
        fontSize: '20px',
    },

}