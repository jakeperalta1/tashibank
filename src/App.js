import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import TransactionForm from './TransactionForm';
import Login from './Login'


  


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [accountNumber, setAccountNumber] = useState('345367488');
  const [balance, setBalance] = useState(2500);
  const [transactions, setTransactions] = useState([]);

  const handleTransaction = ({ amount, type }) => {
    const transaction = {
      type,
      accountNumber:Number(accountNumber),
      amount: Number(amount),
      timestamp: new Date().toLocaleString()
    };


    // Update balance based on transaction type
    if (type === 'deposit') {
      setBalance(prevBalance => prevBalance + Number(amount));
    } else if (type === 'withdraw') {
      setBalance(prevBalance => prevBalance - Number(amount));
    } else if (type === 'etransfer') {
      setBalance(prevBalance => prevBalance - Number(amount));
    }

    // Update transactions array
    setTransactions(prevTransactions => [...prevTransactions, transaction]);
  };

  return (
    <Router>
      <div>
        <Navbar balance={balance} />
        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={<HomePage accountNumber={accountNumber} balance={balance} transactions={transactions} />}
            />
            <Route path="/deposit" element={<TransactionForm type="deposit" onSubmit={handleTransaction} />} />
            <Route path="/withdraw" element={<TransactionForm type="withdraw" onSubmit={handleTransaction} />} />
            <Route path="/Etransfer" element={<TransactionForm type="etransfer" onSubmit={handleTransaction}/>} />
              <Route path='/signin' element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
