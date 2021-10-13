const { sequelize } = require("../../models");
const { isAuthorized } = require("../functions/tokenFunctions");
module.exports = (req, res) => {
  if (!req.params) {
    res.status(400).send({ message: " post 좋아요 찾기 postId 미기입" });
    return;
  }
  const { postId } = req.params;

  sequelize
    .query(
      `select count(*) as count from users_posts where postId = ` +
        postId +
        `;`,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    )
    .then((result) => {
      res.status(200).send({ count: result[0].count });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "post 좋아요 찾기 에러 Server Error" }); // Server error
    });
};
