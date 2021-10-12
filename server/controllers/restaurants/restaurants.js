const { restaurants, posts, sequelize } = require("../../models");

// const Op = sequelize.Op;
module.exports = (req, res) => {
  if (!req.params.id) {
    const { lastrestaurantsId, size } = req.query;
    const querys = req.query.query;
    sequelize
      .query(
        `select distinct r.id,r.name,r.address,r.latitude,r.longitude,p.menu,(select avg(p.score) from posts p where p.restaurants_id = r.id group by p.restaurants_id) as averageScore
         from restaurants r
         join posts p
         on r.id = p.restaurants_id
         where r.name like '%` +
          querys +
          `%'
          or p.menu like '%` +
          querys +
          `%'
          limit ` +
          lastrestaurantsId +
          `,` +
          size +
          `;`,
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        console.log(result);
        res.status(200).send({ restaurants: result });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "레스토랑 검색 Server Error" }); // Server error
      });
  } else {
    const { id } = req.params;
    sequelize
      .query(
        `select r.id,r.name,r.address,r.latitude,r.longitude from restaurants r where r.id  = ` +
          id +
          `;`,
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((r_result) => {
        sequelize
          .query(
            `select p.id,p.tmi,p.menu,p.score, ph.src, (select avg(p.score) from posts p join photos ph on p.id = ph.posts_id where p.restaurants_id = 1
             group by p.restaurants_id) as averageScore
             from posts p 
             join photos ph
             on p.id = ph.posts_id
             where p.restaurants_id = ` +
              id +
              `
             group by p.id;`,
            { type: sequelize.QueryTypes.SELECT }
          )
          .then((p_result) => {
            res.status(200).send({
              restaurants: r_result[0],
              averageScore: p_result[0].averageScore,
              posts: p_result,
            });
          })
          .catch((error) => {
            console.log(error);
            res.status(500).send({ message: "posts 검색 Server Error" }); // Server error
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "레스토랑 검색 Server Error" }); // Server error
      });
  }
};
