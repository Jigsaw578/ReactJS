import React, { useRef } from "react";

export default function Mycom() {
    function render() {
        const dev = ["A", "B"]
        const show = dev.map((dv) => {
            return `
          <p>2 ${dv}</p>
        `
        })
        return { __html: show.join("") }
    }


    return (
        <div dangerouslySetInnerHTML={render()}>
            {/* <input type="text" ref={inputRef} />
            <button onClick={handleClick}> focus Input</button> */}
        </div>
    )
}

