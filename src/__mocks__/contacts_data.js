import { v4 as uuid } from 'uuid';

export const contacts_data = [
   {
      id: uuid(),
      description: 'дежурный номер приемной комиссии.',
      link: 'tel:+996 700 327 420',
      link_title: '+996 (700) 327 420',
      media: '/static/images/products/whatsapp.png',
      title: 'WHATSAPP',
   },
   {
      id: uuid(),
      description: 'Прослеживайти актуальное и новости ВУЗа.',
      link: 'https://www.facebook.com/iksu.kg',
      link_title: 'https://www.facebook.com/iksu.kg',
      media: '/static/images/products/facebook.jpg',
      title: 'FACEBOOK',
   },
   {
      id: uuid(),
      description: 'Свежая подборка событий и людей теперь в вузовском инстаграм канале.',
      link: 'https://www.instagram.com/priemisu/',
      link_title: '@priemisu',
      media: '/static/images/products/instagram.jpeg',
      title: 'INSTAGRAM',
   },
   {
      id: uuid(),
      description: 'Просмотр нормативных актов вуза и нпа Министерства образования КР и многое полезное.',
      link: 'http://www.iksu.kg',
      link_title: 'www.iksu.kg',
      media: '/static/images/products/website.png',
      title: 'WEBSITE',
   },
   {
      id: uuid(),
      description: 'Отпраляйте письма с интересующими вопросами на почту ИГУ и. К. Тыныстанова',
      link: 'mailto:interiksu@gmail.com',
      link_title: 'interiksu@gmail.com',
      media: '/static/images/products/gmail.png',
      title: 'GMAIL',
   },
   {
      id: uuid(),
      description: 'факс ИГУ и. К. Тыныстанова для ведения международных и внутренних сообщений с юр. лицами',
      link: '+996 (3922) 5 04 98',
      link_title: '+996 (3922) 5 04 98',
      media: '/static/images/products/fax.png',
      title: 'FAX',
   },
];
