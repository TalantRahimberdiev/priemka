import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent,Typography } from '@mui/material';

export const Instruction_Card = ({ block, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="block"
          src={block.media}
          variant="square"
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {block.title}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {block.description}
      </Typography>
      <a style={{ display: 'flex', justifyContent: 'center', marginTop: "5px" }} href={block.link}>{block.link_title}</a>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
  </Card>
);

Instruction_Card.propTypes = {
  block: PropTypes.object.isRequired
};
