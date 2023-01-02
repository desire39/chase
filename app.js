const express = require('express');

const app = express();
const PORT = 4000;

const users = [
    {
        "transactionID":1029,
        "username":"john hat",
        "accountNumber":51728713983,
        "amount":"$3921",
        "transactionType":"Savings",
        "accountBalance":"$4000"


    },
    
        {
            "transactionID":2022,   
            "username": "jane mary" ,  
            "accountNumber":9889298473,
            "amount":"$300",
            "transactionType":"Current",
            "accountBalance":"$1000"
    
    
        },
        
            {
                "transactionID":1345,
                "username":"mick luck",
                "accountNumber":74677328891,
                "amount":"$292",
                "transactionType":"savings",
                "accountBalance":"$40"
        
        
            },
            
                {
                    "transactionID":1029,
                    "username":"daisy mercy",
                    "accountNumber":51728713983,
                    "amount":"$321",
                    "transactionType":"Current",
                    "accountBalance":"$100"
            
            
                }

];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('debit user account!')
});


app.post('/transaction/acct/debit', async (req, res) => {
    try {
        if (users.some(user => user.transactionID === req.body.accountNumber)) {
            const err = new Error('invalid user accountNumber')
            err.status = 400;
            throw err;
        }
        const user = req.body;
      
        users.push(user);

        res.status(201).json({
          status: 'success',
          message: 'successfully debited an account!',
          data: {
            user: {
                accountNumber : user.accountNumber,
            },
          },
        });
      } catch (err) {
        res.status(err.status).json({
            status: 'fail',
            message: err.message,
          });
      }
});


app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
