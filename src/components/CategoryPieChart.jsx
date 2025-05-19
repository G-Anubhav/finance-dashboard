// /components/CategoryPieChart.jsx
import React, { useContext, useState } from 'react';
import { Box, Typography, Legend, useTheme } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { FinanceContext } from '../context/FinanceContext';
import { motion } from 'framer-motion';
import { Sector } from 'recharts';


const spendingData = [
  { name: 'Food', value: 500 },
  { name: 'Utilities', value: 300 },
  { name: 'Entertainment', value: 150 },
  { name: 'Health', value: 100 },
];

export default function CategoryPieChart() {
  const { categories } = useContext(FinanceContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const theme = useTheme();

  const onPieEnter = (_, index) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Category-Wise Spending
        </Typography>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={spendingData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill={theme.palette.primary.main}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              activeIndex={activeIndex}
              activeShape={(props) => (
                <g>
                  <text x={props.cx} y={props.cy} dy={8} textAnchor="middle" fill={theme.palette.text.primary} fontWeight="bold">
                    {props.name}
                  </text>
                  <Sector
                    {...props}
                    outerRadius={props.outerRadius + 10}
                    fill={props.fill}
                  />
                </g>
              )}
            >
              {spendingData.map((entry, index) => {
                const cat = categories.find(c => c.name === entry.name);
                return (
                  <Cell key={`cell-${index}`} fill={cat ? cat.color : theme.palette.primary.main} />
                );
              })}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </motion.div>
  );
}
