import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, IconButton, Box, Typography } from '@mui/material';
import { Dashboard, Receipt, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidebar({ open, toggleSidebar }) {
  const location = useLocation();

  const drawerContent = (
    <Box sx={{ width: drawerWidth, height: '100vh', bgcolor: 'background.paper' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        <Typography variant="h6">Menu</Typography>
        <IconButton onClick={toggleSidebar} sx={{ display: { sm: 'none' } }}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <List>
        <ListItemButton
          component={Link}
          to="/"
          selected={location.pathname === '/'}
          onClick={toggleSidebar}
        >
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton
          component={Link}
          to="/transactions"
          selected={location.pathname === '/transactions'}
          onClick={toggleSidebar}
        >
          <ListItemIcon>
            <Receipt />
          </ListItemIcon>
          <ListItemText primary="Transactions" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      {!open && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          sx={{ 
            display: { xs: 'block', sm: 'none' }, 
            position: 'fixed', 
            top: 8, 
            left: 8, 
            zIndex: 1300 
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleSidebar}
        sx={{
          display: { xs: 'block', sm: 'none' },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        ModalProps={{ keepMounted: true }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
