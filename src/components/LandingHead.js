import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//   } from "react-router-dom";


function LandingHead() {

    return (
        <div className='container' style={{ display: "flex", justifyContent: "flex-end" ,
        width: "925px", marginTop: "206px"}}>
            <div className='container' style={{ 
                width: "574px", height: "264px", 
                textAlign: "right" }}>
                <h1 style={{
                    margin: "0px",
                    color: "#240D57",
                    lineHeight: "45px",

                    // position: "absolute",
                    // width: "573.91px",
                    // height: "192px",

                    fontFamily: 'Helvetica',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "64px",
                    // lineHeight: "64px"


                }}>Imagine if</h1>
                <h1 style={{
                    margin: "0px",
                    // width: "573.91px",
                    // height: "192px",

                    fontFamily: 'Helvetica',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "64px",
                    
                    //  lineHeight: "64px",
                    background: "linear-gradient(90deg, rgba(132, 86, 236, 1), rgba(232, 123, 248, 1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"


                }}>Snapchat</h1>
                <h1 style={{
                    margin: "0px",
                    // width: "573.91px",
                    // height: "192px",

                    fontFamily: 'Helvetica',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "64px",
                    lineHeight: "45px",    
                    //   lineHeight: "64px",
                    color: "#240D57"
                }}>had events.</h1>
                <p style={{
                
                    fontFamily: 'Helvetica',
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: "24px",
                    textAlign: "right",
                
                    color: "#4F4F4F",
                    marginTop: "20px",
                }}>Easily host and share events with your friends across any social media.</p>

            <button type="button" class="btn" style={{
                margin: "30px 0px 0px 0px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
                gap: "10px",
                width: "320px",
                height: "55px",
                background: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
                borderRadius: "10px",
                color: "rgba(255, 255, 255, 1)",
                fontFamily: 'Helvetica',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "20px",
            }} >🎉 Create my event</button>

            </div>
            

        </div>
    )
}

export default LandingHead
