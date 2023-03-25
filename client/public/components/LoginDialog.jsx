import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import { login, logout } from '../../redux/slices/loginSlice';
import { loginApi } from '../../redux/slices/loginSlice';

const LoginDialog = () => {
  const [checkLogin] = loginApi.useCheckLoginMutation()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)
  const loggedIn = useSelector((state) => state.loggedIn.value) 
  const error = useSelector((state) => state.loggedIn.error)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setLoginError(false);
    setOpen(false);
  };

  const loginUser = async () => {
    try {
      const result = await checkLogin({"userName" : userName, "password":password})
      if (result.data === 'successfully logged in !') {
        dispatch(login({"loggedIn" : result.data}))
      } else {
        setLoginError(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(loggedIn) {
      setLoginError(false)
      setOpen(false)
    } 
    if(error) {
      setLoginError(true)
    }
  }, [loggedIn, error])

  return (
    <div>
      
        {loggedIn ? 
          <IconButton style={{marginBottom:40}} onClick={() => dispatch(logout())}>
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
          loginError &&
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
          <Button onClick={loginUser}>Login</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDialog