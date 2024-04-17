
function SelectCrypto() {
    
    return (
        <div className='box__input'>
            <select name="crypto" id="crypto">
                <option value="">selecionar ...</option>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
                <option value="USDT">Tether - USDT</option>
                <option value="BNB">Binance Coin</option>          
            </select>
            <label htmlFor="crypto">Elija una moneda</label>
        </div>
    )
}

export default SelectCrypto
