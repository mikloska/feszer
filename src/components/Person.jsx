import React, { useState, useContext } from 'react'
import { LanguageContext } from '../../App';
import {Typography, Grid, Paper, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactCardFlip from 'react-card-flip';
import { AboutMembersText } from '../Text/AboutMembersText';

const useStyles = makeStyles((theme) => ({
  Box: {
    width:355,
    height:360
  },
  Media:{
    maxWidth:'100%'
  },
  Heading:{
    padding:5
  },
  More:{
    float:'right',
    cursor:'pointer',
    color: theme.palette.primary.main,
    fontSize:30
  }

}));

const People = ({musicianFirstName, musicianLastName}) => {
  const {language} = useContext(LanguageContext)
  const classes = useStyles();
  const cleanName =  musicianFirstName.replace('ó','o').replace('ö','o').replace('á','a')
  const lowerCaseFirstName = musicianFirstName.charAt(0).toLowerCase() + musicianFirstName.slice(1)
  const EnglishHeading = `${musicianFirstName} ${musicianLastName} - ${AboutMembersText[`${cleanName}`].EnglishInstruments}`
  const magyarCim = `${musicianLastName} ${musicianFirstName} - ${AboutMembersText[`${cleanName}`].magyarHangszerek}`
  const [flipped, setFlipped] = useState(false)
  const handleFlip = (e) => {
    e.preventDefault();
    (flipped===false)?setFlipped(true):setFlipped(false)
  }
  return(
    <Grid item s={12} m={3}>
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <Paper elevation={3}>
        <Box className={classes.Box}>
        <img src={`https://feszer-band.s3.amazonaws.com/${cleanName}.jpg`} className={classes.Media}/> 
        </Box>
        <Typography className={classes.Heading}>
          {language === 'MAGYAR' ?  EnglishHeading : magyarCim}
          <ExpandMoreIcon id={lowerCaseFirstName} className={classes.More} value={lowerCaseFirstName} onClick={handleFlip}/>
        </Typography>
      </Paper>

      <Paper elevation={3}>
        <Box className={classes.Box}>
          <Typography style={{padding:5}}>{
          language === 'MAGYAR' ? AboutMembersText[`${cleanName}`].English : AboutMembersText[`${cleanName}`].magyar
            }
          </Typography>
        </Box>
        <Typography className={classes.Heading}>
          {language === 'MAGYAR' ? EnglishHeading : magyarCim}
          <ExpandMoreIcon id={lowerCaseFirstName} className={classes.More} onClick={handleFlip}/>
        </Typography>
      </Paper>
      </ReactCardFlip>
    </Grid>
  )
}

export default People