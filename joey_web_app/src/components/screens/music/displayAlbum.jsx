import React from 'react';

export default class Album extends React.Component {
    state ={
        songsTempt1 : [],
        songsTempt2 :[],
        index2 : 0,
        mounted : false
    }
    listSongs = (arr, index ) =>{
            return ( 
                <div style = {{width : '45%'}}>
                    { 
                        arr.map((item) => (
                            <div style = {{borderBottom: '3px solid grey', maxHeight : 50, overflowX:'scroll'}}> 
                                <p style = {{ color : 'red', fontWeight: 'bold'}}>  {index++} <span style = {{ color : 'white', marginLeft: '2%'}}> {item}</span>  </p>
                            </div>
                            
                        ))
                    }
                </div>
            );
    }

    splitSongs = () => {
        var songLength = Math.floor(this.props.songs.length/2)
        this.setState({
            songsTempt1: this.props.songs.slice(0, songLength+1),
            songsTempt2:this.props.songs.slice(songLength+1),
            mounted : true,
            index2 : (songLength+1 )
        }, () =>{
            console.log(this.state)
        })
        
        
    }
componentDidMount(){
    this.splitSongs()
}
    render(){
        return (
            <React.Fragment >
                <h1 style ={styles.headerText}>{this.props.title} </h1>
                <div style = {{ display : 'flex', alignContent: 'center', justifyContent: 'center', height : '500px',  backgroundColor: ' hsla(0, 0%, 10%,0.9)', flexShrink: 1 }}>
                    <section style ={styles.cover}>
                        <img src = {this.props.cover} width = '100%'  height = '100%'/>
                    </section>
                    <section style = {{ width : '45%', overflowY: 'scroll'}}>
                        <p style = {{ color : "white"}}> {this.props.date} </p>

                        <section style = {{ display:'flex', width: '100%', justifyContent:'center', flexWrap: 'wrap' }}>
                            {this.listSongs(this.state.songsTempt1, 1 )}
                            {this.listSongs(this.state.songsTempt2, this.state.index2)}
                        </section>
                        
                    </section>
                </div>

                

            </React.Fragment>
        );
        }
}
const styles = { 
    headerText :{
        borderBottomColor : 'green',
        textAlign: 'center',
        color : 'red',
        borderBottom: '3px solid green',
        backgroundColor: 'black',
        fontSize : 30
    },
    cover :{
        width: '45%',
    },
    songs :{
        width: '45%',
        display : 'flex',
    },
    headerText :{
        borderBottomColor : 'green',
        textAlign: 'center',
        color : 'red',
        borderBottom: '1px solid green',
        backgroundColor: 'black',
        fontSize : 30,
    },
}