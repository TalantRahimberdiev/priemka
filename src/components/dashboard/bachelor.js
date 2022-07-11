import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

export const Bachelor = (props) => (
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
            Бюджет/Контракт
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            Бакалавриат
          </Typography>
        </Grid>
        <Grid item>
          <img style={{ width: '100px', height: 'auto', borderRadius: '57px' }} src='/static/images/avatars/bachelor.png' />
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          23 специальности
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Адрес:г.Каракол, ул. Тыныстанова 26
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
