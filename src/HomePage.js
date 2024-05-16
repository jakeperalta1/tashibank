import React from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const HomePage = ({ accountNumber, balance, transactions }) => {
  return (
    <div>
      <h2>Welcome to TashiBank App</h2>
      <p><strong>Account Number:</strong> {accountNumber}</p>
      <p><strong>Balance:</strong> ${balance}</p>

      <h3>Transactions:</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Date</th>
            <th>Transaction Type</th>
            <th>Amount</th>
            <th>Account Number</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{transaction.timestamp}</td>
              <td>
                {transaction.type === 'deposit' && 'Deposit'}
                {transaction.type === 'withdraw' && 'Withdraw'}
                {transaction.type === 'etransfer' && 'Etransfer'}
              </td>
              <td>${transaction.amount}</td>
              <td>{transaction.accountNumber}</td> {/* Display Transaction Account Number */}
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        {/* Link to Deposit page */}
        <Link to="/deposit" className="btn btn-info mr-50">
          Deposit
        </Link>

        {/* Link to Withdraw page */}
        <Link to="/withdraw" className="btn btn-danger">
          Withdraw
        </Link>
        <Link to="/etransfer" className="btn btn-danger">
          Etransfer
        </Link>
        <Link to="/signin" className="btn btn-danger">
          Signin
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
