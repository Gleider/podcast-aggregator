import React from 'react';
import ReactDOM from 'react-dom';
import Subscriptions from './components/Subscriptions';
import UserInfo from './components/UserInfo';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageLink = 'https://i1.wp.com/christopherscottedwards.com/wp-content/uploads/2017/08/Generic-Profile.jpg';
const subscriptions = [{
    id: 1,
    title: 'Under the Skin with Russell Brand',
    image: imageLink,
    onUserPage: true
  },
  {
    id: 2,
    title: 'From Our Own Correspondent',
    image: imageLink,
    onUserPage: true
  },
  {
    id: 3,
    title: 'Coffee House Shots',
    image: imageLink,
    onUserPage: true
  },
  {
    id: 4,
    title: 'No Such Thing as a Fish',
    image: imageLink,
    onUserPage: true
  },
  {
    id: 5,
    title: 'Stuff You Missed in History Class',
    image: imageLink,
    onUserPage: true
  }
];


ReactDOM.render(
  <Subscriptions onUserPage={true} subscriptions={subscriptions} />,
  // <UserInfo image={imageLink} />,
  document.getElementById("app")
);
