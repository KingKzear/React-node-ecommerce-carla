export default function reducer(state = {
  home: []
}, action) {
  switch (action.type) {
      case 'ADD_USERS': {
          return { ...state, users: state.users.concat(action.payload) };

      }
    
      case 'FIND_USER_BY_ID': {

          return state;
      }

      default:
          return state;
  }
}