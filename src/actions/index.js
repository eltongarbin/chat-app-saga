import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => {
  nextMessageId++;

  return {
    type: types.ADD_MESSAGE,
    id: nextMessageId,
    message,
    author
  };
};

export const addUser = (name) => {
  nextUserId++;

  return {
    type: types.ADD_USER,
    id: nextUserId,
    name
  };
};

export const messageReceived = (message, author) => {
  nextMessageId++;

  return {
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId + 1,
    message,
    author
  };
};

export const populateUsersList = (users) => ({
  type: types.USERS_LIST,
  users
});
