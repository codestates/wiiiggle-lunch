module.exports = {
  //users
  login: require("./users/login"),
  auth: require("./users/auth"),
  google: require("./users/google"),
  logout: require("./users/logout"),
  signup: require("./users/signup"),
  usersmodify: require("./users/usersmodify"),
  refreshToken: require("./users/refreshToken"),
  userslikes: require("./users/getlikes"),
  //restaurants
  restaurants: require("./restaurants/restaurants"),
  //posts
  posts: require("./posts/newposts"),
  getlikes: require("./posts/getlikes"),
  postslikes: require("./posts/likes"),
  edit: require("./posts/edit"),
  deleteposts: require("./posts/deleteposts"),
  getposts: require("./posts/posts"),
  //multer
  photos: require("./functions/multerFunctions/photos"),
  // accessTokenRequest: require("./users/accessTokenRequest"),
  // refreshTokenRequest: require("./users/refreshTokenRequest"),
};
