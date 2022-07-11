import Head from 'next/head';
import { Box, Container, Grid} from '@mui/material';
import { contacts_data } from '../__mocks__/contacts_data';
import { Contacts_Toolbar } from '../components/contacts/contacts_toolbar';
import { Contacts_Card } from '../components/contacts/contacts_card';
import { DashboardLayout } from '../components/dashboard-layout';

const Contacts = () => (
  <>
    <Head>
      <title>instruction</title>
    </Head>
    <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth={false}>
        <Contacts_Toolbar />
        <Grid sx={{ pt: 3, justifyContent: 'center' }} container spacing={3}>
          {contacts_data.map((block) => (
            <Grid item key={block.id} lg={4} md={6} xs={12}><Contacts_Card block={block} /></Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

Contacts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Contacts;
