const { users } = require("../../models");
module.exports = (req, res) => {
  const { imageUrl, email, name } = req.body.profileObj;
  const { googleToken } = req.body.accessToken;
  console.log(imageUrl, email, name);

  let result = users
    .findOne({
      where: {
        email,
      },
    })
    .then((data) => {
      if (!data) {
        //유저 정보 저장
        users.create({ nickname: name, email: email });
      }
      // // delete data.dataValues.password;
      // const accessToken = generateAccessToken(data.dataValues);
      // const refreshToken = generateRefreshToken(data.dataValues);

      // sendRefreshToken(res, refreshToken);
      // sendAccessToken(res, accessToken);
    })
    .catch((err) => {
      console.log(err);
    });
  let dbPassword = result.dataValues.password;
  let salt = result.dataValues.salt;
  let hashPassword = crypto
    .createHash("sha512")
    .update(password + salt)
    .digest("hex");
  if (dbPassword === hashPassword) {
    console.log("비밀번호 일치");
    const accessToken = enerateAccessToken(result.dataValues);
    const refreshToken = generateRefreshToken(result.dataValues);
    sendRefreshToken(res, refreshToken);
    sendAccessToken(res, accessToken);
  } else {
    console.log("비밀번호 불일치");
    res.send("다름");
  }

  res.send("왔습니다");
};
