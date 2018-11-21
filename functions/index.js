const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const {cors} = require('./middleware')

admin.initializeApp()
const db = admin.firestore()
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

const app = express()
app.use(cors)

const cryptocurrencyList = (req, res) => {
  db.
    collection('cryptocurrency')
    .get()
    .then(querySnapshot => {
      let cryptocurrencies = []
      querySnapshot.forEach(doc => cryptocurrencies.push(doc.data()))
      return res.send(cryptocurrencies)
    })
    .catch(error => res.send(error))
}

app.get('/', cryptocurrencyList)


exports.api = functions.https.onRequest(app)