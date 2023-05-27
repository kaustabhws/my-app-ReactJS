import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">MyApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Contact' className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch form-check-reverse text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onClick={props.toggleMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckReverse">{props.myStat} Dark mode</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}
