const {
  checkRefeshToken,
  generateAccessToken,
  resendAccessToken,
} = require("../functions/tokenFunctions");
const { users } = require("../../models");

module.exports = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).send({ message: "로그인이 만료되었습니다." });
  }

  const refreshTokenData = checkRefeshToken(refreshToken);
  if (!refreshTokenData) {
    return res.status(401).send({ message: "일치하는 유저 정보가 없습니다." });
  }

  const { id } = refreshTokenData;
  users
    .findOne({ where: { id } })
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ message: "일치하는 유저 정보가 없습니다." });
      }
      const newAccessToken = generateAccessToken(data.dataValues);
      resendAccessToken(res, newAccessToken, data.dataValues);
    })
    .catch((err) => {
      console.log(err);
    });
};
