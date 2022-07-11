
import { v4 as uuid } from 'uuid';
import { Card, CardHeader, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const products = [
  {
    id: uuid(),
    name: 'бгту Военмех им. Д.Ф. Устинова ',
    imageUrl: '/static/images/products/voenmeh.jpg',
  },
  {
    id: uuid(),
    name: 'Akaki Tsereteli State University',
    imageUrl: '/static/images/products/product_2.png',
  },
  {
    id: uuid(),
    name: 'ARISTOTLE UNIVERSITY OF THESSALONIKI',
    imageUrl: '/static/images/products/product_3.png',
  },
  {
    id: uuid(),
    name: 'University of South-Eastern Norway',
    imageUrl: '/static/images/products/product_4.png',
  },
  {
    id: uuid(),
    name: 'Бакинский Евразийский университет (Азербайджан)',
    imageUrl: '/static/images/products/product_5.png',
  }
];

export const Distant = (props) => (
  <Card {...props}>
    <CardHeader
      title="Партнеры ИГУ"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 55,
                width: 'auto'
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated`}
          />
        </ListItem>
      ))}
    </List>
    <Divider />
  </Card>
);
