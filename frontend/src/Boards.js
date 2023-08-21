import React from "react";
import { useState } from "react";

const arr=[
    {
        Name:"I/cars",
        Description:"Board for discussions related to cars and automobile",
        Image:'img1.jpg'
    },
    {
        Name:"I/maths",
        Description:"Discuss about maths",
        Image:"img2.jpg"
    },
    {
        Name:"I/books",
        Description:"Discuss about books",
        Image:"img3.jpg"
    },
    {
        Name:"I/paintings",
        Description:"Discuss about paintings",
        Image:"img4.jpg"
    },
    {
        Name:"I/ComputerScience",
        Description:"Discuss about Computer Science",
        Image:"img5.jpg"
    }
]

function BrdCard(props){
    const [hover,Sethover]=useState(0)
    const cardStyle={
        // width:'450px',
        // height:'350px',
        display:"flex",
        flexDirection:"column",
        objectFit:"cover",
        background:"black",
        marginLeft:"10px",
        marginTop:"20px"
    }
    const pStyle={
        fontFamily:"monospace",fontSize:"20px",color:"white"
    }

    const dispDescription=(e)=>{
        Sethover(1);
    }
    const rmDescription=(e)=>{
        Sethover(0);
    }

    return(
        <div style={cardStyle} onMouseEnter={dispDescription} onMouseLeave={rmDescription}>
            {hover?<p style={pStyle} >{props.Description}</p>:
            <>
                <img src={require("./"+props.Image)} height={250}></img>
                <p style={pStyle}>{props.Name}</p>
            </>
            }
        </div>
    )
}

export function Boards(){
    const divStyle={
        display:"grid",
        gridTemplateColumns:"33% 33% 33%",
        // margin:"10px"
        
    }
    return(
        <div style={divStyle}>
            {arr.map((card)=>{
                return <BrdCard Image={card.Image} Description={card.Description} Name={card.Name}></BrdCard>
            })}
        </div>
    )
}