import React from 'react';
import '../styles/index.scss';
import '../styles/common/style_reset.css';
import '../styles/fonts.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div>
          <div className='header'>
              <div className='header__container'>
                  <div className='header__container__norbit-logo'>
                      <img src={require('./images/norbit-logo.png')} alt='' height='40px'/>
                  </div>
                  <div className='header__container__sap-logo'>
                      <img src={require('./images/sap-logo.png')} alt='' height='40px'/>
                  </div>
                  <div className='header__container__email'></div>
                  <div className='header__container__phone'></div>
                  <div className='header__container__menu-button'>
					  <img src={require('./images/menu-button.png')} alt='' height='20px'/>
				  </div>
              </div>
          </div>
      </div>
    )
  }
}
