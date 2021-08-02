import React from 'react'
import homeIcon from '../assets/img/home.png';
import spotMarket from '../assets/img/spot-market.png'
import futureIcon from '../assets/img/future.png';
import poolsIcon from '../assets/img/pools.png'
import signalProvider from '../assets/img/signal.png';
import strategy from '../assets/img/strategy.png'
import tokenIcon from '../assets/img/token.png';
import walletIcon from '../assets/img/wallet.png';
import './styles.css'
import mainLogo from '../assets/img/comp-logo.svg'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__head"><a className="sidebar__logo" href="index.html">
                <img className="sidebar__pic sidebar__pic_light" src={mainLogo} alt />
                <img className="sidebar__pic sidebar__pic_dark" src={mainLogo} alt />
                </a><button className="sidebar__toggle"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 12H3" stroke="#11142d" />
                <g stroke="#808191">
                    <path d="M22 4H13" />
                    <path opacity=".301" d="M22 20H13" />
                </g>
                <path d="M7 7l-5 5 5 5" stroke="#11142d" />
            </svg></button><button className="sidebar__close"><svg className="icon icon-close">
                <use xlinkHref="img/sprite.svg#icon-close" />
            </svg></button></div>
            <div className="sidebar__body">
                <nav className="sidebar__nav"><a className="sidebar__item active" href="index.html">
                    <div className="sidebar__icon"> <img src={homeIcon} /></div>
                    <div className="sidebar__text">Home</div>
                </a><a className="sidebar__item" href="exchange.html">
                        <div className="sidebar__icon"><img src={spotMarket} /></div>
                        <div className="sidebar__text">Spot Markets</div>
                    </a><a className="sidebar__item" href="prices.html">
                        <div className="sidebar__icon"><img src={futureIcon} /></div>
                        <div className="sidebar__text">Isolated Futures</div>
                    </a><a className="sidebar__item" href="wallets.html">
                        <div className="sidebar__icon"><img src={poolsIcon} /></div>
                        <div className="sidebar__text">Trading Pools</div>
                    </a><a className="sidebar__item" href="promotions.html">
                        <div className="sidebar__icon"><img src={signalProvider} /></div>
                        <div className="sidebar__text">Signal Providers</div>
                    </a><a className="sidebar__item" href="activities.html">
                        <div className="sidebar__icon"><img src={strategy} /></div>
                        <div className="sidebar__text">Strategy Creator</div>
                    </a><a className="sidebar__item" href="notifications.html">
                        <div className="sidebar__icon"><img src={tokenIcon} /></div>
                        <div className="sidebar__text">Token Staking</div>
                    </a><a className="sidebar__item js-popup-open" href="#popup-settings" data-effect="mfp-zoom-in">
                        <div className="sidebar__icon"><img src={walletIcon} /></div>
                        <div className="sidebar__text">Linked Wallet</div>
                    </a></nav>
                <div className="sidebar__mail"><button className="sidebar__close"><svg className="icon icon-close">
                    <use xlinkHref="img/sprite.svg#icon-close" />
                </svg></button>
                    <div className="sidebar__info">Send Cryto to An Email Address</div><button className="sidebar__btn btn btn_white btn_sm">Send Now</button>
                </div>
                <form className="sidebar__search"><input className="sidebar__input" type="text" placeholder="Search" /><button className="sidebar__start"><svg className="icon icon-search">
                    <use xlinkHref="img/sprite.svg#icon-search" />
                </svg></button></form>
            </div>
            <div className="sidebar__bottom"><label className="switch switch_theme js-switch-theme"><input className="switch__input" type="checkbox" /><span className="switch__in"><span className="switch__box" /><span className="switch__icon"><svg className="icon icon-theme-light">
                <use xlinkHref="img/sprite.svg#icon-theme-light" />
            </svg><svg className="icon icon-theme-dark">
                    <use xlinkHref="img/sprite.svg#icon-theme-dark" />
                </svg></span></span></label><a className="sidebar__user" href="sign-in.html"><img src="img/ava-header.png" alt /></a></div>
        </div>
    )
}

export default Sidebar
