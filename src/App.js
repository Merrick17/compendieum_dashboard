import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div>
    <div className="page">
     <Sidebar/>
      <div className="page__content">
    <Home/>
      </div>
    </div>
    <div className="popup popup_settings mfp-hide" id="popup-settings">
      <div className="popup__title h6">Account Settings</div>
      <div className="popup__tabs js-tabs">
        <div className="popup__select mobile-show"><select className="select js-tabs-select">
            <option>Profile</option>
            <option>Referrals</option>
            <option>Password</option>
            <option>2FA</option>
            <option>Sessions &amp; Login History</option>
          </select></div>
        <div className="popup__nav"><a className="popup__link js-tabs-link active" href="#">Profile</a><a className="popup__link js-tabs-link" href="#">Referrals</a><a className="popup__link js-tabs-link" href="#">Password</a><a className="popup__link js-tabs-link" href="#">2FA</a><a className="popup__link js-tabs-link" href="#">Sessions &amp; Login History</a></div>
        <div className="popup__container">
          <div className="popup__item js-tabs-item" style={{display: 'block'}}>
            <div className="popup__user">
              <div className="popup__label popup__label_mb32">Your Avatar</div>
              <div className="popup__line">
                <div className="popup__ava"><img className="popup__pic" src="img/ava-header.png" alt /></div>
                <div className="popup__details">
                  <div className="popup__btns">
                    <div className="popup__loading"><input className="popup__file" type="file" /><button className="popup__upload">Upload New</button></div><button className="popup__btn btn btn_gray">Delete Avatar</button>
                  </div><a className="popup__default" href="#">Use default avatar</a>
                </div>
              </div>
            </div>
            <div className="popup__fieldset">
              <div className="popup__row">
                <div className="popup__field">
                  <div className="popup__label">Your Full Name</div>
                  <div className="popup__wrap"><input className="popup__input" type="text" /></div>
                </div>
                <div className="popup__field">
                  <div className="popup__label">Display Name</div>
                  <div className="popup__wrap"><input className="popup__input" type="text" /></div>
                </div>
              </div>
              <div className="popup__row">
                <div className="popup__field">
                  <div className="popup__label">Email</div>
                  <div className="popup__wrap"><input className="popup__input" type="email" /></div>
                </div>
                <div className="popup__field">
                  <div className="popup__label">Location</div>
                  <div className="popup__wrap"><input className="popup__input" type="text" /></div>
                </div>
              </div>
              <div className="popup__row">
                <div className="popup__field">
                  <div className="popup__label">Deposit Assets</div>
                  <div className="popup__wrap"><select className="select select_arrows select_sm">
                      <option>Enabled</option>
                      <option>Disabled</option>
                    </select></div>
                </div>
                <div className="popup__field">
                  <div className="popup__label">Withdraw assets</div>
                  <div className="popup__wrap"><select className="select select_arrows select_sm">
                      <option>Enabled $1,000,000 USD/day</option>
                      <option>Disable $1,000,000 USD/day</option>
                    </select></div>
                </div>
              </div>
            </div>
            <div className="popup__label">Notifications</div>
            <div className="popup__variants"><label className="checkbox"><input className="checkbox__input" type="checkbox" defaultChecked /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Promotions</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" defaultChecked /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Exchange</span></span></label><label className="checkbox"><input className="checkbox__input" type="checkbox" /><span className="checkbox__in"><span className="checkbox__tick" /><span className="checkbox__text">Withdrawals</span></span></label></div><button className="popup__btn btn btn_blue" type="submit">Update Profile</button>
          </div>
          <div className="popup__item js-tabs-item">
            <div className="popup__invite">
              <div className="popup__info h6">Invite your friends to Unity Exchange and Earn 15% on Friends trading fees</div>
              <div className="popup__label">Your Referral Link</div>
              <div className="popup__wrap"><input className="popup__input" type="text" defaultValue="https://unityexchange.design/ref?tranmautritam" /><button className="popup__copy"><svg className="icon icon-copy">
                    <use xlinkHref="img/sprite.svg#icon-copy" />
                  </svg></button></div>
            </div>
            <div className="popup__category">Total Rewards</div>
            <div className="popup__flex">
              <div className="popup__money h3">128.256</div>
              <div className="popup__currency">USTD</div>
            </div>
            <div className="popup__parameters">
              <div className="popup__parameter">
                <div className="popup__head">
                  <div className="popup__text">Inviter Rewards</div>
                  <div className="popup__text">0.00 USDT</div>
                </div>
                <div className="popup__body">You’re earning 20% of the trading fees your referrals pay.</div>
              </div>
              <div className="popup__parameter">
                <div className="popup__head">
                  <div className="popup__text">Total Invited</div>
                  <div className="popup__text">64</div>
                </div>
              </div>
            </div>
          </div>
          <div className="popup__item js-tabs-item">
            <form className="popup__form">
              <div className="popup__title h6">Change Password</div>
              <div className="popup__field field js-field">
                <div className="field__label">current Password</div>
                <div className="field__wrap"><input className="field__input js-field-input" type="password" /></div>
              </div>
              <div className="popup__field field js-field">
                <div className="field__label">new Password</div>
                <div className="field__wrap"><input className="field__input js-field-input" type="password" /></div>
              </div>
              <div className="popup__field field js-field">
                <div className="field__label">Confirm new Password</div>
                <div className="field__wrap"><input className="field__input js-field-input" type="password" /></div>
              </div><button className="popup__btn btn btn_blue btn_wide">Change Password</button>
            </form>
          </div>
          <div className="popup__item js-tabs-item">
            <div className="popup__box">
              <div className="popup__title h6">Scan Code</div>
              <div className="popup__scan">
                <div className="popup__preview"><img src="img/qr-code.png" alt /></div>
                <div className="popup__details">
                  <div className="popup__text">If you want to turn on 2FA, use <a href="#">Google Authenticator app</a> to scan code, then enter six-digit code provided by the app to the form below.</div><button className="popup__btn btn btn_blue">Download 2FA App</button>
                </div>
              </div>
            </div>
            <div className="popup__box">
              <div className="popup__title h6">Enter six-digit code</div>
              <div className="popup__numbers">
                <div className="popup__number success"><input type="tel" defaultValue={5} /></div>
                <div className="popup__number success"><input type="tel" defaultValue={6} /></div>
                <div className="popup__number success"><input type="tel" defaultValue={7} /></div>
                <div className="popup__number success"><input type="tel" defaultValue={9} /></div>
                <div className="popup__number"><input type="tel" /></div>
                <div className="popup__number"><input type="tel" /></div>
              </div>
            </div>
          </div>
          <div className="popup__item js-tabs-item">
            <div className="popup__box">
              <div className="popup__title h6">Active Sessions</div>
              <table className="popup__table">
                <tbody><tr>
                    <th>DATE/TIME</th>
                    <th>DEVICE</th>
                    <th>LOCATION</th>
                    <th>IP ADDRESS</th>
                    <th> </th>
                  </tr>
                  <tr>
                    <td>2020-12-02 07:50:18</td>
                    <td>iMac Pro</td>
                    <td><span className="popup__flag">🇺🇸</span> USA </td>
                    <td>123.45.678.987</td>
                    <td><button className="popup__close"><svg className="icon icon-close">
                          <use xlinkHref="img/sprite.svg#icon-close" />
                        </svg></button></td>
                  </tr>
                </tbody></table>
            </div>
            <div className="popup__box">
              <div className="popup__title h6">Login History</div>
              <table className="popup__table">
                <tbody><tr>
                    <th>DATE/TIME</th>
                    <th>DEVICE</th>
                    <th>LOCATION</th>
                    <th>IP ADDRESS</th>
                    <th>2FA</th>
                  </tr>
                  <tr>
                    <td>2020-12-02 07:50:18</td>
                    <td>iMac Pro</td>
                    <td><span className="popup__flag">🇻🇳</span> VN</td>
                    <td>123.45.678.987</td>
                    <td><svg className="icon icon-check">
                        <use xlinkHref="img/sprite.svg#icon-check" />
                      </svg></td>
                  </tr>
                  <tr>
                    <td>2020-12-02 07:50:18</td>
                    <td>iPhone X</td>
                    <td><span className="popup__flag">🇺🇸</span> USA </td>
                    <td>123.45.678.987</td>
                    <td><svg className="icon icon-check">
                        <use xlinkHref="img/sprite.svg#icon-check" />
                      </svg></td>
                  </tr>
                  <tr>
                    <td>2020-12-02 07:50:18</td>
                    <td>iMac Pro</td>
                    <td><span className="popup__flag">🇻🇳</span> VN</td>
                    <td>123.45.678.987</td>
                    <td><svg className="icon icon-check">
                        <use xlinkHref="img/sprite.svg#icon-check" />
                      </svg></td>
                  </tr>
                  <tr>
                    <td>2020-12-02 07:50:18</td>
                    <td>iMac Pro</td>
                    <td><span className="popup__flag">🇺🇸</span> USA </td>
                    <td>123.45.678.987</td>
                    <td><svg className="icon icon-check">
                        <use xlinkHref="img/sprite.svg#icon-check" />
                      </svg></td>
                  </tr>
                  <tr>
                    <td>2020-12-02 07:50:18</td>
                    <td>iMac Pro</td>
                    <td><span className="popup__flag">🇺🇸</span> USA </td>
                    <td>123.45.678.987</td>
                    <td><svg className="icon icon-check">
                        <use xlinkHref="img/sprite.svg#icon-check" />
                      </svg></td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
