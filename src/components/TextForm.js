import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }
    const handleClrClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Text cleared!","success")
    }
    const handleCpyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to clipboard!","success")
    }
    const handleEsClick = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Whitespaces removed from text!","success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const words = () => {
        return text.split(/\s+/).filter((ele) => { return ele.length !== 0 }).length
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label visually-hidden">Textarea</label>
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'floralwhite' : 'lightgrey', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleClrClick}>Clear Text</button>
                <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleCpyClick}>Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleEsClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>
                    {words()} words and {text.length} characters
                </p>
                <p>
                    {0.008 * words()} minutes to read
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
