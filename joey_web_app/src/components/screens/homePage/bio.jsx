import React from 'react';

export default class Bio extends React.Component {
    render(){
        return (
            <React.Fragment >
                <section style = {styles.headerText}>
                    <h1> A Story Steeped in Sound</h1>
                        <h3 style = {{textIndent:  '50px', width : "50%", marginLeft : '25%'}}>
                        Tom the Lyricist, better known as Joey Tre’, is an aspiring hip-hop/R&B artist from Chicago, Illinois.  He is a true lyricist & vocalist to the core and contains sounds in his music and flow that blends together both the old and new styles of hip-hop & R&B; serving as a bridge between the two and creating the best of both worlds.  He has always displayed an interest in music even at a young age and has been greatly influenced over the years by a number of artists, consisting of: Kendrick Lamar, Nas, J Cole, Eminem, Tupac, Biggie, Kanye, Jay-Z, Rakim, Nate Dogg, The Roots, Chance the Rapper, Outkast, and N.W.A.

From storytelling, to rhyme schemes, to cleverly implemented wordplay, Tom continues to exercise his versatility in music.  He can progress rather quickly in only a small amount of time, and is always looking for new and innovative ways to improve his craft and take it to the next level.  As a hard worker, Joey Tre' is always on the go and planning out his next move in order to push his career along even further.
                        </h3>
                </section>
            </React.Fragment>
        );
        }
}

const styles = {
    headerText :{
        textAlign: 'center',
        color : 'white',
        justifyContent:'center',
        alignItems:'center',
        maxHeight: 300,
        overflow : 'scroll'
    },
}