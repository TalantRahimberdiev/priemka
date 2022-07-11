import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { International_list } from '../components/international/international_list';
import { International_toolbar } from '../components/international/international_toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { international_data } from '../__mocks__/international_data';

const International = () => (
  <>
    <Head>
      <title>
        Voenmeh
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
        <International_toolbar />
        <Box sx={{ mt: 3 }}>
          <International_list international_data={international_data} />
        </Box>
      </Container>
    </Box>
  </>
);
International.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default International;
