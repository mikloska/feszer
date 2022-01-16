import React, { useState, useContext } from 'react';
import { LanguageContext } from '../../App';
import { Avatar, Button, Card, TextField,  Box, Paper, Typography, Container, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import EmailIcon from '@material-ui/icons/Email';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  card: {
    paddingLeft:20,
    paddingRight:20
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    background:'linear-gradient(120deg, c91c24, bc0813)',
    margin: theme.spacing(3, 0, 2),
  },

}));

const ContactScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState(false);
  const {language} = useContext(LanguageContext)
  const classes = useStyles();

  const sendEmail =(e) =>{
    e.preventDefault();

    emailjs.sendForm('service_8ps9zk3', 'template_fq58auq', e.target, 'user_ldPmYCjlMyKyhLKQgQhpE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('')
      setEmail('')
      setMessage('')
      setAlert(true)
  }


  return (
    <div>
    <Container component="main" maxWidth="xs" >
      <Paper pt={0} elevation={7} >
        <Card className={classes.card}>
          <Box p={6} >
            <div className={classes.paper} >
              <Avatar className={classes.avatar}>
                <EmailIcon/>
              </Avatar>
              <Typography component="h1" variant="h5">
                {language === 'MAGYAR' ? 'Contact Us' : 'Kapcsolat'}
              </Typography>
              <form className={classes.form} noValidate onSubmit={sendEmail}>
                <TextField variant="outlined" margin="normal" required fullWidth id="name" label={language === 'MAGYAR' ? 'Name' : 'Név'}
                  name="user_name" value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <TextField variant="outlined" margin="normal" required fullWidth name="user_email" label={language === 'MAGYAR' ? 'Email Address' : 'Email Cím'} type="email"
                  id="email" value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <List>
                  {alert===true && <Alert severity="success">Email sent!</Alert>}
                </List>
		            <TextField style={{marginTop:20}} fullWidth multiline aria-label="empty textarea" value={message} 
                  onChange={(e) => {setMessage(e.target.value);}}
                placeholder={language === 'MAGYAR' ? 'Message' : 'Üzenet'} name="message"/>

                <Button value="send" type="submit" fullWidth variant="contained" color="primary" className={classes.submit} > 
                  {language === 'MAGYAR' ? 'Send' : 'Küldés'}
                </Button>

              </form>

            </div>
          </Box>
        </Card>
      </Paper>
    </Container>
    </div>
  );
}

export default ContactScreen