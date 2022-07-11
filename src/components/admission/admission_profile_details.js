
import { Box, Card, CardContent, CardHeader, Divider, Grid, } from '@mui/material';

export const Admission_profile_details = () => {
  return (
    <Card>
      <CardHeader
        subheader="информация для осуществления связи"
        title="Контакты"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '2.3vw', height: 'auto', marginRight: '7px' }} src="/static/images/products/whatsapp.png" />
              <a href="tel:+996 (708) 58 40 13">+996 (708) 58 40 13</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '2.3vw', height: 'auto', marginRight: '7px' }} src="/static/images/products/facebook.jpg" />
              <a href='https://www.facebook.com/iksu.kg'>https://www.facebook.com/iksu.kg</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '3vw', height: 'auto', marginRight: '7px' }} src="/static/images/products/instagram.jpeg" />
              <a href='https://www.instagram.com/priemisu/'>@priemisu</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '3vw', height: 'auto', marginRight: '7px' }} src="/static/images/products/telefon.jpeg" />
              <a href="tel:+996 (3922) 5 27 37">+996 (3922) 5 27 37</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '2.3vw', height: 'auto', marginRight: '7px' }} src="/static/images/products/website.png" />
              <a href='www.iksu.kg'>www.iksu.kg</a>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display={'flex'} alignItems='center'>
              <img style={{ width: '2.3vw', height: 'auto', marginRight: '7px' }} src="/static/images/products/gmail.png" />
              <a href='mailto:interiksu@gmail.com'>interiksu@gmail.com</a>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
