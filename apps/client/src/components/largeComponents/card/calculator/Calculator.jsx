import { getValuesCryopto } from "../../../../api/request"
import MainInput from "../../../smallComponents/Input"
import SelectCrypto from "../../../smallComponents/SelectCrypto"

function Calculator() {

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const amount = e.target.amount.value
        const crypto = e.target.crypto.value
        console.log(amount,crypto)
        const res = await getValuesCryopto(amount,crypto)
        console.log(res)
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
                
                <button>Calcular</button>
             </form>

    </section>
  )
}

export default Calculator
