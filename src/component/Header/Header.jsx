import React from 'react'
import './style.css'
const Header = () => {
    return (
        <div>
            <div className="main-container">
                <div className="left-side">
                    <h1>
                        Make The Best Financial Decisions
                    </h1>
                    <p>
                        Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
                        Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
                    </p>
                    <div className="btns">
                        <button className='get'>Get Started <lord-icon
                            src="https://cdn.lordicon.com/vduvxizq.json"
                            trigger="hover"
                            state="hover-ternd-flat-3"
                            colors="primary:#ffffff"
                        >
                        </lord-icon>
                        </button>
                        <button className='watch'>
                            <lord-icon
                                src="https://cdn.lordicon.com/aklfruoc.json"
                                trigger="hover"
                               >
                            </lord-icon>
                            Watch Video</button>
                    </div>
                    <div className="image-left">
                        <img src='/images/patti.png' />
                    </div>
                </div>

                <div className="right-side">
                    <img src='/images/header.png' />
                </div>
            </div>
        </div >
    )
}

export default Header
