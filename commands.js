import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';


const SET_CAP_COMMAND = {
  name: 'set-cap',
  description: 'Set number of people for event',
  type: 1,
};

const RESERVE_COMMAND = {
  name: 'reserve',
  description: 'Add yourself to the list',
  type: 1,
};

const WAITLIST_COMMAND = {
  name: 'waitlist',
  description: 'Add yourself to the waitlist',
  type: 1,
};



const ALL_COMMANDS = [SET_CAP_COMMAND, RESERVE_COMMAND,WAITLIST_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);