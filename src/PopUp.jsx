import React from 'react';

export default class PopUp extends React.Component {
    closePopUp() {
        document.getElementById('popUp').className = 'hidden';
        document.body.style.overflow = "auto";
    }
    render() {
        return (
            <div id='popUp' className='hidden'>
                <div className='popUp__overlay' onClick={this.closePopUp}></div>
                <div className='popUp'>
                    <div className='popUp__container'>
                        <a className='popUp__container__close-btn' onClick={this.closePopUp}>
                            <img className='popUp__container__img' src={require('./images/close-btn.svg')} alt='' height='' width='40px'/>
                        </a>
                        <img className='popUp__container__img' src={require('./images/scheme-small.png')} alt='' height='' width='100%'/>
                    </div>
                </div>
            </div>
        )}
}
