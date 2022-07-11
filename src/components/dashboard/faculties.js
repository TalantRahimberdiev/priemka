
import { v4 as uuid } from 'uuid';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';

const faculties_data = [
  {
    id: uuid(),
    ref: 'Ф. Филологии',
    telephone: '+996 3922 5-25-97',
    status: '4'
  },
  {
    id: uuid(),
    ref: ' Педагогический Ф.',
    telephone: '+996 3922 5-26-92',
    status: '4'
  },
  {
    id: uuid(),
    ref: 'Физико-математический и естественно-технический Ф.',
    telephone: '+996 3922 5-27-62',
    status: '5'
  },
  {
    id: uuid(),
    ref: 'Ф. экономики, туризма, истории',
    telephone: '+996 3922 5-26-88',
    status: '4'
  }
];

export const Faculties = () => (

  <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
    {
      faculties_data.map(block => (

        <Grid xs={12} sm={12} md={6} lg={6} key={block.id} item>
          <Card>
            <CardContent>
              <Box sx={{ p: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                <Typography color="textSecondary" gutterBottom variant="overline">Бюджет/Контракт</Typography>
                <Typography color="textPrimary" variant="p">{block.ref}</Typography>
              </Box>
              <Box sx={{ pt: 1, display: 'flex', alignItems: 'center' }}>
                <Typography color="error" sx={{ mr: 1 }} variant="body2">кафедр: {block.status}</Typography>
                <Typography color="textSecondary" variant="caption">Телефон: {block.telephone}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))
    }
  </Grid>
);
