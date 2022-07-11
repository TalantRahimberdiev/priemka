import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { Fotogallery_list } from '../components/fotogallery/fotogallery_list';
import { Fotogallery_toolbar } from '../components/fotogallery/fotogallery_toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { fotogallery_data } from '../__mocks__/fotogallery_data';

const Fotogallery = () => (
  <>
    <Head>
      <title>
        ФотоГаллерея
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Fotogallery_toolbar />
        <Box sx={{ mt: 3 }}>
          <Fotogallery_list fotogallery_data={fotogallery_data} />
        </Box>
      </Container>
    </Box>
  </>
);
Fotogallery.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Fotogallery;
