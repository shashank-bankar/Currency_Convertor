import React, { Component ,useState , useEffect } from 'react'

function useCurrencyInfo(currency){
    const [data , setData] = useState({})
    useEffect(()=>{
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/{date}/{endpoint}
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1/{endpoint}`)
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data) ;
    } , [currency])

    return data;
}

export default useCurrencyInfo ;