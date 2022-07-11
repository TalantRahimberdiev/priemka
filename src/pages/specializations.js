import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { Speciality_list} from '../components/speciality/speciality_list';
import { Speciality_toolbar } from '../components/speciality/speciality_toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { specialization_data } from '../__mocks__/specialization_data';

const Speciality = () => (
  <>
    <Head>
      <title>
        Specializations
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
        <Speciality_toolbar />
        <Box sx={{ mt: 3 }}>
          <Speciality_list specialization_data={specialization_data} />
        </Box>
      </Container>
    </Box>
  </>
);
Speciality.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Speciality;
