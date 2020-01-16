import React from 'react';
import CalendarIcon from "react-calendar-icon";

export class Event extends React.Component {

    render(){
        return (
            <React.Fragment >
                <section style = {{ display : 'flex'}}>

                    <div style = {{ backgroundColor: 'pink', width : '33%'}} ></div>
                    <div style = {{ backgroundColor: 'red', width : '33%'}} ></div>
                    <div style = {{ backgroundColor: 'orange', width : '33%'}} ></div>
                    <div>
                        <CalendarIcon date={new Date()} />
                    </div>              
                </section>
            </React.Fragment>

        );
    }
}