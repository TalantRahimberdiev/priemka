import { Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';

export const College = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            Колледж
          </Typography>
        </Grid>
        <Grid item>
          <img style={{ width: '100px', height: 'auto', borderRadius: '57px' }} src='/static/images/avatars/college.jpg' />
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          оффициальный сайт колледжа:<a href=''>http://college.iksu.kg</a><br></br>
          Адрес: 722200, Кыргыз Республикасы,  Каракол ш., Абдрахманов көч 130
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

