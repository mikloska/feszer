import React, {useState, useContext} from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import { IconButton } from '@mui/material';

import { AppContext } from '../../App';

const LoginDialog = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const {loggedIn, setLoggedIn} = useContext(AppContext)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const login = () => {
    if(userName === 'csiklos' && password === 'banda'){
      setLoggedIn(true)
      setError(false)
      setOpen(false)
    } else {
      setError(true)
    }
  }

  const logout = () => {
      setLoggedIn(true)

  }

  return (
    <div>
      
        {loggedIn ? 
          <IconButton style={{marginBottom:40}} onClick={() => setLoggedIn(false)}>
            <VpnKeyOffIcon fontSize='small'/>
          </IconButton>
           :
          <IconButton style={{marginBottom:40}} onClick={handleClickOpen}>
            <VpnKeyIcon fontSize='small'/>
          </IconButton>
        }
        
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Admin Login</DialogTitle>
        {
          error &&
          <Alert severity="error">Username or password is incorrect</Alert>
        }
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="username"
            fullWidth
            variant="standard"
            onChange={e=>setUserName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={e=>setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={login}>Login</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDialog