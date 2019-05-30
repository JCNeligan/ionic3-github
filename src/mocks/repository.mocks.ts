import { Repository } from '../models/repository.interface';
import { USER_LIST } from './user.mocks';

const repositoryList:Repository[] = [
  {
    name: 'Ionic 3 Camera',
    description: 'Shows the usage of the Camera functionality within Ionic 3',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 SMS',
    description: 'Shows the usage of the SMS functionality within Ionic 3',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic 3 Vibration',
    description: 'Shows the usage of the Vibration functionality within Ionic 3',
    owner: USER_LIST[1]
  },
  {
    name: 'Ionic 3 Flashlight',
    description: 'Shows the usage of the Flashlight functionality within Ionic 3',
    owner: USER_LIST[1]
  }
];

export const REPOSITORY_LIST = repositoryList;
