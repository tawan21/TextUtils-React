import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }

    return (
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        <strong>Analyze Your Text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyze your text quickly and efficiently &mdash; be it word count, character count or many other functions.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        <strong>Free To Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free tool that provides instant output/feedback.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This web app works in any web browser &mdash; such as Chrome, Firefox, Edge, Safari, Opera, etc.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
