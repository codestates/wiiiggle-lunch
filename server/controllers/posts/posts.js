const { sequelize } = require("../../models");

module.exports = (req, res) => {
  const { lastrestaurantsId, size } = req.query;

  sequelize
    .query(
      `select p.id,r.name,p.tmi,p.menu,p.score, ph.src,r.latitude, r.longitude, r.address
      from posts p 
      left outer join photos ph
      on p.id = ph.posts_id
          join restaurants r
          on r.id = p.restaurants_id
      group by p.id
          limit ` +
        lastrestaurantsId +
        `,` +
        size +
        `;`,
      { type: sequelize.QueryTypes.SELECT }
    )
    .then((result) => {
      res.status(200).send({ posts: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "포스트 검색 Server Error" }); // Server error
    });
};
