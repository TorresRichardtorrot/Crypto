/* eslint-disable react/prop-types */

function MainInput({type,name,placeholder,label,required,value}) {
  return (
    <div className='box__input'>
            <input 
            type={type} 
            name={name} 
            id={name} 
            defaultValue={value}
            autoComplete='true' 
            placeholder={placeholder} 
            required={required}
            />
            <label htmlFor={name}>{label}</label>
        </div>
  )
}

export default  MainInput
