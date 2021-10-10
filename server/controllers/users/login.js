const { users } = require("../../models");
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require("../functions/tokenFunctions");
const crypto = require("crypto");
module.exports = (req, res) => {
  const { password, email } = req.body;

  users
    .findOne({
      where: {
        email,
      },
    })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .json({ message: "일치하는 유저 정보가 없습니다." });
      }
      console.log(data);
      let dbPassword = data.dataValues.password;
      let salt = data.dataValues.salt;

      let hashPassword = crypto
        .createHash("sha512")
        .update(password + salt)
        .digest("hex");
      if (dbPassword === hashPassword) {
        const { nickname, email, id } = data.dataValues;
        const accessToken = generateAccessToken({ nickname, email, id });
        const refreshToken = generateRefreshToken({ nickname, email, id });
        sendRefreshToken(res, refreshToken, { nickname, email, id });
        sendAccessToken(res, accessToken, { nickname, email, id });
      } else {
        res.status(409).send({ message: "비밀번호가 다릅니다." });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Server Error" }); // Server error
    });
};

// // delete data.dataValues.password;
// const accessToken = generateAccessToken(data.dataValues);
// const refreshToken = generateRefreshToken(data.dataValues);

// sendRefreshToken(res, refreshToken);
// sendAccessToken(res, accessToken);
