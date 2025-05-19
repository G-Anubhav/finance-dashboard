import React, { useContext } from 'react';
import { Box, Typography, LinearProgress, Card, CardContent, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FinanceContext } from '../context/FinanceContext';

const getColor = (usage) => {
  if (usage < 50) return 'success';
  if (usage < 80) return 'warning';
  return 'error';
};

export default function BudgetingAssistant() {
  const { budgets } = useContext(FinanceContext);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card sx={{ mt: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Monthly Budget by Category
          </Typography>
          {budgets.map((budget, index) => {
            const usage = Math.min((budget.spent / budget.limit) * 100, 100);
            return (
              <Box key={index} sx={{ mb: 2 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="body1" fontWeight="bold">
                    {budget.category}
                  </Typography>
                  <Typography variant="body2" fontWeight="bold" color={getColor(usage)}>
                    {usage.toFixed(0)}%
                  </Typography>
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={usage}
                  color={getColor(usage)}
                  sx={{ height: 10, borderRadius: 5, mt: 0.5 }}
                />
                <Typography variant="caption" color="text.secondary">
                  ${budget.spent} spent of ${budget.limit} limit
                </Typography>
              </Box>
            );
          })}
        </CardContent>
      </Card>
    </motion.div>
  );
}