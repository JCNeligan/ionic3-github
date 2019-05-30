import { User } from '../models/user.interface';

const userList:User[] = [
  {
    name: 'Jack',
    company: 'Biltmore',
    location: 'Asheville, NC',
    bio: 'Software developer',
    avatar_url: 'https://avatar.amuniversal.com/feature_avatars/recommendation_images/features/ch/large_rec-201701251556.jpg',
    email: 'jcneligan@gmail.com'
  },
  {
    name: 'John',
    company: 'Doe and Co',
    location: 'Raleigh, NC',
    bio: 'Ionic developer',
    avatar_url: 'https://avatar.amuniversal.com/feature_avatars/recommendation_images/features/ch/large_rec-201701251556.jpg',
    email: 'johndoe@gmail.com'
  }
];

export const USER_LIST = userList;
