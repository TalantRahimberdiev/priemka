import { v4 as uuid } from 'uuid';

export const instruction_data = [
  {
    id: uuid(),
    description: 'Изучите информацию о поступлении и выберите специальность.',
    link: 'https://drive.google.com/file/d/1Ouq1QlqZjDF2PO9ixY1yw5DPnjuLSh8P/view',
    link_title: 'нормативные акты ИГУ',
    media: '/static/images/products/one.jpg',
    title: 'Сведения',
  },
  {
    id: uuid(),
    description: 'Придите в приемную комиссию по адресу: Кыргызская Республика,  г. Каракол, ул.Абдрахманова, 103.',
    link: 'https://www.google.com/maps/place/%D0%98%D0%93%D0%A3+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+%E2%84%961/@42.4906942,78.4001186,17z/data=!3m1!4b1!4m5!3m4!1s0x38865bec8b872479:0xe09308c0a8d475b6!8m2!3d42.4906942!4d78.4001186',
    link_title: 'расположение ВУЗа',
    media: '/static/images/products/two.jpg',
    title: 'Подать документы',
  },
  {
    id: uuid(),
    description: 'Выберите дату и время сдачи вступительного испытания',
    link: 'https://drive.google.com/file/d/1kLgb84ZOf9jHwdSQ5gLy8n2dN-HGFBTh/view',
    link_title: 'расписание вступительных испытаний.',
    media: '/static/images/products/three.jpg',
    title: 'Тестирование',
  },
  {
    id: uuid(),
    description: 'В назначенный день и время сдаете Вступительное испытание, проводимое организацией в виде тестирования.',
    media: '/static/images/products/four.jpg',
    title: 'Сдача вступительных испытаний',
  },
  {
    id: uuid(),
    description: 'Следите за информацией о ходе Приемной кампании и выходе приказа о зачислении.',
    media: '/static/images/products/five.jpg',
    title: 'Отслеживание информации',
  },
];
