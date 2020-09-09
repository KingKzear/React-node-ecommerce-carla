export function addUser(user) {
  return {
      type: 'ADD_USERS',
      payload: user
  }

}

export function deleteUser(id) {
  return {
      type: 'DELETE_USERS',
      payload: id
  }

}

export function fetchUsers() {
  return {
      type: 'FETCH_USERS'
  }

}

export function findUserById(id) {
  return {
      type: 'FIND_USER_BY_ID',
      payload: id
  }

}