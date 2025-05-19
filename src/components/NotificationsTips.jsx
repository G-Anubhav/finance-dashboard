import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Notifications, Lightbulb } from '@mui/icons-material';
import { motion } from 'framer-motion';

const notifications = [
  'Your electricity bill is due in 3 days.',
  'New savings plan available.',
  'Reminder: Update your budget categories.',
];

const tips = [
  'Try to reduce food expenses by 10% this month.',
  'Consider automating your savings.',
  'Review your subscriptions for unused services.',
];

export default function NotificationsTips() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ display: 'flex', mt:4, gap: 3, flexWrap: 'wrap' }}>
        <Paper sx={{ flex: 1, p: 2, minWidth: 280 }}>
          <Typography variant="h6" gutterBottom>
            <Notifications sx={{ verticalAlign: 'middle', mr: 1 }} />
            Notifications
          </Typography>
          <List dense>
            {notifications.map((note, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <Notifications />
                </ListItemIcon>
                <ListItemText primary={note} />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper sx={{ flex: 1, p: 2, minWidth: 280 }}>
          <Typography variant="h6" gutterBottom>
            <Lightbulb sx={{ verticalAlign: 'middle', mr: 1 }} />
            Tips & Suggestions
          </Typography>
          <List dense>
            {tips.map((tip, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <Lightbulb />
                </ListItemIcon>
                <ListItemText primary={tip} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </motion.div>
  );
}
