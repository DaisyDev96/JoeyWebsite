import React from 'react';
// make an enum tomorrow for types pf ontent 
import {f, auth } from '../../config/config' 

export default class AdminLogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email :"",
            password : '',
        }
    }
    handleEmail = (e) =>{
        e.preventDefault()
        this.setState({email : e.target.value})
    }
    handlePw = (e) =>{
        e.preventDefault()
        this.setState({password : e.target.value})
    }
    logIn = async() =>{
        var email = this.state.email;
        var pw = this.state.password;
        if (pw !== '' && email !== ''){
            try{
                let user = await auth.signInWithEmailAndPassword(email, pw)
                this.setState({
                    password:'',
                    email: ""
                })
            }catch(err){
                console.log(err)
            }
        }
    }

    render(){

        return (
            <React.Fragment>
                <section style = {{ display: 'flex', justifyContent: 'center', alignContent:'center', flexDirection:'column' , width : '250px', color : 'white' }}>
                    <form>
                        Email :
                    <input 
                    placeholder = 'hy' 
                    type="email" 
                    style = {{   margin: 5, }} 
                    onChange = {this.handleEmail} 
                    value = {this.state.email}/>
                        PassWord :
                    <input type = "password" style = {{  margin: 5, }} onChange = {this.handlePw} value = {this.state.password}/>
                    </form>
                    <button   onClick = {this.logIn} style = {{ backgroundColor: 'green', borderRadius: "50%" , width : '65px', margin: 10, height : '30px', marginLeft: 90}}> Login</button>
                    
                </section>
            </React.Fragment>
        );
        }
}