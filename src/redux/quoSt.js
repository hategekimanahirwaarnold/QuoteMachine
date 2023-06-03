import { createSlice } from '@reduxjs/toolkit'
// import { useEffect } from 'react'

 
console.clear();
let quoData = [{
    "text": "Time Explains",
    "color": "rgb(57, 198, 245)",
    "author": "Hirwa Arnlod"
 }];
 fetch("http://localhost:4000/quotes")
 .then(res => {
   if (!res.ok) {
       throw Error("could not fetch the data for that resource")
   }
   return res.json();
 }).then (data => {
   quoData = data;
 }).catch(err => {
   console.log("error is", err.message);
 });

export const quoterSlice = createSlice({
    name: 'quoter',
    initialState: {
         quotes: quoData,
         int: 0
    },
    reducers: {
        handleClick: (state) => {
            state.int = Math.floor(Math.random() * (quoData.length));
            state.quotes = quoData;
        },
    },
});


export const { handleClick } = quoterSlice.actions

export default quoterSlice.reducer