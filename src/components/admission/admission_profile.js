import { Avatar, Box, Card, CardContent, Divider, Typography } from '@mui/material';

const user = {
  avatar: '/static/images/avatars/director.jpg',
  city: 'Каракол,',
  country: 'Кыргызстан.',
  jobTitle: 'должность: директор центра дистанционного образования и повышения квалификации;',
  name: 'Исабеков Кубатбек Абдыкеримович',
  level: 'степень: доцент, кандидат физико-математических наук;'
};

export const Admission_profile = () => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 100,
            mb: 2,
            width: 100
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
          align='center'
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
          align='center'
        >
          {user.jobTitle}
          <br></br>
          {user.level}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {`${user.city} ${user.country}`}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
  </Card>
);
