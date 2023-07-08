import React from 'react';
import "./Coin.css";

const Coin = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
    return (
        <div>
            <div className='cryptoCoin'>
                <img src={image} alt={'{name}'} className='coinLogo' />
                <div className='coinNameWrap'>
                    <h1 className='coinName'>{name}</h1>
                    <p className='coinsymbol'>{symbol}</p>
                </div>
                <p className='coinPrice'>${price.toLocaleString()}</p>
                <p className='coinMarketcap'>
                    Market Cap: ${marketcap.toLocaleString()}
                </p>
                <p className='coinVolume'>
                    Volume (24H): ${volume.toLocaleString()}
                </p>
                {priceChange < 0 ? (
                    <div className='priceContainerDOWN'>
                        <i className='glyphicon glyphicon-chevron-down'></i>
                        <p className='priceChange'>{priceChange ? priceChange.toFixed(2) + '%' : 'N/A'}</p>
                    </div>
                ) : (
                    <div className='priceContainerUP'>
                        <i className='glyphicon glyphicon-chevron-up'></i>
                        <p className='priceChange'>{priceChange ? priceChange.toFixed(2) + '%' : 'N/A'}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Coin