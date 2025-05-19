// src/components/CalendarTracker.jsx
import React, { useContext, useState } from 'react';
import { Box, Typography, Card, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, CardContent } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import { FinanceContext } from '../context/FinanceContext';

export default function CalendarTracker() {
  const { transactions } = useContext(FinanceContext);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [open, setOpen] = useState(false);
  const [dayTransactions, setDayTransactions] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const filteredTransactions = transactions.filter((tx) => dayjs(tx.date).isSame(date, 'day'));
    setDayTransactions(filteredTransactions);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card sx={{ mt: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Monthly Spending Tracker
          </Typography>
          <Box>
            <DateCalendar 
              value={selectedDate}
              onChange={(newValue) => handleDateChange(newValue)}
              sx={{ border: '1px solid #e0e0e0', borderRadius: 2, p: 1 }}
            />
          </Box>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Transactions on {selectedDate.format('MMMM DD, YYYY')}</DialogTitle>
        <DialogContent>
          {dayTransactions.length ? (
            <List>
              {dayTransactions.map((tx, index) => (
                <ListItem key={index} divider>
                  <ListItemText
                    primary={`${tx.description} - $${tx.amount.toLocaleString()}`}
                    secondary={`${tx.type} - ${tx.category}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>No transactions for this date.</Typography>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
