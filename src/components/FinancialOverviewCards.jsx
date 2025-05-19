import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import { Box, Card, CardContent, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { motion } from 'framer-motion';

const cardDataKeys = ['balance', 'income', 'expenses', 'savingsRatio'];
const cardLabels = ['Total Account Balance', 'Monthly Income', 'Monthly Expenses', 'Savings Ratio'];
const cardPrefixes = ['$', '$', '$', '']; // for savingsRatio %

export default function FinancialOverviewCards() {
  const { financialOverview, timeframe, setTimeframe } = useContext(FinanceContext);
  const data = financialOverview[timeframe];

  const handleTimeframeChange = (event, newTimeframe) => {
    if (newTimeframe) setTimeframe(newTimeframe);
  };

  return (
    <Box sx={{ mb: 4, p: { xs: 1, sm: 2 } }}>
      <ToggleButtonGroup
        color="primary"
        value={timeframe}
        exclusive
        onChange={handleTimeframeChange}
        sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}
      >
        <ToggleButton value="monthly">Monthly</ToggleButton>
        <ToggleButton value="quarterly">Quarterly</ToggleButton>
        <ToggleButton value="ytd">Year-to-Date</ToggleButton>
      </ToggleButtonGroup>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          width: '100%',
        }}
      >
        {cardDataKeys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card 
              elevation={3}
              sx={{ 
                minWidth: 150, 
                textAlign: 'center', 
                borderRadius: 2,
                p: { xs: 1, sm: 2 }, 
                bgcolor: 'background.paper', 
              }}
            >
              <CardContent>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  gutterBottom
                  sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
                >
                  {cardLabels[i]}
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={key === 'savingsRatio' && data[key] < 20 ? 'error.main' : 'text.primary'}
                  sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
                >
                  {cardPrefixes[i]}
                  {key === 'savingsRatio' ? `${data[key]}%` : data[key].toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
