import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function BT2() {
    const [time, settime] = useState("day")
    function Nightclick() {
        settime("night")
    }
    function Dayclick() {
        settime("day")
    }

    const Box = styled.div`
        background-color: ${(props) => {
            console.log(props);

            if (props.color === "night") {
                return "black";
            } return "blue";
        }};
        width: 100px;
        height: 200px;
    `
    return (
        <div>
            <button onClick={Nightclick}>Night</button>
            <button onClick={Dayclick}>Day</button>
            <Box color={time} ></Box>
        </div >


    )
}