import React from 'react';
import ReactDOM from 'react-dom';
import UserInfoPage from './components/UserInfoPage';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageLink = 'https://i1.wp.com/christopherscottedwards.com/wp-content/uploads/2017/08/Generic-Profile.jpg';
const subscriptions = [{
    id: 1,
    title: 'Under the Skin with Russell Brand',
    episode: '#052 Freedom and Tyranny (with Jordan Peterson)',
    image: imageLink,
    onUserPage: true
  },
  {
    id: 2,
    title: 'From Our Own Correspondent',
    episode: 'The Taste of Climate Change',
    image: imageLink,
    onUserPage: true
  },
  {
    id: 3,
    title: 'Coffee House Shots',
    episode: 'How the Treasury really is "the enemy of Brexit"',
    image: imageLink,
    onUserPage: true
  },
  {
    id: 4,
    title: 'No Such Thing as a Fish',
    episode: 'Episode 222: No Such Thing As A Warmongering Pigeon',
    image: imageLink,
    onUserPage: true
  },
  {
    id: 5,
    title: 'Stuff You Missed in History Class',
    episode: 'SYMHC Classics: Mansa Musa and the City of Gold',
    image: imageLink,
    onUserPage: true
  }
];


ReactDOM.render(
  <UserInfoPage data={subscriptions} image={imageLink} />,
  document.getElementById("app")
);
