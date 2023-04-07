import { useState } from "react";
import styled from "styled-components";
import styles from './styles.module.css';
export default function TH2() {
    const [numClicked, setNumClicked] = useState(0);
    const handleClick = () => {
        setNumClicked((current) => {
            return current = current + 1;
        });
    };

    const StyledText = styled.h2`
        color: ${(props) => {
            if (props.numClicked % 2 === 0) {
                return "blue";
            }
            return "red";
        }};
`;
    const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;

    return (
        <div className="App">
            <button onClick={handleClick}>Click here</button>
            <StyledText numClicked={numClicked}>
                You clicked {numClicked} times
            </StyledText>
        </div>
    );
}