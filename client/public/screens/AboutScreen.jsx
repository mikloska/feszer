import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Typography, Grid} from '@mui/material';

import { useGetAboutMembersQuery } from '../../redux/slices/aboutMembersSlice';
import Person from '../components/Person'
import { changeLoading } from '../../redux/slices/loadingSlice';
import { ErrorModal } from '../components/ErrorModal';


const AboutScreen = () =>{
  const dispatch = useDispatch()
  const language = useSelector((state) => state.language.value)
  const { data, error, isLoading } = useGetAboutMembersQuery()

  useEffect(() => {
    if(isLoading){
      dispatch(changeLoading({"loading":true}))
    } else {
      dispatch(changeLoading({"loading":false}))
    }
  }, [isLoading])

  return (
    <div>
      {error && 
        <ErrorModal error={error.data.message}/>
      }
      <Typography variant ='h3'>{language === 'MAGYAR' ? 'About Us' : 'Rólunk'}</Typography>
      <Grid container style={{marginTop:0}} spacing={6} justifyContent='center' alignItems='center'>
        {data && data.map((current, index) => (
          <Person 
            musicianFirstName={current.first_name} 
            musicianLastName={current.last_name} 
            englishIntruments={current.english_instruments}
            hungarianInstruments={current.hungarian_instruments}
            englishBio={current.english_bio}
            hungarianBio={current.hungarian_bio}
            key={`${current.first_name}-${current.last_name}`}
            id={current.id}
          />
        ))}
      </Grid>
    </div>
  )
}

export default AboutScreen
