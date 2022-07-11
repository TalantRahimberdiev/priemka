import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Bachelor } from '../components/dashboard/bachelor';
import { Faculties } from '../components/dashboard/faculties';
import { Distant} from '../components/dashboard/distant';
import { College } from '../components/dashboard/college';
import { Master } from '../components/dashboard/master';
import { Technikum } from '../components/dashboard/technikum';
import { International } from '../components/dashboard/international';
import { DashboardLayout } from '../components/dashboard-layout';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard
      </title>
    </Head>
    <Box component="main" sx={{flexGrow: 1, py: 2}}>
      <Container maxWidth={false}>
        <Grid container spacing={1}>
          <Grid item lg={4} sm={6} xl={3} xs={12} ><Bachelor /></Grid>
          <Grid item xl={3} lg={4} sm={6} xs={12}><Master /></Grid>
          <Grid item xl={3} lg={4} sm={6} xs={12}><College /></Grid>
          <Grid item xl={3} lg={4} sm={6} xs={12}><Technikum sx={{ height: '100%' }} /></Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}><International sx={{ height: '100%' }} /></Grid>
          <Grid item lg={4} md={6} xl={3}xs={12}><Distant sx={{ height: '100%' }} /></Grid>
          <Grid item lg={12} md={12} xl={9} xs={12}><Faculties /></Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
