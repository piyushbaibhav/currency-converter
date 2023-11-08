import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  // const [amount, setAmount] = useState(0)
  // const [selectCurrency, setSelectCurrency] = useState('usd')
  // const [currencyOptions, setCurrencyOptions] = useState(['usd', 'eur', 'gbp'])
  // const [amountDisabled, setAmountDisabled] = useState(false)
  // const [currencyDisable, setCurrencyDisable] = useState(false)

  // const onAmountChange = (amount) => {
  //   setAmount(amount)
  // }

  // const onCurrencyChange = (selectCurrency) => {
  //   setSelectCurrency(selectCurrency)
  // }

  // return (
  //   <div className="App">
  //     <InputBox
  //       label="Amount"
  //       amount={amount}
  //       onAmountChange={onAmountChange}
  //       onCurrencyChange={onCurrencyChange}
  //       currencyOptions={currencyOptions}
  //       selectCurrency={selectCurrency}
  //       amountDisabled={amountDisabled}
  //       currencyDisable={currencyDisable}
  //     />
  //   </div>
  // )

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] =useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }


  return (
    <>
      <h1 className='text-3xl bg-orange-500'>cuurency convert</h1>
    </>
  )
}

export default App
