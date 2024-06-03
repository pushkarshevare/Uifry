import React from 'react'
import './style.css'

const Testomonial = () => {
  return (
    <div>
      <div className="testomonial-container">
        <div className="testomonial-header">
            <h3>TESTOMONIAL</h3>
            <h1>What Our Users <br></br> Say About Us?</h1>
        </div>
        <div className="testomonial-content">
            <div className="image">
                <img src='/images/testo.png' />
            </div>
            <div className="right-content">
                <h2>The Best Financial Accounting App Ever!</h2>
                <p>"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."</p>
                <div className="pics">
                    <img src='/images/testo-small.png' />
                </div>
                <h4>Nick Jonas</h4>

            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Testomonial
