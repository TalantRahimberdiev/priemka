import { Box, Card, CardContent, Typography } from '@mui/material';

export const Instruction_Toolbar = () => (
  <Box>
    <Typography sx={{ m: 1 }} variant="h4">Инструкция для абитуриентов </Typography>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Typography sx={{ m: 1 }} variant="h6">пошаговые сведения по подаче документов для зачисления</Typography>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
