import { useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

const button_data = ['Бакалавриат', 'Магистратура', 'Колледж', 'Техникум']
export const Speciality_list = ({ specialization_data }) => {

  const [current, setCurrent] = useState(0)

  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }} >
        {
          button_data.map((item, index) => {
            return <Button key={index} color='success' onClick={() => setCurrent(index)}>{item}</Button>
          })
        }
      </Box>
      <Card>
        <CardContent sx={{ marginTop: '1vh' }}>
          <Typography sx={{ color: 'mediumSeaGreen' }} gutterBottom variant="h6" component="div" align='center'>
            {
              specialization_data[current].title
            }
          </Typography>
          {
            current === 0 || current === 1 ? specialization_data[current].napravleniya.map((item, index) => {
              return (
                <Box key={index}>
                  <Typography sx={{ fontStyle: 'monospace' }} gutterBottom variant="h6" component="div">{item.name}</Typography>
                  <ul>
                    {
                      item.description.map((element, index) => {
                        return <li key={index}>{element}</li>
                      })
                    }
                  </ul>
                </Box>
              )
            }) : (
              specialization_data[current].napravleniya.split(';').map((element, index) => {
                return <Typography key={index} gutterBottom variant="h6" component="div">{element}</Typography>
              })
            )
          }
        </CardContent>
      </Card>
    </Box>
  );
};
