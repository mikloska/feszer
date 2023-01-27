import React from 'react'
import TextField from '@mui/material/TextField';

export const TextInput = ({textId, textLabel, setFunction, requiredField=true}) => {
  return (
    <TextField
      autoFocus
      required={requiredField}
      margin="dense"
      id={textId}
      label={textLabel}
      fullWidth
      variant="standard"
      onChange={e=>setFunction(e.target.value)}
    />
  )
}