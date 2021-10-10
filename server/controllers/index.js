module.exports = {
  //users
  login: require("./users/login"),
  google: require("./users/google"),
  logout: require("./users/logout"),
  signup: require("./users/signup"),
  usersmodify: require("./users/usersmodify"),
  refreshToken: require("./users/refreshTokenRequest"),
  //restaurants
  restaurants: require("./restaurants/restaurants"),
  //posts
  posts: require("./posts/newposts"),
  edit: require("./posts/edit"),
  deleteposts: require("./posts/deleteposts"),
  getposts: require("./posts/posts"),
  //multer
  photos: require("./functions/multerFunctions/photos"),
  // accessTokenRequest: require("./users/accessTokenRequest"),
  // refreshTokenRequest: require("./users/refreshTokenRequest"),
};
