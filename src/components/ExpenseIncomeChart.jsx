import { Box, Typography, useTheme } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';

const monthlyData = [
  { month: 'Jan', income: 6000, expenses: 4500 },
  { month: 'Feb', income: 6200, expenses: 4800 },
  { month: 'Mar', income: 5900, expenses: 4700 },
  { month: 'Apr', income: 6300, expenses: 4900 },
  { month: 'May', income: 6000, expenses: 4800 },
  { month: 'Jun', income: 6400, expenses: 4600 },
  { month: 'Jul', income: 6700, expenses: 5000 },
];

export default function ExpenseIncomeChart() {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Expense vs Income
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthlyData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke={theme.palette.success.main} strokeWidth={2} />
            <Line type="monotone" dataKey="expenses" stroke={theme.palette.error.main} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </motion.div>
  );
}
