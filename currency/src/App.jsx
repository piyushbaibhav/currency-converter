import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import react from'./assets/react.png';

// import DarkMode from './components/Darkmode';

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

  const [showImage, setShowImage] = useState(false);
  const toggleImage = () => {
    setShowImage(!showImage); // Toggle the visibility of the image
  };

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

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    




    //---------------------------------------------------------------------------
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://t3.ftcdn.net/jpg/04/34/58/54/360_F_434585463_zpdtTpTEbqQFfsp6RVEW6IIxEM9dHf86.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount= {amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=> setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount)=> setAmount(amount)}
                            // selectCurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                           onClick={swap} 
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount= {convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>{
                              setTo(currency)
                            }}
                            selectCurrency={to}
                            amountDisabled
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>

        <div className=' gap-5'>
          <button onClick={toggleImage} className='bg-blue-600 hover:bg-blue-700 text-white  py-2 px-4 rounded'>Thankyou</button>

          {showImage && <img className=' m-3 w-96 h-auto' src={react} alt="React" />}
        </div>
         
    </div>
);
}

export default App
