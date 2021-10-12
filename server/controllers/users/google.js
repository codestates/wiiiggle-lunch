const { users, photos } = require("../../models");
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require("../functions/tokenFunctions");
module.exports = (req, res) => {
  const { imageUrl, email, name } = req.body.profileObj;

  users
    .findOrCreate({
      where: {
        email,
      },
      defaults: {
        nickname: name,
      },
    })
    .then(([result, created]) => {
      if (!created) {
        const id = result.dataValues.id;
        const accessToken = generateAccessToken({ name, email, id });
        const refreshToken = generateRefreshToken({ name, email, id });
        sendRefreshToken(res, refreshToken, { name, email, id });
        sendAccessToken(res, accessToken, { name, email, id });
      } else {
        const users_id = result.dataValues.id;
        photos
          .create({
            users_id,
            src: imageUrl,
          })
          .then((resu) => {
            if (!resu) {
              res.status(409).send({ message: "사진 저장 실패" });
            } else {
              res.status(201).send({ userInfo: { nickname, email, imageUrl } });
            }
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Server Error" }); // Server error
    });
};
