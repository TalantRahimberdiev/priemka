import { useState } from 'react';
import {Card, CardMedia, CardActions, CardContent, Typography, Button } from '@mui/material';


export const Fotogallery_list = ({ fotogallery_data }) => {

  const [current, setCurrent] = useState(0)
  const next=()=>{
    if(current < fotogallery_data.length-1)
      setCurrent(c=>c+1)
    else setCurrent(0)
  }

  const prev=()=>{
    if(current > 0)
      setCurrent(c=>c-1)
    else setCurrent(fotogallery_data.length-1)
  }

  return (
    <Card>
      <CardMedia component="img" image={fotogallery_data[current].media} />
      <CardContent>
        <Typography gutterBottom variant="p" component="div" align='center'>
          {fotogallery_data[current].description}
        </Typography>
        <Typography gutterBottom variant="p" component="div" align='center'>
          {`${fotogallery_data[current].id}/${fotogallery_data.length}`}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around" }}>
        <Button variant='outlined' color='success' onClick={() => prev()}>пред.</Button>
        <Button variant='outlined' color='success' onClick={() => next()}>след.</Button>
      </CardActions>
    </Card>
  );
};
