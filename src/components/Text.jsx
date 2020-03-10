import React, { useEffect } from 'react';
import '../styles/styles.scss';

const Text = () => {
    useEffect(() => {
        changeColor();
    })
    return (
        <div className="main-text fs50 black-text color-change">Test App Running</div>
    )
}

const changeColor = () => {
    console.log('run')
    let text = document.querySelector('.color-change');
    setInterval(() => {
        if (text.classList.contains('black-text')) {
            text.classList.remove('black-text');
            text.classList.add('white-text') 
        }
        else {
            text.classList.remove('white-text');
            text.classList.add('black-text')
        }
        
    }, 2000);
}

export default Text;