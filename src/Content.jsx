import React from 'react';
// import PopUp from './PopUp.jsx';

import '../styles/index.scss';

export default class Content extends React.Component {
    // showPopUp() {
    //     document.getElementById('popUp').className = 'visible';
    //     document.body.style.overflow = "hidden";
    // }
    render() {
    return (
      <div>
          <div className='content-wrapper'>
              <div className='content-wrapper__content'>
                  <section className='content-wrapper__content__screen-1'>
                      <div className='content-wrapper__content__screen-1__block-1'>
                          <img className='content-wrapper__content__screen-1__sap-hybris-logo' src={require('./images/sap-hybris.png')} alt='' height='34px'/>
                          <h1 className='content-wrapper__content__screen-1__sap-hybris-text'>SAP Hybris —эффективное управление всем циклом взаимодействия с клиентом</h1>
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

                  <section className='content-wrapper__content__screen-2'>
                      <div className='content-wrapper__content__screen-2__form'>
                          <div className='content-wrapper__content__screen-2__form__pair'>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <input className='input input-black input-name' id='input-name' name='name' placeholder='Введите ваше имя'></input>
                                  <span className='error-black visible'>Пожалуйста заполните это поле</span>
                              </div>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <input className='input input-black input-email' id='input-email' type='email' name='email' placeholder='Введите ваш email'></input>
                                  <span className='error-black visible'>Пожалуйста заполните это поле</span>
                                  <span className='error-mail-black visible'>Введите верный email</span>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-2__form__pair'>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <input className='input input-black input-phone' id='input-phone' name='phone' placeholder='Введите ваш телефон'></input>
                                  <span className='error-black visible'>Пожалуйста заполните это поле</span>
                              </div>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <button className='button input-black input button-submit' id='button-submit' name='phone'>ЗАКАЗАТЬ ТЕСТ-ДРАЙВ</button>
                              </div>
                          </div>
                      </div>
                  </section>

                  <div className='content-wrapper__content__screen-3__header'>
                      <div className='content-wrapper__content__screen-3__line'></div>
                      <h2 className='content-wrapper__content__screen-3__header-text content-wrapper__content__screen-3__header-text-advantages'>Наши возможности</h2>
                      <p className='content-wrapper__content__screen-3__space content-wrapper__content__screen-3__space-fix'></p>
                  </div>
                  <section className='content-wrapper__content__screen-3'>
                          <div className='content-wrapper__content__screen-3__wrapper'>
                              <div className='content-wrapper__content__screen-3__commerce-block'>
                                  <div className='content-wrapper__content__screen-3__commerce-block-pair'>
                                      <img className='content-wrapper__content__screen-3__commerce-block__commerce-icon2' src={require('./images/commerce-icon2.png')} alt='' height='106px' width=''/>
                                      <div className='content-wrapper__content__screen-3__commerce-block__description'>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header'>Commerce</p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__text'>Готовая платформа для построения омни-канальной коммерции</p>
                                      </div>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__screen-3__list'>
                                  <ul>
                                      <li><span>Реализация стратегии омниканального сбыта и управление заказами.</span></li>
                                      <li><span>Удобные покупки с любого мобильного устройства за счет адаптации интерфейса</span></li>
                                      <li><span>Готовая интеграция интернет-магазина с популярными платёжными системами.</span></li>
                                      <li><span>Автоматическое сегментирование покупателей с настраиваемой детализацией</span></li>
                                      <li><span>Обработка заказов, частичная отгрузка, автоматический расчёт доставки и интеграция с внешними сервисами доставки.</span></li>
                                      <li><span>Автоматическая обработка заказов с учетом особенностей складского учёта, географии складов и наличия товара.</span></li>
                                      <li><span>Управление промоакциями и e-mail рассылками, отзывами о товарах.</span></li>
                                  </ul>
                              </div>
                          </div>
                      <div className='content-wrapper__content__screen-3__block-1'>
                          <img className='content-wrapper__content__screen-3__block-1__img' src={require('./images/block-1.png')} alt='' height='' width='100%'/>
                      </div>
                  </section>

                  <section className='content-wrapper__content__screen-4'>
                      <div className='content-wrapper__content__screen-4-green padding'>
                          <div className='content-wrapper__content__screen-4__wrapper'>
                              <div className='content-wrapper__content__screen-3__commerce-block'>
                                  <div className='content-wrapper__content__screen-3__commerce-block-pair'>
                                      <img className='content-wrapper__content__screen-3__commerce-block__commerce-icon2' src={require('./images/diamond-icon.png')} alt='' height='106px' width=''/>
                                      <div className='content-wrapper__content__screen-3__commerce-block__description'>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header'>Marketing</p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__text'>SAP Hybris Marketing – единый инструмент для управления всем маркетинговым циклом, оркестрации и персонализации коммуникации по всем каналам</p>
                                      </div>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__colored-list green'>
                                  <ul>
                                      <li><span>Кроссканальные взаимодействия</span></li>
                                      <li><span>Таргетинг и Сегментация</span></li>
                                      <li><span>Маркетинговое планирование</span></li>
                                      <li><span>Персонализация</span></li>
                                      <li><span>Аналитика в реальном времени</span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className='content-wrapper__content__screen-4 padding'>
                          <div className='content-wrapper__content__screen-4__wrapper'>
                              <div className='content-wrapper__content__screen-3__commerce-block'>
                                  <div className='content-wrapper__content__screen-3__commerce-block-pair'>
                                      <img className='content-wrapper__content__screen-3__commerce-block__commerce-icon2' src={require('./images/billing-icon2.png')} alt='' height='106px' width=''/>
                                      <div className='content-wrapper__content__screen-3__commerce-block__description'>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header'>Billing</p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__text'>SAP Hybris Billing – решения для цифровых продуктов и сервисных услуг (расширение ассортимента и внедрение клиентоорентированного сервиса)</p>
                                      </div>
                                  </div>
                              </div>
                              <div className='content-wrapper__content__colored-list blue'>
                                  <ul>
                                      <li><span>Управление подпиской</span></li>
                                      <li><span>Контроль качества</span></li>
                                      <li><span>Тарификация</span></li>
                                      <li><span>Инвойсирование</span></li>
                                      <li><span>Управление документами</span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className='content-wrapper__content__screen-4'>
                          <div className='content-wrapper__content__screen-4-orange padding'>
                              <div className='content-wrapper__content__screen-4__wrapper'>
                                  <div className='content-wrapper__content__screen-3__commerce-block'>
                                      <div className='content-wrapper__content__screen-3__commerce-block__pair'>
                                          <div className='content-wrapper__content__screen-3__commerce-block-pair'>
                                              <img className='content-wrapper__content__screen-3__commerce-block__commerce-icon2' src={require('./images/sap-cloud.png')} alt='' height='106px' width=''/>
                                              <div className='content-wrapper__content__screen-3__commerce-block__description'>
                                                  <p className='content-wrapper__content__screen-3__commerce-block__description__header'>SAP Cloud For Customer</p>
                                                  <p className='content-wrapper__content__screen-3__commerce-block__description__text'>Комплексное решение для продаж, обслуживания клиентов и маркетинга – в одной системе объединены возможности управления, выполнения и аналитики бизнес-процессов. Вы сможете отслеживать все стадии совершения сделки, получать больше данных о клиентах, анализировать результаты и опыт сотрудников и принимать решения, опираясь на успешные практики.</p>
                                              </div>
                                          </div>

                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header margin-top50px'>SAP Hybris Sales</p>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__text-sub'>Позволяет контролировать и анализировать процесс продаж, структурировать информацию обо всех стадиях совершения сделок и принимать в будущем успешные управленческие решения.</p>
                                          <div className='content-wrapper__content__colored-list orange adjust-list'>
                                              <ul>
                                                  <li><span>Управление базой клиентов</span></li>
                                                  <li><span>Сегментирование</span></li>
                                                  <li><span>Выстраивание индивидуальных стратегий продаж</span></li>
                                                  <li><span>Планирование</span></li>
                                                  <li><span>Улучшение результата за счет контроля и внедрения практик</span></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className='content-wrapper__content__screen-3__commerce-block__pair-2'>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header margin-top50px'>Маркетинг:</p>
                                          <div className='content-wrapper__content__colored-list orange adjust-list fix'>
                                              <ul>
                                                  <li><span>Анализ аудитории</span></li>
                                                  <li><span>Сегментация</span></li>
                                                  <li><span>Настройки по активности и целевым группам</span></li>
                                                  <li><span>Персонализация коммуникаций</span></li>
                                                  <li><span>Запуск маркетинговых кампаний по различным каналам</span></li>
                                                  <li><span>Автоматизация процесса согласования</span></li>
                                                  <li><span>Отслеживание откликов</span></li>
                                                  <li><span>Оценка эффективности маркетинговых кампаний</span></li>
                                              </ul>
                                          </div>
                                          <p className='content-wrapper__content__screen-3__commerce-block__description__header margin-top50px'>Сервис:</p>
                                          <div className='content-wrapper__content__colored-list orange adjust-list fix'>
                                              <ul>
                                                  <li><span>Набор функций для качественной поддержки клиентов</span></li>
                                                  <li><span>Проведение клиентских опросов</span></li>
                                                  <li><span>Центр взаимодействия с клиентами</span></li>
                                                  <li><span>Умный колл-центр</span></li>
                                                  <li><span>Служба единого окна</span></li>
                                                  <li><span>Общение по любым удобным каналам связи</span></li>
                                              </ul>
                                          </div>

                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  <section className='content-wrapper__content__screen-5'>
                      <div className='content-wrapper__content__screen-5__wrapper'>
                          <div className='content-wrapper__content__screen-3__line'></div>
                          <p className='content-wrapper__content__screen-3__header-text header-fix'>Выгоды от внедрения SAP Hybris</p>
                          <p className='content-wrapper__content__screen-3__space'></p>
                      </div>
                      <div className='content-wrapper__content__screen-5__blocks-wrapper'>
                          <div className='content-wrapper__content__screen-5__block'>
                              <img className='content-wrapper__content__screen-5__block__img' src={require('./images/conversion-icon.png')} alt='' height='93px' width='93px'/>
                              <p className='content-wrapper__content__screen-5__block__text'>Повышение омникальной конверсии</p>
                          </div>
                          <div className='content-wrapper__content__screen-5__block'>
                              <img className='content-wrapper__content__screen-5__block__img' src={require('./images/wallet-icon.png')} alt='' height='93px' width='93px'/>
                              <p className='content-wrapper__content__screen-5__block__text'>Увеличение среднего чека</p>
                          </div>
                          <div className='content-wrapper__content__screen-5__block'>
                              <img className='content-wrapper__content__screen-5__block__img' src={require('./images/decrising-icon.png')} alt='' height='93px' width='93px'/>
                              <p className='content-wrapper__content__screen-5__block__text'>Снижение ТСО омникальной платформы</p>
                          </div>
                      </div>
                      <div className='content-wrapper__content__screen-5__scheme-block'>
                          <img className='content-wrapper__content__screen-5__scheme-block__img-small' src={require('./images/scheme-small.png')} alt='' height='' width='100%' onClick={this.showPopUp}/>
                      </div>
                  </section>
                  <section className='content-wrapper__content__screen-2'>
                      <div className='content-wrapper__content__screen-2__form'>
                          <div className='content-wrapper__content__screen-2__form__pair'>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <input className='input input-black input-name' id='input-name' name='name' placeholder='Введите ваше имя'></input>
                                  <span className='error-black visible'>Пожалуйста заполните это поле</span>
                              </div>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <input className='input input-black input-email' id='input-email' type='email' name='email' placeholder='Введите ваш email'></input>
                                  <span className='error-black visible'>Пожалуйста заполните это поле</span>
                                  <span className='error-mail-black visible'>Введите верный email</span>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-2__form__pair'>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <input className='input input-black input-phone' id='input-phone' name='phone' placeholder='Введите ваш телефон'></input>
                                  <span className='error-black visible'>Пожалуйста заполните это поле</span>
                              </div>
                              <div className='content-wrapper__content__screen-2__form__pair__subpair'>
                                  <button className='button input-black input button-submit' id='button-submit' name='phone'>ЗАКАЗАТЬ ТЕСТ-ДРАЙВ</button>
                              </div>
                          </div>
                      </div>
                  </section>

                  <section className='content-wrapper__content__screen-6'>
                      <div className='content-wrapper__content__screen-6__header'>
                          <div className='content-wrapper__content__screen-6__header__wrapper'>
                              <div className='content-wrapper__content__screen-6__header__line'></div>
                              <div className='content-wrapper__content__screen-6__header__text'>Почему Норбит</div>
                              <div className='content-wrapper__content__screen-6__header__line'></div>
                          </div>
                      </div>
                      <div className='content-wrapper__content__screen-6__wrapper'>
                          <div className='content-wrapper__content__screen-6__wrapper__container'>
                              <img className='content-wrapper__content__screen-6__wrapper__container__img' src={require('./images/stars-icon.png')} alt='' height='' width='80px'/>
                              <p className='content-wrapper__content__screen-6__wrapper__container__text'>Опыт</p>
                              <div className='content-wrapper__content__colored-list-block white'>
                                  <ul>
                                      <li>Более 16 лет на рынке</li>
                                      <li>Из них 12 лет SAP Gold Partner</li>
                                      <li>Наработанный проектный портфель SAP Hybris в России</li>
                                      <li>Кроссотраслевые решения и методики</li>
                                  </ul>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-6__wrapper__container'>
                              <img className='content-wrapper__content__screen-6__wrapper__container__img' src={require('./images/like-icon.png')} alt='' height='' width='59px'/>
                              <p className='content-wrapper__content__screen-6__wrapper__container__text'>Опыт</p>
                              <div className='content-wrapper__content__colored-list-block white'>
                                  <ul>
                                      <li>500+ проектов</li>
                                      <li>Рекомендации клиентов</li>
                                      <li>Стабильная проектная команда экспертов-практиков</li>
                                  </ul>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-6__wrapper__container'>
                              <img className='content-wrapper__content__screen-6__wrapper__container__img' src={require('./images/sheld-icon.png')} alt='' height='' width='46px'/>
                              <p className='content-wrapper__content__screen-6__wrapper__container__text'>Гарантии</p>
                              <div className='content-wrapper__content__colored-list-block white'>
                                  <ul>
                                      <li>Собственный центр технической поддержки</li>
                                      <li>Гарантийный постропроектный период – 12 месяцев</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </section>

                  <h2 className='content-wrapper__content__screen-3__header-text content-wrapper__content__screen-3__header-text-contacts'>Контакты</h2>
                  <section className='content-wrapper__content__screen-7'>
                      <div className='content-wrapper__content__screen-7__wrapper__header'>
                          <div className='content-wrapper__content__screen-3__line'></div>
                          <div className='content-wrapper__content__screen-7__space'></div>
                      </div>
                      <div className='content-wrapper__content__screen-7__wrapper'>
                          <div className='content-wrapper__content__screen-7__wrapper__container'>
                              <div className="content-wrapper__content__screen-7__wrapper__container__wrapper">
                                  <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-1">
                                      <img src={require('./images/pin-icon.png')} alt='' width='27px' height=''/>
                                  </div>
                                  <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2">
                                      <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_1">Адрес:</p>
                                      <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_2">27083, г. Москва, ул. Юннатов, д. 18</p>
                                  </div>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-7__wrapper__container'>
                              <div className="content-wrapper__content__screen-7__wrapper__container__wrapper">
                                  <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-1">
                                      <img src={require('./images/phone-icon.png')} alt='' width='27px' height=''/>
                                  </div>
                                  <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2">
                                      <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_1">Телефон:</p>
                                      <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_2">+7 495 787-29-92</p>
                                  </div>
                              </div>
                          </div>
                          <div className='content-wrapper__content__screen-7__wrapper__container'>
                              <div className="content-wrapper__content__screen-7__wrapper__container__wrapper">
                                  <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-1">
                                      <img src={require('./images/mail-icon.png')} alt='' width='27px' height=''/>
                                  </div>
                                  <div className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2">
                                      <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_1">Email: </p>
                                      <p className="content-wrapper__content__screen-7__wrapper__container__wrapper__block-2_2">sap@norbit.ru</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  <section className='content-wrapper__content__screen-2-white'>
                      <h2 className='content-wrapper__content__screen-2__header-white'>Попробуйте SAP Hybris прямо сейчас!</h2>
                      <div className='content-wrapper__content__screen-2__form-white'>
                          <div className=' content-wrapper__content__screen-2__form-white__pair-white'>
                              <input className='input input-white input-name' id='input-name' name='name' placeholder='Введите ваше имя'></input>
                              <span className='error'>Пожалуйста заполните это поле</span>
                              <input className='input input-white input-email' id='input-email' type='email' name='email' placeholder='Введите ваш email'></input>
                              <span className='error'>Пожалуйста заполните это поле</span>
                              <span className='error-mail'>Введите верный email</span>
                          </div>
                          <div className='content-wrapper__content__screen-2__form-white__pair-white'>
                              <input className='input input-white input-company' id='input-company' name='phone' placeholder='Название компании'></input>
                              <span className='error'>Пожалуйста заполните это поле</span>
                              <input className='input input-white input-phone' id='input-phone' name='phone' placeholder='Введите ваш телефон'></input>
                              <span className='error'>Пожалуйста заполните это поле</span>
                          </div>
                      </div>
                      <div className='content-wrapper__content__screen-2__form-white__submit-white'>
                          <button className='input button button-white button-submit' id='button-submit' name='phone'>ЗАКАЗАТЬ ТЕСТ-ДРАЙВ</button>
                      </div>
                  </section>

                  <section className='content-wrapper__content__screen-7'>
                    <iframe src="https://api-maps.yandex.ru/frame/v1/-/C6uq5J4L" width="100%" height="400px"></iframe>
                  </section>

                  <section className='content-wrapper__content__footer'>
                      <span className='content-wrapper__content__footer__block'>© 2017 Норбит. Все права защищены</span>
                  </section>

              </div>
          </div>
          {/* <PopUp/> */}
      </div>
    )}
}
