const express = require('express');

const accountRoutes = express.Router();
const fs = require('fs');

const dataPath = './Details/useraccount.json';

const saveAccountData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};

const getAccountData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

accountRoutes.get('/account', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

accountRoutes.post('/transaction/account/debit', (req, res) => {
  const existAccounts = getAccountData();
  const newAccountId = Math.floor(1 + Math.random() * 9);
  existAccounts[newAccountId] = req.body;
  console.log(existAccounts);

  saveAccountData(existAccounts);
  res.send({ success: true, msg: 'debit account successfully' });
});

accountRoutes.get('/account/list', (req, res) => {
  const accounts = getAccountData();
  res.send(accounts);
});

module.exports = accountRoutes;
