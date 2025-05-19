import React, { createContext, useState, useMemo } from 'react';
import { user, financialOverview, transactions, categories } from '../data/mockData';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [timeframe, setTimeframe] = useState('monthly'); // monthly | quarterly | ytd
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const [budgets, setBudgets] = useState([
    { category: 'Food', spent: 200, limit: 500 },
    { category: 'Rent', spent: 800, limit: 1000 },
    { category: 'Entertainment', spent: 150, limit: 200 },
    { category: 'Utilities', spent: 100, limit: 300 },
  ]);

  const filterTransactions = (searchText = '', typeFilter = 'all') => {
    let filtered = transactions;
    if (typeFilter !== 'all') {
      filtered = filtered.filter(t => t.type.toLowerCase() === typeFilter.toLowerCase());
    }
    if (searchText) {
      filtered = filtered.filter(t =>
        t.description.toLowerCase().includes(searchText.toLowerCase()) ||
        t.category.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setFilteredTransactions(filtered);
  };

  const value = useMemo(() => ({
    user,
    financialOverview,
    timeframe,
    setTimeframe,
    transactions,
    filteredTransactions,
    filterTransactions,
    categories,
    budgets,
    setBudgets,
  }), [timeframe, filteredTransactions, budgets]);

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
};
