import React from 'react';
import '../styles/index.scss';

export default class Content extends React.Component {
  render() {
    return (
      <div>
          <div className='content-wrapper'>
              <div className='content-wrapper__content'>
                  <section className='content-wrapper__content__screen-1'>
                      <div className='content-wrapper__content__screen-1__block-1'>
                          <img className='content-wrapper__content__screen-1__sap-hybris-logo' src={require('./images/sap-hybris.png')} alt='' height='34px'/>
                          <p className='content-wrapper__content__screen-1__sap-hybris-text'>SAP Hybris —эффективное управление всем циклом взаимодействия с клиентом</p>
                      </div>
                      <div className='content-wrapper__content__screen-1__block-2'>
                          <div className='content-wrapper__content__screen-1__block-2__list'>
                              <div className='content-wrapper__content__screen-1__block-2__pair-1'>
                                  <div className='content-wrapper__content__screen-1__block-2__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/checked-icon.png')} alt='' height='25px'/>
                                      <div className='content-wrapper__content__screen-1__text'>Понимание потребности каждого клиента</div>
                                  </div>
                                  <div className='content-wrapper__content__screen-1__block-2__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/checked-icon.png')} alt='' height='25px'/>
                                      <div className='content-wrapper__content__screen-1__text'>Увеличение среднего чека</div>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__screen-1__block-2__pair-2'>
                                  <div className='content-wrapper__content__screen-1__block-2__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/checked-icon.png')} alt='' height='25px'/>
                                      <div className='content-wrapper__content__screen-1__text'>Улучшение сервиса</div>
                                  </div>
                                  <div className='content-wrapper__content__screen-1__block-2__subpair'>
                                      <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/checked-icon.png')} alt='' height='25px'/>
                                      <div className='content-wrapper__content__screen-1__text'>Снижение ваших затрат</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='content-wrapper__content__screen-1__block-3'>
                          <div className='content-wrapper__content__screen-1__block-3__pair-1'>
                              <div className='content-wrapper__content__screen-1__block-3__subpair'>
                                  <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/commerce-icon.png')} alt='' height='106px' width='106px'/>
                                  <p className='content-wrapper__content__screen-1__block-3__subpair__text'>Commerce</p>
                              </div>
                              <div className='content-wrapper__content__screen-1__block-3__subpair'>
                                  <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/marketing-icon.png')} alt='' height='106px' width='106px'/>
                                  <p className='content-wrapper__content__screen-1__block-3__subpair__text'>Marketing</p>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-1__block-3__pair-2'>
                              <div className='content-wrapper__content__screen-1__block-3__subpair'>
                                  <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/marketing-icon.png')} alt='' height='106px' width='106px'/>
                                  <p className='content-wrapper__content__screen-1__block-3__subpair__text'>Billing</p>
                              </div>
                              <div className='content-wrapper__content__screen-1__block-3__subpair'>
                                  <img className='content-wrapper__content__screen-1__checked-icon' src={require('./images/marketing-icon.png')} alt='' height='106px' width='106px'/>
                                  <p className='content-wrapper__content__screen-1__block-3__subpair__text'>SAP Cloud For Customer</p>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
          </div>
      </div>
    )
  }
}
