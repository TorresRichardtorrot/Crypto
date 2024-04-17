import { useState } from "react"
import { getValuesCryopto } from "../../../../api/request"
import MainInput from "../../../smallComponents/Input"
import SelectCrypto from "../../../smallComponents/SelectCrypto"

function Calculator() {
  const [quote,setQuote] =useState(null)
  const [disabled,setDisabel] = useState(false)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        setDisabel(true)
        const amount = e.target.amount.value
        const crypto = e.target.crypto.value
        try {
          const res = await getValuesCryopto(amount,crypto)
          setQuote(res.data)
        } catch (error) {
          console.log(error)
        }finally{
          setDisabel(false)
        }
    }

  return (
    <section className="section__calculator">
            <h2>Calculadora</h2>
             
             <form onSubmit={handleSubmit}>
                
                <section className="form__section">
                    <MainInput 
                    type={"number"}
                    name={"amount"}
                    required={true}
                    label={"Introdusca un monto"}
                    />

                    <SelectCrypto/>
                    
                </section>
                
                <div className="btn__content">
                  <button disabled={disabled} className="main__button">Calcular</button>
                </div>
             </form>
             <hr />

             {
              quote &&
              <section className="quote__content">
              <h4>En Binance coin son: <span>{quote.BNB}</span></h4>
              <h4>En Bitcoin son: <span>{quote.BTC}</span></h4>
              <h4>En Ethereum  son: <span>{quote.ETH}</span></h4>
              <h4>En Tether (USDT) son: <span>{quote.USDT}</span></h4>
              <h4>En Euros son:<span>{quote.EUR}</span></h4>
              <h4>En Bolivares son: <span>{quote.VES}</span></h4>
              </section>
             }

    </section>
  )
}

export default Calculator
