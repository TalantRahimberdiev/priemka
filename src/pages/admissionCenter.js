import Head from 'next/head';
import { Box, Card, CardHeader, Container, Grid, Typography } from '@mui/material';
import { Admission_profile } from '../components/admission/admission_profile';
import { Admission_profile_details } from '../components/admission/admission_profile_details';
import { DashboardLayout } from '../components/dashboard-layout';

const AdmisionCenter = () => (
  <>
    <Head>
      <title>
        Приемная комиссия
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Приемная комиссия ИГУ им. К. Тыныстанова
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Admission_profile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <Admission_profile_details />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

AdmisionCenter.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default AdmisionCenter;
