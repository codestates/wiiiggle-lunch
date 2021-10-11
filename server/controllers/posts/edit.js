const { posts, restaurants, photos } = require("../../models");
module.exports = (req, res) => {
  const { postId } = req.params;
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
      //조인테이블로 데이터 가져오기
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
          const { title, tmi, menu, score, restaurants_id, restaurant } =
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
              title,
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
          res.status(500).send({ message: "Server Error" }); // Server error
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Server Error" }); // Server error
    });
};
