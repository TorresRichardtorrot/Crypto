/* eslint-disable react/prop-types */
const route = "https://www.cryptocompare.com"
function CardCoin({ crypto }) {
    return (
        <article className="card__coin">
            <div className="card__coin--img">
                <img src={`${route}${crypto.CoinInfo.ImageUrl}`} alt={`imagen de ${crypto.CoinInfo.FullName}`} />
            </div>
            <div className="card__coin--info" 
                title="Precio actual de la moneda">
                <h3> ${crypto.RAW.PRICE.toFixed(2)}</h3>

                <p className="card__coin--info--high"
                    title="Precio más alto en el último día."
                >
                    Alta: ${crypto.RAW.HIGHDAY.toFixed(2)}
                </p>

                <p className="card__coin--info--low" 
                    title="Precio más bajo en el último día.">
                    Baja: ${crypto.RAW.LOWDAY.toFixed(2)}
                </p>

                <p className="card__coin--info--open" 
                    title="Precio de apertura en el último día.">
                    Abrio en: ${crypto.RAW.OPENDAY.toFixed(2)}
                </p>
                <a href={`${route}${crypto.CoinInfo.Url}`}>Vista General</a>
            </div>
        </article>
    )
}

export default CardCoin
