import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="d-flex justify-content-center my-5">
                <h2>About me</h2>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div className={`card border-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ width: '18rem', backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}>
                    <div className="card-body text-center">
                        <img src="https://i.ibb.co/KWYrcXM/photo.jpg"
                            className="rounded-circle" alt="Profile pic" width="200" height="200" />
                            <h5 className="card-title">Kaustabh Mahanta</h5>
                            <h6 className="card-subtitle mb-2" style={{color: '#8b8b8b'}}>Web Developer</h6>
                            <p className="card-text">I'm a student at Cotton University. Currently persuing my BCA degree</p>
                            <a href="https://www.linkedin.com/in/kaustabh-mahanta-533748269/" target="_blank" rel="noreferrer" className="card-link">LinkedIn</a>
                            <a href="https://github.com/kaustabhws" target="_blank" rel="noreferrer" className="card-link">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}
