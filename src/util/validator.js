export function LoginValidator(values) {
  let errors = {};
  if(!values.username) {
    errors.username = 'User name is required';
  } 
  if (!values.password) {
    errors.password = 'Password is required';
  }
  return errors;
};

export function SignupValidator(values) {
  let errors = {};
  if(!values.username) {
    errors.username = 'User name is required';
  } 
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if(!values.password) {
    errors.password = 'Password is required';
  }
  if(!values.repeat_password) {
    errors.repeat_password = 'Confirm your password';
  } else if( values.password != values.repeat_password) {
    errors.password = 'Password is mismatching'
    errors.repeat_password = 'Password is mismatching'
  }
  return errors;
};

export function UserCreateFormValidator(values) {
  let errors = {};
  if(!values.username) {
    errors.username = 'User name is required';
  } 
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if(!values.password) {
    errors.password = 'Password is required';
  }
  if(!values.customer_number) {
    errors.customer_number = 'Customer number is required';
  }
  if(!values.phone) {
    errors.phone = 'Phone number is required';
  }
}