import React from 'react'
import './Header.css';

const Header = () => {
    return(
        <React.Fragment>
            <h2 className="sachin-career-heading">Sachin Tendulkar!</h2>
            <div className="sachin-description">
                <b>Sachin Tendulkar</b> was born April 24, 1973, in Bombay, India. 
                Tendulkar was India's youngest Test cricketer. In 2008, he reached 
                Tendulkar took home the <b>World Cup</b> with his team in 2011, and wrapped up his 
                record-breaking career in 2013.
            </div>
        </React.Fragment>
    )
}

export default Header;