import * as React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

const images = ['https://feszer-band.s3.amazonaws.com/Darrida-Easter-4-9-22.jpg', 'https://feszer-band.s3.amazonaws.com/Garfield-dec-2021.jpg']
const carouselImages = images.map((image, index) => {
  return (
    <div key={`${image}-${index}`} style = {{width: '10%', height: '10%'}}>
      <img src={image}/>
    </div>
  )
})
const galleryImages = []
images.forEach((image, index) => {
  galleryImages.push(  {
    original: image,
    thumbnail: image,
  })
})

const GalleryScreen = () => {
  return (
    <ImageList cols={1}> 
    {/* sx={{ width: '80vw', height: '70vh' }} rowHeight={500} */}
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://feszer-band.s3.amazonaws.com/Darrida-Easter-4-9-22.jpg',
    title: 'Easter',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://feszer-band.s3.amazonaws.com/Garfield-dec-2021.jpg',
    title: 'Passaic',
  },
];

export default GalleryScreen