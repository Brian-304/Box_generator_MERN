import React, { useState } from "react"


const Display = (props) => {
    const [colorBoxes, setcolorBoxes] = useState(["red", "yellow", "green"])// display something so you can see 
    const [input, setInput] = useState("")//to change 

    //submitting the form
const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submitted")
    setcolorBoxes([...colorBoxes, input])//old value then create new value
    setInput("")
}

    return (
        <>
            <fieldset>

                <legend>Display.jsx</legend>
                <form onSubmit={submitHandler}> 
                <input onChange={(e) => {// onchange is an event of the input change. Needs to be on form
                    setInput(e.target.value)// input is the value change input to chane setInput to the new value. Needs to be on form
                }} value = {input}/> 
                <button>Add</button> 
                </form>
                {/* {JSON.stringify(props)} */}
                <div className="main">
                    {

                        colorBoxes.map((Box, idx) => {
                            return (
                                <div key={idx}>
                                    <div style={{ backgroundColor: Box, width: "25px", height: "25px" }}></div>
                                </div>
                            )

                        })
                    }
                </div>

            </fieldset>

        </>
    )
}

export default Display