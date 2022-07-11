import { useState } from 'react';
import { Box, Card, CardHeader, CardContent, Typography, Button, Divider } from '@mui/material';


export const International_list = ({ international_data }) => {

  const [current, setCurrent] = useState(0)

  return (
    <Box>
      <Card>
        <CardHeader title='С 2017 года между БГТУ «ВОЕНМЕХ» им. Д.Ф. Устинова и КГТУ им. И. Раззакова (г. Бишкек, Кыргызская Республика) реализуется проект подготовки бакалавров и магистров, имеющих хорошую подготовку по русскому языку, как за счет средств федерального бюджета РФ, так и на основании договора (контракта) с оплатой полной стоимости обучения.' /> <Divider />
        <CardContent>
          <Typography gutterBottom variant="p" component="div" align='center'>
            По всем вопросам: <br></br>
            Телефон: +7 911 711-03-63
            WhatsApp, Telegram: +7 952 217-90-66
            E-mail: kireev_ol@voenmeh.ru
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }} >
            <Button variant='outlined' color='success' onClick={() => setCurrent(0)}>Бакалавриат</Button>
            <Button variant='outlined' color='success' onClick={() => setCurrent(1)}>Магистратура</Button>
          </Box>
          <Typography gutterBottom variant="h4" component="div" align='center'>
            {
              international_data[current].title
            }
          </Typography>
          {
            international_data[current].napravleniya.split(',').map((item, index) => {
              return (
                <Box key={index}>
                  <Typography sx={{ fontStyle: 'monospace' }} gutterBottom variant="h6" component="div">{item}</Typography>
                </Box>
              )
            })
          }
        </CardContent>
      </Card>
    </Box>
  );
};
