import { useEffect,useState } from "react"
import { getCryptoRequest } from "../api/request"
import CardCoin from "../components/largeComponents/card/CardCoin"
import Loader from "../components/smallComponents/loader"
import Calculator from "../components/largeComponents/card/calculator/Calculator"
function Landing() {
    const [cryptos,setCrypto] = useState([])
    const [divisas,setDivisas] = useState()

    useEffect(()=>{
        const getCrypto = async()=>{
            const res  = await getCryptoRequest()
            console.log(res)
            setCrypto(res.data.cryptos)
            setDivisas(res.data.coins)
        }
        getCrypto()

    },[])

  return (
    <main className="main">
        <section className="main__cards">
            {cryptos.length > 0 ? cryptos.map((crypto) =>{
                return <CardCoin key={crypto.CoinInfo.Id} crypto={crypto}/>
            }):<Loader/>}
        </section>
        <div className="section__divisa">
            {divisas &&
             <>
                <div>
                    <h3>1 USD = {divisas.VES} Bs</h3>
                </div>
                <hr />
                <div>
                    <h3>1 USD = {divisas.EUR} EUR</h3>
                </div>
            </>
             }
        </div>

        <Calculator/>
        
    </main>
  )
}

export default Landing
