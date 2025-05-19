import React, { useContext } from 'react';
import { Box, Typography, Avatar, LinearProgress } from '@mui/material';
import { FinanceContext } from '../context/FinanceContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { user } = useContext(FinanceContext);

  const progress = Math.min((user.monthlySavings / user.monthlyGoal) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar src={user.avatar} alt={user.name} sx={{ width: 56, height: 56, mr: 2 }} />
        <Box>
          <Typography variant="h5" fontWeight="bold">Welcome back, {user.name}!</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Monthly Savings Goal Progress
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: 10, borderRadius: 5, mt: 0.5 }}
            color={progress < 100 ? 'primary' : 'secondary'}
          />
          <Typography variant="caption" color="text.secondary">
            ${user.monthlySavings} saved of ${user.monthlyGoal} goal
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
}
