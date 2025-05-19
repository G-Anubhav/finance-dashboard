// /components/TransactionsTable.jsx
import React, { useContext, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
} from '@mui/material';
import { FinanceContext } from '../context/FinanceContext';
import { motion } from 'framer-motion';

const transactionTypes = ['all', 'credit', 'debit'];

export default function TransactionsTable() {
  const { filteredTransactions, filterTransactions } = useContext(FinanceContext);
  const [searchText, setSearchText] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  useEffect(() => {
    filterTransactions(searchText, typeFilter);
  }, [searchText, typeFilter]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{mt: 5, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Recent Transactions
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{ flex: 1 }}
          />
          <TextField
            select
            label="Type"
            size="small"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            sx={{ width: 140 }}
          >
            {transactionTypes.map(type => (
              <MenuItem key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </MenuItem>
            ))}
          </TextField>
        </Box>

        <TableContainer component={Paper} sx={{ maxHeight: 360 }}>
          <Table stickyHeader size="small" aria-label="transactions table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Category</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions.map((tx) => (
                <TableRow
                  key={tx.id}
                  sx={{
                    bgcolor: tx.type.toLowerCase() === 'credit' ? 'success.light' : 'error.light',
                    color: 'text.primary',
                  }}
                >
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>{tx.description}</TableCell>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell>{tx.category}</TableCell>
                  <TableCell align="right">${tx.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </motion.div>
  );
}
