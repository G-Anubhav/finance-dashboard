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


// import React, { useContext, useState } from 'react';
// import { FinanceContext } from '../context/FinanceContext';
// import {
//   Box,
//   Typography,
//   LinearProgress,
//   Paper,
//   Stack,
//   TextField,
//   InputAdornment,
//   IconButton,
// } from '@mui/material';
// import { motion, AnimatePresence } from 'framer-motion';
// import EditIcon from '@mui/icons-material/Edit';
// import SaveIcon from '@mui/icons-material/Save';
// import CancelIcon from '@mui/icons-material/Close';

// // Example icon mapping per category
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import HomeIcon from '@mui/icons-material/Home';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

// const categoryIcons = {
//   Food: <FastfoodIcon color="action" />,
//   Rent: <HomeIcon color="action" />,
//   Transport: <DirectionsCarIcon color="action" />,
//   Shopping: <ShoppingCartIcon color="action" />,
//   Healthcare: <LocalHospitalIcon color="action" />,
//   // Add more as needed
// };

// const BudgetingAssistant = () => {
//   const { budgets, setBudgets } = useContext(FinanceContext);

//   // Track which category is being edited and the new budget value
//   const [editCategory, setEditCategory] = useState(null);
//   const [newLimit, setNewLimit] = useState('');

//   const startEditing = (category, currentLimit) => {
//     setEditCategory(category);
//     setNewLimit(currentLimit.toString());
//   };

//   const cancelEditing = () => {
//     setEditCategory(null);
//     setNewLimit('');
//   };

//   const saveBudget = () => {
//     if (!isNaN(parseFloat(newLimit)) && parseFloat(newLimit) >= 0) {
//       const updatedBudgets = budgets.map((b) =>
//         b.category === editCategory ? { ...b, limit: parseFloat(newLimit) } : b
//       );
//       setBudgets(updatedBudgets);
//       setEditCategory(null);
//       setNewLimit('');
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
//         <Typography variant="h6" gutterBottom fontWeight="bold">
//           Budgeting Assistant
//         </Typography>
//         <Stack spacing={3}>
//           {budgets.map(({ category, spent, limit }) => {
//             const percentage = Math.min((spent / limit) * 100, 100);
//             const isOverBudget = spent > limit;

//             return (
//               <Box key={category}>
//                 <Box
//                   sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     mb: 1,
//                   }}
//                 >
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                     {categoryIcons[category] || <ShoppingCartIcon color="action" />}
//                     <Typography variant="subtitle1" fontWeight="medium">
//                       {category}
//                     </Typography>
//                   </Box>

//                   {editCategory === category ? (
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <TextField
//                         size="small"
//                         variant="outlined"
//                         type="number"
//                         inputProps={{ min: 0, step: 1 }}
//                         value={newLimit}
//                         onChange={(e) => setNewLimit(e.target.value)}
//                         sx={{ width: 100 }}
//                         InputProps={{
//                           startAdornment: <InputAdornment position="start">$</InputAdornment>,
//                         }}
//                       />
//                       <IconButton color="primary" onClick={saveBudget} aria-label="Save">
//                         <SaveIcon />
//                       </IconButton>
//                       <IconButton color="error" onClick={cancelEditing} aria-label="Cancel">
//                         <CancelIcon />
//                       </IconButton>
//                     </Box>
//                   ) : (
//                     <Typography
//                       sx={{ cursor: 'pointer' }}
//                       color="text.secondary"
//                       onClick={() => startEditing(category, limit)}
//                       title="Click to edit budget"
//                     >
//                       Budget: ${limit.toFixed(0)} <EditIcon sx={{ fontSize: 16, ml: 0.5 }} />
//                     </Typography>
//                   )
//                   }
//                 </Box>

//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Box sx={{ flexGrow: 1, mr: 2 }}>
//                     <LinearProgress
//                       variant="determinate"
//                       value={percentage}
//                       sx={{
//                         height: 12,
//                         borderRadius: 6,
//                         backgroundColor: 'grey.300',
//                         '& .MuiLinearProgress-bar': {
//                           backgroundColor: isOverBudget ? 'error.main' : 'primary.main',
//                           transition: 'width 0.3s ease-in-out',
//                         },
//                       }}
//                     />
//                   </Box>
//                   <Typography
//                     variant="body2"
//                     sx={{ minWidth: 50, color: isOverBudget ? 'error.main' : 'text.primary' }}
//                   >
//                     {percentage.toFixed(0)}%
//                   </Typography>
//                 </Box>
//                 <Typography variant="caption" color="text.secondary">
//                   ${spent} spent of ${limit.toFixed(0)} budget
//                 </Typography>
//               </Box>
//             );
//           })}
//         </Stack>
//       </Paper>
//     </motion.div>
//   );
// };

// export default BudgetingAssistant;
