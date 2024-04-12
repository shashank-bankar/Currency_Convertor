import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState("")
  const[from , setFrom] = useState("inr")
  const[to , setTo] = useState("usd")
  const[convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from) //won't crash as by default usd is there

  // now we'll have to give user the keys from data(inr, usd ,rbl) as option 
  const options = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount) ; 
    setAmount(convertedAmount) ; 
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-center bg-contain bg-no-repeat'
   style={{
    backgroundImage :`url('https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
    // backgroundPositionY:"calc(50% , -500px)",
   }}>

   <div className='w-full'>
    <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      <form
        onSubmit={(e)=>{
          e.preventDefault() ;
          convert() ;
        }}
      >
        <div className='w-full mb-1 text-lg text-slate-950'>
          <InputBox 
            label="from"
            amount = {amount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            onAmountChange={(amount)=>setAmount(Number(amount))}
            selectCurrency={from} 
            
          />
        </div>
        <div className='relative w-full h-0.5'>
          <button 
          type='button'
          className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2
          border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
          onClick={swap}>
            swap
          </button>
        </div>
        <div className='w-fulll mt-1 mb-4'>
        <InputBox 
          label = "To"
          amount = {convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setTo(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          selectCurrency={to}
          amountDisable  //by default aise pass krna mtlb true pass krna
        ></InputBox>
        </div>
        <button type='submit'
        className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
   </div>
   </div>
  );
}

export default App
