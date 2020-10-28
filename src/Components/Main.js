import React from 'react';
import voltron from '../voltron.png';

const Main = () => {
    return (
        <main>
            <img alt="voltron" id="voltron" src={voltron}/>
            <div className="lion-container">
                <div className="lion black" >
                    <img alt="lion" src="https://lh3.googleusercontent.com/proxy/3uyhiiqfUKsCpjnW8qHzay_n-54N5J248ksyuK509l-_SNLUrlcUNTWCQntTYfYF8ys_T-oRuBvX_xj4bd0JFQhQ_eUl"/>
                </div>
                <div className="lion red">
                    <img alt="lion" src="https://static.wikia.nocookie.net/voltron/images/7/7c/Official_-_Red_Lion_leaping_pose.png/revision/latest/scale-to-width-down/620?cb=20160627051824"/>
                </div>
                <div className="lion blue">
                    <img alt="lion" src="https://static.wikia.nocookie.net/voltron/images/3/36/Official_-_Blue_Lion_leaping_pose.png/revision/latest/scale-to-width-down/620?cb=20160627044939"/>
                </div>
                <div className="lion yellow">
                    <img alt="lion" src="https://static.wikia.nocookie.net/voltron/images/4/42/Official_-_Yellow_Lion_leaping_pose.png/revision/latest/scale-to-width-down/620?cb=20160627051538"/>
                </div>
                <div className="lion green">
                    <img alt="lion" src="https://static.wikia.nocookie.net/voltron/images/6/68/Official_-_Green_Lion_prowling_pose.png/revision/latest/scale-to-width-down/619?cb=20160627051501"/>
                </div>
            </div>
        </main>
    )}

export default Main;