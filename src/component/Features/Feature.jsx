import React from 'react'
import './style.css'

const Feature = () => {
    return (
        <div>
            <div className="feature-container">
                <div className="image">
                    <img src='/images/phone.png' />
                </div>
                <div className="feature-content">
                    <h3>FEATURES</h3>
                    <h1>Uifry Premium</h1>
                    <ul>
                        <li>
                            <h4><img src='/images/star.png' /> Budgeting Intervals</h4>
                            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        </li>
                        <li>
                            <h4><img src='/images/cube.png' /> Budgeting Intervals</h4>
                            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        </li>
                        <li>
                            <h4><img src='/images/cube-02.png' /> Budgeting Intervals</h4>
                            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Feature
