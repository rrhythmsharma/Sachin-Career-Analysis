import React from 'react'
import image from '../../assets/sachin-tendulkar-img.jpg';
import './Header.css';

const Header = () => {
    return(
        <React.Fragment>
            <h2 className="sachin-career-heading">Sachiiin Sachin!</h2>
            <h3 className="about-sachin">About Sachin</h3>
            <div className="sachin-description">
                <img className="sachin-img" src={image} alt="sahin"/>
                <p className="sachin-description-text">
                    <b>Sachin Tendulkar</b> was born April 24, 1973, in Bombay, India. Introduced to 
                    cricket at age 11, Tendulkar was just 16 when he became India's youngest Test
                    cricketer. In 2005, he became the first cricketer to score 35 
                    centuries in Test play. In 2008, 
                    he reached another major milestone by surpassing Brian Lara's 
                    mark of 11,953 Test runs. Tendulkar took home the <b>World Cup</b> with his 
                    team in 2011, and wrapped up his record-breaking career in 2013.
                </p>
            </div>
        </React.Fragment>
    )
}

export default Header;