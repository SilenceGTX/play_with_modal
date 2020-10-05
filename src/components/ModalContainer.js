import React, { Component } from 'react';
import ModalContent from "./ModalContent";
import TriggerButton from "./TriggerButton";

export default class ModalContainer extends Component {
    state = {isShown: false};
    
    showModal = () => {
        this.setState({isShown: true});
        this.toggleScrollLock();
    };

    closeModal = () => {
        this.setState({isShown: false});
        this.toggleScrollLock();
    };

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }; //按下ESC
    };

    toggleScrollLock = () => {
        document.querySelector("html").classList.toggle("scroll-lock");
    };

    render () {
        return (
            <React.Fragment>
                <TriggerButton
                    showModal={this.showModal}
                    buttonRef={(n) => {this.TriggerButton=n}}
                    triggerText={this.props.buttonText}/>
                {this.state.isShown ? 
                <ModalContent
                    title={this.props.title}
                    modalRef={(n) => {this.modal=n}}
                    buttonRef={(n) => {this.closeButton=n}}
                    closeModal={this.closeModal}
                    onKeyDonw={this.onKeyDown}
                    zindex={this.props.zindex || 0}
                    children={this.props.children}/> : 
                null}  
            </React.Fragment>
        );
    }
};