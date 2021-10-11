const { posts } = require("../../models");
module.exports = (req, res) => {
  const { postId } = req.params;

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
      res.status(500).send({ message: "Server Error" }); // Server error
    });
};
