import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';

const links = [

  {
    id: 1,
    text: 'all investor',
    path: 'all-investor',
    icon: <MdQueryStats />,
  },
  {
    id: 2,
    text: 'add investor',
    path: 'add-investor',
    icon: <FaWpforms />,
  },
  {
    id: 3,
    text: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
];

export default links;