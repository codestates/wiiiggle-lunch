module.exports = {
  login: require('./users/login'),
  signup: require('./users/signup'),
  posts: require('./posts/newposts'),
  accessTokenRequest: require('./users/accessTokenRequest'),
  refreshTokenRequest: require('./users/refreshTokenRequest'),
};
