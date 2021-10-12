const { users, photos } = require("../../models");
const crypto = require("crypto");
const { mailSend } = require("../functions/nodemailerFunctions");
module.exports = (req, res) => {
  if (
    req.body.nickname === "" ||
    req.body.password === "" ||
    req.body.email === ""
  ) {
    res.status(422).send({
      message: "누락된 회원정보가 있습니다.",
    });
  }
  let { nickname, password, email, images } = req.body;
  let salt = Math.round(new Date().valueOf() * Math.random()) + "";
  let hashPassword = crypto
    .createHash("sha512")
    .update(password + salt)
    .digest("hex");

  users
    .findOne({
      where: { email },
    })
    .then((email_creat) => {
      if (!email_creat) {
        users
          .findOrCreate({
            where: {
              nickname,
            },
            defaults: {
              email,
              password: hashPassword,
              salt,
            },
          })
          .then(([result, created]) => {
            if (!created) {
              console.log(result);
              res.status(409).send({
                nickname: "true",
                message: "이미 존재하는 닉네임입니다.",
              });
            } else {
              const users_id = result.dataValues.id;
              photos
                .create({
                  users_id,
                  src: images[0],
                })
                .then((resu) => {
                  if (!resu) {
                    res.status(409).send({ message: "사진 저장 실패" });
                  }
                  mailSend(email);
                  res
                    .status(201)
                    .send({ userInfo: { nickname, email, images } });
                });
            }
          })
          .catch((error) => {
            console.log(error);
            res.status(500).send({ message: "Server Error" }); // Server error
          });
      } else {
        res.status(409).send({
          email: "true",
          message: "이미 존재하는 이메일입니다.",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Server Error" }); // Server error
    });
};
