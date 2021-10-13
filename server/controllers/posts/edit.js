const { posts, restaurants, photos } = require("../../models");
module.exports = (req, res) => {
  if (req.params === undefined || req.params === "") {
    res.status(400).send({ message: "잘못된 접근입니다. postId 미기입" });
  }
  const { postId } = req.params;
  if (req.body.score === undefined || req.body.score === "") {
    res.status(400).send({ message: "잘못된 접근입니다. score 미기입" });
  }
  const { score } = req.body;
  const tmi = req.query.tmi === undefined ? "" : req.body.tmi;
  posts
    .update(
      {
        tmi,
        score,
      },
      {
        where: { id: postId },
      }
    )
    .then((result) => {
      posts
        .findAll({
          include: [
            {
              model: restaurants,
              attributes: ["name", "latitude", "longitude", "address"],
            },
            {
              model: photos,
              attributes: ["src"],
            },
          ],
          where: {
            id: postId,
          },
        })
        .then((res_post_restaurans) => {
          const { tmi, menu, score, restaurants_id, restaurant } =
            res_post_restaurans[0].dataValues;
          const { name, latitude, longitude, address } = restaurant.dataValues;
          const photo = res_post_restaurans[0].dataValues.photos;
          const images = photo.map((el) => {
            return el.dataValues.src;
          });
          res.status(201).send({
            data: {
              restaurants_id,
              posts_id: postId,
              name,
              score,
              latitude,
              longitude,
              tmi,
              address,
              menu,
              images,
            },
            message: "평가가 수정되었습니다.",
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).send({ message: "posts 목록 찾기 Server Error" }); // Server error
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "posts 업데이트 Server Error" }); // Server error
    });
};
