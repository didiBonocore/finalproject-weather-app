import React from "react";

export default function FormattedDate(props){
    //configure days of the week
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day = days[props.date.getDay()];
    
    //get the hours working with the Zero in front
    let hours = props.date.getHours();
    if(hours < 10){
        hours = `0${hours}`;
    }

    //get the minutes working with the Zero in front
    let minutes = props.date.getMinutes();
    if(minutes < 10){
        minutes = `0${minutes}`;
    }

    //display time in the screen the right way
    return (
        <div>
            {day} {hours}:{minutes}
        </div>
    );
}