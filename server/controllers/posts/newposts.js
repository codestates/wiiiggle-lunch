const { restaurants, posts, photos } = require("../../models");
const { isAuthorized } = require("../functions/tokenFunctions");
module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  const { id } = accessTokenData;
  const { address, menu, name, longitude, latitude, score, images } = req.body;
  const tmi = req.body.tmi === undefined ? "" : req.body.tmi;
  const users_id = id;
  restaurants
    .findOrCreate({
      where: {
        name,
        address,
        longitude,
        latitude,
      },
    })
    .then(([restaurants_result, created]) => {
      const restaurants_id = restaurants_result.dataValues.id;
      posts
        .create({
          tmi,
          score,
          menu,
          users_id,
          restaurants_id,
        })
        .then((posts_result) => {
          const posts_id = posts_result.dataValues.id;
          const photos_datas = images.map((el) => {
            return { posts_id, src: el };
          });
          photos
            .bulkCreate(photos_datas)
            .then(() => {
              res.status(201).send({
                data: {
                  users_id,
                  restaurants_id,
                  posts_id,
                  name,
                  score,
                  latitude,
                  longitude,
                  tmi,
                  address,
                  menu,
                  images,
                },
                message: "새로운 글이 등록되었습니다.",
              });
            })
            .catch((error) => {
              console.log("posts 사진 등록 error/n" + error);
              res.sendStatus(500).send({ message: "server Error" }); // Server error
            });
        })
        .catch((error) => {
          console.log("posts 등록 error/n" + error);
          res.status(500).send({ message: "Server Error" }); // Server error
        });
    })
    .catch((error) => {
      console.log("restaurants 등록 error/n" + error);
      res.status(500).send({ message: "Server Error" }); // Server error
    });
};
