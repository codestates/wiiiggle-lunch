const { sequelize } = require("../../models");
const { isAuthorized } = require("../functions/tokenFunctions");
module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res
      .status(401)
      .send({ message: "좋아요 등록 : 유효하지 않은 접근입니다." });
    return;
  }
  const { id } = accessTokenData;
  const { postId } = req.body;
  sequelize
    .query(
      `insert into users_posts(userId,postId,createdAt,updatedAt) values(` +
        id +
        `,` +
        postId +
        `,now(),now());`,
      { type: sequelize.QueryTypes.INSERT }
    )
    .then((result) => {
      console.log(result);
      res.status(201).send({ message: "좋아요 등록 완료" });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .send({ message: "이미 좋아요를 등록했습니다. Server Error" }); // Server error
    });
};
