import React from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import styled from 'styled-components';

export default function ModalContent(props) {
    const {
        modalRef,
        buttonRef,
        onKeyDown,
        closeModal,
        zindex
    } = props;

    return ReactDOM.createPortal(
        <FocusTrap>
            <aside 
                tag="aside"
                role="dialog"
                tabIndex="-1"
                aria-modal="true"
                onKeyDown={onKeyDown}>
                <StyledOverlay zindex={zindex}/>
                <StyledWrapper zindex={zindex}>
                    <StyledModal ref={modalRef}>
                        <div>
                            { props.children }
                            <button 
                                ref={buttonRef} 
                                aria-label="Close Modal"
                                aria-labelledby="close-modal"
                                onClick={closeModal}>退下吧</button>  
                        </div>
                    </StyledModal>
                </StyledWrapper>
            </aside>
        </FocusTrap>, document.body
    );
};

const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${props => props.zindex + 1000};
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
` //用于Modal弹出后遮蔽其他原内容

const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${props => props.zindex + 1010};
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
`

const StyledModal = styled.div`
    z-index: 100;
    background: white;
    position: relative;
    top: 80px;
    margin: 1.75rem auto;
    border-radius: 3px;
    max-width: 1000px;
    padding: 2rem;
`