import React from 'react';

export default function TriggerButton(props) {
    const {
        triggerText, 
        buttonRef, 
        showModal
    } = props

    return (
        <button 
            ref={buttonRef} 
            onClick={showModal}>{ triggerText }</button>
    );
};
