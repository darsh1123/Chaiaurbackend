const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
// hum line 1 ki jagah import express from "express" bhi likh sakte hain
const app = express()
// yaha par app ek bahut important variable hain mtlb hum app se bahut sarai cheez kar sakte hain
// const port = 3000
// computer mein bahut saare ports hote hain jaise USB , type C inke alawa virtual ports bi hote hain computer mein 65000(65535) ke around hote hain  kaafi free ports bhi hote hain jinhe hum use kar sake hain hum listen bhi inhi ports par karate hain toh hamara jaha mann kare hum waha listen kar sakte hain

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// uppar maie get request chalai hain aur isne kaha hain ki (app) agar (aap) ke paas koi bhi request aati hain (jaie abhi / hain (home)) toh hum callback denge  aur response mein hum send kar denge hello world .. 
// callback - . [(req,res) => {}]  callback pe mere paas do parameter hain request and reponse  
app.listen(process.env.PORT, () => { // yha bhi callback function
  console.log(`Example app listening on port ${process.env.PORT}`)
})
// maine uppar process.env.port isla likha hain kyunki mein PORT ko env file se la raha hoon
// listen likhne ke baad hamne ek server bana diya


// jb hum production deployy mein jaate hain toh jaise ki yeh meri port 4000 par chal rahi hain mere mein free hain pr ho akta hain woh doosre computer mein free na ho toh vaha woh 3000 par chalayenge toh production deploy men thoda sa hi difference hota hain..

// hamari ismein security problems bhi ho sakti hain jaise hamare database ka password ya bahut kuch agar mein iss code ko publicly karta hoon toh  isse bachne ke lia mein use karoonga .env ka pehle install npm i dotenv
