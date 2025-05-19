export const user = {
  name: 'Vanshika Singh',
  avatar: 'https://i.pravatar.cc/150?img=32',
  monthlyGoal: 1500,
  monthlySavings: 1200,
};

export const financialOverview = {
  monthly: {
    balance: 12000,
    income: 6000,
    expenses: 4800,
    savingsRatio: 20,
  },
  quarterly: {
    balance: 36000,
    income: 18000,
    expenses: 14400,
    savingsRatio: 20,
  },
  ytd: {
    balance: 144000,
    income: 72000,
    expenses: 57600,
    savingsRatio: 20,
  },
};

export const transactions = [
  {
    id: 1,
    date: '2025-05-10',
    description: 'Salary',
    type: 'Credit',
    category: 'Income',
    amount: 6000,
  },
  {
    id: 2,
    date: '2025-05-12',
    description: 'Groceries',
    type: 'Debit',
    category: 'Food',
    amount: 150,
  },
  {
    id: 3,
    date: '2025-05-14',
    description: 'Electricity Bill',
    type: 'Debit',
    category: 'Utilities',
    amount: 90,
  },
  {
    id: 4,
    date: '2025-05-15',
    description: 'Freelance Project',
    type: 'Credit',
    category: 'Income',
    amount: 2000,
  },
  {
    id: 5,
    date: '2025-05-16',
    description: 'Dinner',
    type: 'Debit',
    category: 'Food',
    amount: 75,
  },
  {
    id: 6,
    date: '2025-05-17',
    description: 'Internet Bill',
    type: 'Debit',
    category: 'Utilities',
    amount: 60,
  },
  {
    id: 7,
    date: '2025-05-18',
    description: 'Movie Night',
    type: 'Debit',
    category: 'Entertainment',
    amount: 45,
  },
  {
    id: 8,
    date: '2025-05-19',
    description: 'Coffee',
    type: 'Debit',
    category: 'Food',
    amount: 25,
  },
  {
    id: 9,
    date: '2025-05-20',
    description: 'Gym Membership',
    type: 'Debit',
    category: 'Health',
    amount: 50,
  },
];

export const categories = [
  { name: 'Food', color: '#f44336' },
  { name: 'Utilities', color: '#2196f3' },
  { name: 'Entertainment', color: '#ff9800' },
  { name: 'Health', color: '#4caf50' },
  { name: 'Income', color: '#4caf50' },
];
