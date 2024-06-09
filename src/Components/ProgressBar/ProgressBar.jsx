import './ProgressBar.css'
import React, { useState, useEffect } from 'react';
function ProgressBar({ duration = 1000 }){
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 10;
            if (currentProgress <= 100) {
                setProgress(currentProgress);
            }
        }, duration); 

        return () => clearInterval(interval);

    }, [duration]);

    return (
        <div className='progress-bar-container'>
            <div className='progress-bar' style={{width : `${progress}%`}}>
                {/* <span className='progress-bar-text'>{percentage}%</span> */}
            </div>
        </div>
    );
}
export default ProgressBar;