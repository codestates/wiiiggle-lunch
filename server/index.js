<<<<<<< HEAD
=======
require("dotenv").config();
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const { upload } = require("./controllers/functions/multerFunctions");
const controllers = require("./controllers");
const models = require("./models/index");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    // http://wiiiggle-test.s3-website.ap-northeast-2.amazonaws.com/
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

// sequelize models 폴더와 동기화
models.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결성공");
  })
  .catch((err) => {
    console.log("DB 연결실패");
    console.log(err);
  });

app.post("/photos", upload.array("image"), controllers.photos);

//users
app.post("/login", controllers.login);
app.get("/auth", controllers.auth);
app.post("/google", controllers.google);
app.get("/logout", controllers.logout);
app.post("/signup", controllers.signup);
app.put("/users", controllers.usersmodify);
app.get("/users", controllers.refreshToken);
app.get("/likes", controllers.userslikes);
//posts
app.post("/posts", controllers.posts);
app.post("/edit/:postId", controllers.edit);
app.delete("/posts/:postId", controllers.deleteposts);
app.get("/posts", controllers.getposts);
app.post("/likes", controllers.postslikes);
app.get("/likes/:postId", controllers.getlikes);
//restaurants
app.get("/restaurants", controllers.restaurants);
app.get("/restaurants/:id", controllers.restaurants);
// app.get("/accesstokenrequest", controllers.accessTokenRequest);
// app.get("/refreshtokenrequest", controllers.refreshTokenRequest);

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;
// const HTTPS_PORT = process.env.HTTPS_PORT || 80;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
let server;
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log("server runnning"));
} else {
  server = app.listen(HTTPS_PORT);
}
module.exports = server;
>>>>>>> dev
