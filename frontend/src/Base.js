import React from "react";
import { useState } from "react";
import { Boards } from "./Boards";

export function Base(){

    const textDiv={
        fontFamily:"monospace",fontSize:"30px"
    }
    return(
        <div style={{"margin":"10px"}}>
            <p style={textDiv}>ImageBoards</p>
            <p style={{fontFamily:"monospace",fontSize:"20px"}}>
                A website where people can connect and share images anonymously
            </p>
        </div>
    )
}