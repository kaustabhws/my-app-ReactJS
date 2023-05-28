import React, { useState } from 'react';

export default function TextUtil(props) {
    const [text, setText] = useState('');
    const wordCount = text.trim().split(/\s+/).length;

    const handleUpBtn = () => {
        if (text) {
            let newText = text.toUpperCase();
            setText(newText);
            showAlert("Converted to uppercase", "success")
        } else {
            showAlert("No text to convert", "danger")
        }
    };

    const handleLowBtn = () => {
        if (text) {
            let newText = text.toLowerCase();
            setText(newText);
            showAlert("Converted to lowercase", "success")
        } else {
            showAlert("No text to convert", "danger")
        }
    };

    const handleCapBtn = () => {
        if (text) {
            let newText = text.replace(/\b\w/g, match => match.toUpperCase());
            setText(newText);
            showAlert("Captitalized each word", "success")
        } else {
            showAlert("No text to convert", "danger")
        }
    };

    const handleclrBtn = () => {
        if (text) {
            let newText = '';
            setText(newText);
            showAlert("Text cleared", "success")
        } else {
            showAlert("No text to clear", "danger")
        }
    };

    const handlecpyBtn = () => {
        if (text) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard
                    .writeText(text)
                    .then(() => {
                        showAlert("Copied to clipboard", "success");
                    })
                    .catch((error) => {
                        console.error('Failed to copy text using Clipboard API: ', error);
                    });
            } else {
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.top = '-9999px';
                textArea.style.left = '-9999px';
                document.body.appendChild(textArea);
                textArea.select();

                try {
                    const successful = document.execCommand('copy');
                    if (successful) {
                        showAlert("Copied to clipboard", "success");
                    } else {
                        console.error("Unable to copy text to clipboard", "danger");
                    }
                } catch (error) {
                    console.error('Failed to copy text using execCommand: ', error);
                }

                document.body.removeChild(textArea);
            }
        } else {
            showAlert("No text to copy", "danger");
        }
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ message: message, type: type });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    return (
        <>
            {alert && (
                <div className={`alert alert-${alert.type} text-center d-flex justify-content-center`} role="alert">
                    {alert.message}
                </div>
            )}
            <div className="mb-3 my-2">
                <h1>{props.heading}</h1>
                <textarea className={`form-control border-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <div className="container">
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleUpBtn}>To Uppercase</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleLowBtn}>To Lowercase</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleCapBtn}>Capitalize each word</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handleclrBtn}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-1 my-2" onClick={handlecpyBtn}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h3>Text summary</h3>
                {text && (
                    <>
                        <p>{wordCount} words, {text.length} characters</p>
                        <p>{wordCount * 0.008} minutes to read</p>
                    </>
                )}
            </div>
            <div className="container">
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    );
}
