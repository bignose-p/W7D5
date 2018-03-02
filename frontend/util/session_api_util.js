export const signup = function(user) {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {user }
  });
};

export const login = function(user) {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {user: user}
  });
};

export const logout = function() {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};
