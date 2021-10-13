const { posts } = require("../../models");
const { isAuthorized } = require("../functions/tokenFunctions");
module.exports = (req, res) => {
  if (req.params === "" || req.params === undefined) {
    res.status(400).send({ message: "잘못된 요청입니다. postId 미 기입" });
    return;
  }
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(401).send({ message: "유효하지 않은 접근입니다." });
    return;
  }
  const { id } = accessTokenData;

  const { postId } = req.params;
  sequelize
    .query(`select users_id from posts where id = ` + postId + `;`, {
      type: sequelize.QueryTypes.SELECT,
    })
    .then((result) => {
      if (result === id) {
        posts
          .destroy({
            where: { id: postId },
          })
          .then((result) => {
            console.log(result);
            res.status(200).send({ message: "해당 평가가 삭제되었습니다." });
          })
          .catch((error) => {
            console.log(error);
            res.status(500).send({ message: "평가 메세지 삭제 Server Error" }); // Server error
            return;
          });
      } else {
        res.status(400).send({ message: "작성자가 아닙니다." });
        return;
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "포스트 검색 Server Error" }); // Server error
      return;
    });
};
