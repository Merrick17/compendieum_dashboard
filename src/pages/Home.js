import React,{useEffect} from 'react'
import solana from '../assets/img/solana.png'
import Chart from "react-apexcharts";
import { _toConsumableArray, randomizeArray, green, gray, purple, red } from '../utils/initCharts';
import ApexCharts from 'apexcharts';
import mainLogo from '../assets/img/comp-logo.svg'
const Home = () => {
    const sparklineData = [7, 5, 4, 8, 6, 4, 3];
    const series = [{
        name: 'Sales',
        data: randomizeArray(sparklineData)
    }];
    // Apex.chart = {
    //     fontFamily: 'Inter, sans-serif',
    //     fontSize: 13,
    //     fontWeight: 500,
    //     foreColor: gray
    // };
    useEffect(()=>{
        renderTotalChart(); 
    },[])
    const renderTotalChart = () => {
        var options = {
            series: [87, 75, 62],
            chart: {
                height: '100%',
                type: 'radialBar'
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '16px'
                        },
                        value: {
                            fontSize: '14px'
                        },
                        total: {
                            show: false
                        }
                    }
                }
            },
            colors: [purple, green, red],
            labels: ['USD', 'EUR', 'RUB']
        };

        var chart = document.querySelector('#chart-total-balance');
        if (chart != null) {
            new ApexCharts(chart, options).render();
        }
    }
    const totalSeries = [87, 75, 62];
    const options = {
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '16px'
                    },
                    value: {
                        fontSize: '14px'
                    },
                    total: {
                        show: false
                    }
                }
            }
        },
        colors: ['#FFF', green, red],
        labels: ['USD', 'EUR', 'RUB']
    };
    var sparkOptions1 = {
        chart: {
            group: 'sparklines',
            type: 'line',
            height: '100%',
            sparkline: {
                enabled: true
            },
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            foreColor: gray
        },
        fill: {
            opacity: 1
        },

        labels: [].concat(_toConsumableArray(Array(7).keys())).map(function (n) {
            return '2020-09-0' + (n + 1);
        }),
        yaxis: {
            min: 0
        },
        xaxis: {
            type: 'datetime'
        },
        colors: [green],
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        tooltip: {
            enabled: false
        }
    };

    return (
        <div>
            <div className="header header_border">
                <form className="header__search"><input className="header__input" type="text" placeholder="Search" /><button className="header__start"><svg className="icon icon-search">
                    <use xlinkHref="img/sprite.svg#icon-search" />
                </svg></button></form><a className="header__logo" href="index.html"><img src={mainLogo} alt /></a>
                <div className="header__group">
                    <div className="header__item header__item_notifications"><button className="header__head active"><svg className="icon icon-notification">
                        <use xlinkHref="img/sprite.svg#icon-notification" />
                    </svg></button>
                        <div className="header__body">
                            <div className="header__notifications">
                                <div className="header__notification">
                                    <div className="header__icon"><img src="img/paper.svg" alt /></div>
                                    <div className="header__details">
                                        <div className="header__info">Wrapped Bitcoin is now listed on Unity Exchange</div>
                                        <div className="header__line">
                                            <div className="header__time">24m ago</div>
                                            <div className="header__status" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header__notification">
                                    <div className="header__icon"><img src="img/paper.svg" alt /></div>
                                    <div className="header__details">
                                        <div className="header__info">Wrapped Bitcoin is now listed on Unity Exchange</div>
                                        <div className="header__line">
                                            <div className="header__time">24m ago</div>
                                            <div className="header__status" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header__notification">
                                    <div className="header__icon"><img src="img/paper.svg" alt /></div>
                                    <div className="header__details">
                                        <div className="header__info">Wrapped Bitcoin is now listed on Unity Exchange</div>
                                        <div className="header__line">
                                            <div className="header__time">24m ago</div>
                                            <div className="header__status" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header__notification">
                                    <div className="header__icon"><img src="img/paper.svg" alt /></div>
                                    <div className="header__details">
                                        <div className="header__info">Wrapped Bitcoin is now listed on Unity Exchange</div>
                                        <div className="header__line">
                                            <div className="header__time">24m ago</div>
                                            <div className="header__status" />
                                        </div>
                                    </div>
                                </div>
                                <div className="header__notification">
                                    <div className="header__icon"><img src="img/paper.svg" alt /></div>
                                    <div className="header__details">
                                        <div className="header__info">Wrapped Bitcoin is now listed on Unity Exchange</div>
                                        <div className="header__line">
                                            <div className="header__time">24m ago</div>
                                            <div className="header__status" />
                                        </div>
                                    </div>
                                </div>
                            </div><a className="header__btn btn btn_blue btn_wide" href="notifications.html">See all notifications</a>
                        </div>
                    </div>
                    <div className="header__item header__item_download"><button className="header__head"><svg className="icon icon-arrow-down-square">
                        <use xlinkHref="img/sprite.svg#icon-arrow-down-square" />
                    </svg></button>
                        <div className="header__body">
                            <div className="header__row">
                                <div className="header__col">
                                    <div className="header__category">Downloads</div>
                                    <div className="header__downloads"><a className="header__download" href="#"><img src="img/app-store.svg" alt /></a><a className="header__download" href="#"><img src="img/google-play.svg" alt /></a></div>
                                </div>
                                <div className="header__col">
                                    <div className="header__category">Scan Code</div>
                                    <div className="header__code"><img src="img/qr-code.png" alt /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__item header__item_lang"><button className="header__head">Eng/USD</button>
                        <div className="header__body">
                            <div className="header__lang">
                                <div className="header__cell"><a className="header__link active" href="#"><span className="header__flag">🇺🇸</span> English</a><a className="header__link" href="#"><span className="header__flag">🇨🇳</span> 中文</a><a className="header__link" href="#"><span className="header__flag">🇪🇸</span> Española</a><a className="header__link" href="#"><span className="header__flag">🇫🇷</span> Français</a><a className="header__link" href="#"><span className="header__flag">🇻🇳</span> Tiếng Việt</a></div>
                                <div className="header__cell"><a className="header__link active" href="#">USD</a><a className="header__link" href="#">EUR</a><a className="header__link" href="#">JPY</a><a className="header__link" href="#">BTC</a></div>
                            </div>
                        </div>
                    </div>
                </div><a className="header__user" href="sign-in.html"><img src="img/ava-header.png" alt /></a><button className="header__toggle"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 12H3" stroke="#11142d" />
                    <g stroke="#808191">
                        <path d="M22 4H13" />
                        <path opacity=".301" d="M22 20H13" />
                    </g>
                    <path d="M7 7l-5 5 5 5" stroke="#11142d" />
                </svg></button>
            </div>
            <div className="page__row">
                <div className="page__col">
                    <div className="slider slider_home"><button className="slider__close"><svg className="icon icon-close">
                        <use xlinkHref="img/sprite.svg#icon-close" />
                    </svg></button>
                        <div className="slider__container">
                            <div className="slider__list js-slider owl-carousel">
                                <div className="slider__item">
                                    <div className="slider__wrap">
                                        <div className="slider__date">September 2021 </div>
                                        <div className="slider__title">Trading is now active on solana</div>
                                        <div className="slider__info">Spot markets and isolated perpetual futures are now available!.</div><button className="slider__btn btn btn_white">Start Trading</button>
                                    </div>
                                    <div className="slider__preview"><img src={solana} alt /></div>
                                </div>
                                <div className="slider__item">
                                    <div className="slider__wrap">
                                        <div className="slider__date">September 2021 </div>
                                        <div className="slider__title">Trading is now active on solana</div>
                                        <div className="slider__info">Spot markets and isolated perpetual futures are now available!.</div><button className="slider__btn btn btn_white">Start Trading</button>
                                    </div>
                                    <div className="slider__preview"><img src={solana} alt /></div>
                                </div>
                                <div className="slider__item">
                                    <div className="slider__wrap">
                                        <div className="slider__date">September 2021 </div>
                                        <div className="slider__title">Trading is now active on solana</div>
                                        <div className="slider__info">Spot markets and isolated perpetual futures are now available!.</div><button className="slider__btn btn btn_white">Start Trading</button>
                                    </div>
                                    <div className="slider__preview"><img src={solana} alt /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widgets">
                        <div className="widgets__sorting">
                            <div className="widgets__select mobile-show"><select className="select">
                                <option>Core Assets</option>
                                <option>Top Gainers</option>
                                <option>Top Losers</option>
                                <option>New</option>
                            </select></div>
                            <div className="widgets__variants mobile-hide"><a className="widgets__link active" href="#">Core Assets</a><a className="widgets__link" href="#">Top Gainers</a><a className="widgets__link" href="#">Top Losers</a><a className="widgets__link" href="#">New</a></div>
                            <div className="widgets__select"><select className="select select_empty">
                                <option>Market Cap</option>
                                <option>A - Z</option>
                                <option>Volumes</option>
                                <option>Last 24h</option>
                                <option>Price</option>
                            </select></div>
                        </div>
                        <div className="widgets__list">
                            <div className="widgets__item">
                                <div className="widgets__head">
                                    <div className="widgets__company">
                                        <div className="widgets__logo"><img src="img/logo/bitcoin.png" alt /></div>
                                        <div className="widgets__details">
                                            <div className="widgets__category">Bitcoin</div>
                                            <div className="widgets__info">BTC</div>
                                        </div>
                                    </div>
                                    <div className="widgets__time">24H</div>
                                </div>
                                <div className="widgets__body">
                                    <div className="widgets__line">
                                        <div className="widgets__price">18,245.4 USD</div>
                                        <div className="status positive">+2.73%</div>
                                    </div>
                                    <div className="widgets__chart">
                                        <Chart
                                            options={sparkOptions1}
                                            series={series}
                                            type="line"
                                            height={100}

                                        />
                                    </div>
                                </div><button className="widgets__btn btn btn_blue btn_wide">View Asset</button>
                            </div>
                            <div className="widgets__item">
                                <div className="widgets__head">
                                    <div className="widgets__company">
                                        <div className="widgets__logo"><img src="img/logo/ethereum.png" alt /></div>
                                        <div className="widgets__details">
                                            <div className="widgets__category">Ethereum</div>
                                            <div className="widgets__info">ETH</div>
                                        </div>
                                    </div>
                                    <div className="widgets__time">24H</div>
                                </div>
                                <div className="widgets__body">
                                    <div className="widgets__line">
                                        <div className="widgets__price">598.296 USD</div>
                                        <div className="status positive">+2.73%</div>
                                    </div>
                                    <div className="widgets__chart">
                                        <Chart
                                            options={sparkOptions1}
                                            series={series}
                                            type="line"
                                            height={100}

                                        />
                                    </div>
                                </div><button className="widgets__btn btn btn_blue btn_wide">View Asset</button>
                            </div>
                            <div className="widgets__item">
                                <div className="widgets__head">
                                    <div className="widgets__company">
                                        <div className="widgets__logo"><img src="img/logo/steem.png" alt /></div>
                                        <div className="widgets__details">
                                            <div className="widgets__category">Steem</div>
                                            <div className="widgets__info">STM</div>
                                        </div>
                                    </div>
                                    <div className="widgets__time">24H</div>
                                </div>
                                <div className="widgets__body">
                                    <div className="widgets__line">
                                        <div className="widgets__price">0.24548USD</div>
                                        <div className="status positive">+2.73%</div>
                                    </div>
                                    <div className="widgets__chart">
                                        <Chart
                                            options={sparkOptions1}
                                            series={series}
                                            type="line"
                                            height={100}

                                        />
                                    </div>
                                </div><button className="widgets__btn btn btn_blue btn_wide">View Asset</button>
                            </div>
                            <div className="widgets__item">
                                <div className="widgets__head">
                                    <div className="widgets__company">
                                        <div className="widgets__logo"><img src="img/logo/tokenbox.png" alt /></div>
                                        <div className="widgets__details">
                                            <div className="widgets__category">Tokenbox</div>
                                            <div className="widgets__info">TBX</div>
                                        </div>
                                    </div>
                                    <div className="widgets__time">24H</div>
                                </div>
                                <div className="widgets__body">
                                    <div className="widgets__line">
                                        <div className="widgets__price">0.00546 USD</div>
                                        <div className="status positive">+2.73%</div>
                                    </div>
                                    <div className="widgets__chart">
                                        <Chart
                                            options={sparkOptions1}
                                            series={series}
                                            type="line"
                                            height={100}

                                        />
                                    </div>
                                </div><button className="widgets__btn btn btn_blue btn_wide">View Asset</button>
                            </div>
                            <div className="widgets__item">
                                <div className="widgets__head">
                                    <div className="widgets__company">
                                        <div className="widgets__logo"><img src="img/logo/ripple.png" alt /></div>
                                        <div className="widgets__details">
                                            <div className="widgets__category">Ripple</div>
                                            <div className="widgets__info">XRP</div>
                                        </div>
                                    </div>
                                    <div className="widgets__time">24H</div>
                                </div>
                                <div className="widgets__body">
                                    <div className="widgets__line">
                                        <div className="widgets__price">0.50869 USD</div>
                                        <div className="status negative">-2.73%</div>
                                    </div>
                                    <div className="widgets__chart">
                                        <Chart
                                            options={sparkOptions1}
                                            series={series}
                                            type="line"
                                            height={100}

                                        />
                                    </div>
                                </div><button className="widgets__btn btn btn_blue btn_wide">View Asset</button>
                            </div>
                            <div className="widgets__item">
                                <div className="widgets__head">
                                    <div className="widgets__company">
                                        <div className="widgets__logo"><img src="img/logo/ubex.png" alt /></div>
                                        <div className="widgets__details">
                                            <div className="widgets__category">Ubex</div>
                                            <div className="widgets__info">UBW</div>
                                        </div>
                                    </div>
                                    <div className="widgets__time">24H</div>
                                </div>
                                <div className="widgets__body">
                                    <div className="widgets__line">
                                        <div className="widgets__price">0.10858 USD</div>
                                        <div className="status positive">+2.73%</div>
                                    </div>
                                    <div className="widgets__chart">
                                        <Chart
                                            options={sparkOptions1}
                                            series={series}
                                            type="line"
                                            height={100}

                                        />
                                    </div>
                                </div><button className="widgets__btn btn btn_blue btn_wide">View Asset</button>
                            </div>
                        </div>
                        <div className="widgets__btns"><button className="widgets__btn btn btn_blue">Discover more assets</button></div>
                    </div>
                </div>
                <div className="page__col">
                    <div className="card card_widget text-center"><button className="card__next"><svg className="icon icon-arrow-up-right">
                        <use xlinkHref="img/sprite.svg#icon-arrow-up-right" />
                    </svg></button>
                        <div className="card__chart card__chart_total-balance">
                            {/* <Chart
                                options={options}
                                series={totalSeries}
                                height={100}
                                type="radialBar"
                                width={280}

                            /> */}
                             <div id="chart-total-balance"></div>
                        </div>
                        <div className="card__inner">
                            <div className="card__title h6">Total Balance</div>
                            <div className="card__currency">BTC</div>
                            <div className="card__number h4">0.16231428</div>
                            <div className="card__price h6 color-green">3,700.96 USD</div><button className="card__btn btn btn_blue">View Wallet</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__head">
                            <div className="card__title h6">Latest Activities</div>
                            <div className="dropdown"><button className="dropdown__head"><svg className="icon icon-dots">
                                <use xlinkHref="img/sprite.svg#icon-dots" />
                            </svg></button>
                                <div className="dropdown__body"><a className="dropdown__link selected" href="#">Latest Activities</a><a className="dropdown__link" href="#">New Activities</a><a className="dropdown__link" href="#">Old Activities</a><a className="dropdown__link" href="#">All Activities</a></div>
                            </div>
                        </div>
                        <div className="card__list">
                            <div className="card__item">
                                <div className="card__icon bg-green"><img src="img/money-bag.svg" alt /></div>
                                <div className="card__details">
                                    <div className="card__line">
                                        <div className="card__category">Withdrew USDT</div>
                                        <div className="card__date">Nov 22, 2020</div>
                                    </div>
                                    <div className="card__status color-green">Complete</div>
                                    <div className="card__price">969.06654889 USDT</div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card__icon bg-orange"><img src="img/currency-exchange.svg" alt /></div>
                                <div className="card__details">
                                    <div className="card__line">
                                        <div className="card__category">Exchange XRP</div>
                                        <div className="card__date">Nov 22, 2020</div>
                                    </div>
                                    <div className="card__status color-green">Complete</div>
                                    <div className="card__price">2405.15865955 XRP</div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card__icon bg-purple"><img src="img/money.svg" alt /></div>
                                <div className="card__details">
                                    <div className="card__line">
                                        <div className="card__category">Deposit BTC</div>
                                        <div className="card__date">Nov 22, 2020</div>
                                    </div>
                                    <div className="card__status color-green">Complete</div>
                                    <div className="card__price">0.206654889 BTC</div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card__icon bg-green"><img src="img/money-bag.svg" alt /></div>
                                <div className="card__details">
                                    <div className="card__line">
                                        <div className="card__category">Withdrew USDT</div>
                                        <div className="card__date">Nov 22, 2020</div>
                                    </div>
                                    <div className="card__status color-green">Complete</div>
                                    <div className="card__price">969.06654889 USDT</div>
                                </div>
                            </div>
                            <div className="card__item">
                                <div className="card__icon bg-orange"><img src="img/currency-exchange.svg" alt /></div>
                                <div className="card__details">
                                    <div className="card__line">
                                        <div className="card__category">Exchange XRP</div>
                                        <div className="card__date">Nov 22, 2020</div>
                                    </div>
                                    <div className="card__status color-green">Complete</div>
                                    <div className="card__price">2405.15865955 XRP</div>
                                </div>
                            </div>
                        </div><a className="card__view" href="#">
                            <div className="card__arrow"><svg className="icon icon-arrow-right">
                                <use xlinkHref="img/sprite.svg#icon-arrow-right" />
                            </svg></div>View all activity
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
