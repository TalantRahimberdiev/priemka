import { Card, CardContent, Grid, Typography } from '@mui/material';

export const Technikum = (props) => (
  <Card {...props}>
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
            Техникум
          </Typography>
        </Grid>
        <Grid item>
          <img style={{ width: '100px', height: 'auto', borderRadius: '57px' }} src='/static/images/avatars/technikum.png' />
        </Grid>
        <Grid item>
          <Typography
            variant="body2" color='error'
            sx={{
              mr: 1,
            }}
          >
            • Ветеринария; • Ихтиология и рыбоводство; • Агрономия.
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
