import React, { useEffect } from 'react'
import { ImageList, ImageListItem } from '@mui/material';
import { useDispatch } from 'react-redux'

import { useGetGalleryQuery } from '../../redux/slices/gallerySlice';
import { changeLoading } from '../../redux/slices/loadingSlice';

// const carouselImages = images.map((image, index) => {
//   return (
//     <div key={`${image}-${index}`} style = {{width: '10%', height: '10%'}}>
//       <img src={image}/>
//     </div>
//   )
// })
// const galleryImages = []
// images.forEach((image, index) => {
//   galleryImages.push(  {
//     original: image,
//     thumbnail: image,
//   })
// })

const GalleryScreen = () => {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetGalleryQuery()
  const itemData = []
  if(data && data.length > 0) {
    data.forEach(image => {
      itemData.push(
        {
          img: image.url,
          title: image.id,
          rows: 2,
          cols: 2,
        }
      )
    })
  }

  useEffect(() => {
    if(isLoading){
      dispatch(changeLoading({"loading":true}))
    } else {
      dispatch(changeLoading({"loading":false}))
    }
  }, [isLoading])

  return (
    <ImageList cols={1}> 
    {/* sx={{ width: '80vw', height: '70vh' }} rowHeight={500} */}
      {itemData.length > 0 &&
        itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))
      }
    </ImageList>
  );
}


export default GalleryScreen