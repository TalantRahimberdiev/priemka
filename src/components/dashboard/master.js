import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

export const Master = () => (
  <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Контракт
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            Магистратура
          </Typography>
        </Grid>
        <Grid item>
        <img style={{width:'100px',height:'auto',borderRadius:'57px'}} src='/static/images/avatars/master.jpg'/> 
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <Typography
          variant="body2" color='error'
          sx={{
            mr: 1,
          }}
        >
          5 направлений
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Адрес: ул. Абдрахманова, 103    II корпус ИГУ, каб.№ 213
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
