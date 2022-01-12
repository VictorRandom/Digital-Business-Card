import React from 'react';
import './Info.css';

const Info = () => {
    return(
        <div className="info">
            <div>
                <div className="about">About</div>
                <div className="text">I am a frontend developer with a little bit of knowledge about backend.
                                    I also have a MBA of project management and I'm graduated as a civil engineer.
                                    Always looking for more information and new things to learn.</div>
            </div>
            <div className="interests">
                <div className="about">Interests</div>
                <div className="text">Soccer Expert in love with Goiás Esporte Clube. Irregular Cooker. Love to play Video Games. Travel Geek. Country Music Style. Addicted to pizza.</div>
            </div>
        </div>    
    );
};

export default Info;