const { sequelize } = require("../../models");

// const Op = sequelize.Op;
module.exports = (req, res) => {
  if (!req.params.id) {
    if (req.query.size === undefined || req.query.size === "") {
      res.status(400).send({ message: "잘못된 요청입니다. size 미기입" });
      return;
    }
    const size = req.query.size;
    const lastrestaurantsId =
      req.query.lastrestaurantsId === "" ? "0" : req.query.lastrestaurantsId;
    const querys = req.query.query;

    sequelize
      .query(
        `select distinct r.id,r.name,r.address,r.latitude,r.longitude,p.menu,(select avg(p.score) from posts p where p.restaurants_id = r.id group by p.restaurants_id) as averageScore,'' as images
         from restaurants r
         join posts p
         on r.id = p.restaurants_id
         where r.name like '%` +
          querys +
          `%'
          or p.menu like '%` +
          querys +
          `%'
          group by r.id
          limit ` +
          lastrestaurantsId +
          `,` +
          size +
          `;`,
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        let restaurants = result.map((el) => el.id);
        if (restaurants.length < 1) {
          res.status(200).send({ restaurants: [] });
          return;
        }
        sequelize
          .query(
            `select p.restaurants_id as id, ph.src
            from posts p
            join photos ph
            on p.id = ph.posts_id
            where p.restaurants_id in (` +
              restaurants.toString() +
              `)
              order by id;`,
            { type: sequelize.QueryTypes.SELECT }
          )
          .then((result2) => {
            let img = {};
            for (let i of result2) {
              let temp = [];
              temp.push(i.src);
              if (img[i.id] === undefined) {
                img[i.id] = temp;
              } else {
                let temp2 = img[i.id];
                if (temp2.length < 3) {
                  temp2 = [...temp2, ...temp];
                }
                img[i.id] = temp2;
              }
            }
            for (let i of result) {
              i.images = img[i.id];
            }

            res.status(200).send({ restaurants: result });
          })
          .catch((error) => {
            console.log(error);
            res
              .status(500)
              .send({ message: "레스토랑 이미지 검색 Server Error" }); // Server error
          });
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
            `select u.nickname,s.tmi,s.menu,s.score,s.src as image,s.averageScore,s.likes,s.id as postsId
          from users u
          join 
          (select p.id,p.tmi,p.menu,p.score, ph.src, (select avg(p.score) from posts p join photos ph on p.id = ph.posts_id where p.restaurants_id = ` +
              id +
              `
                       group by p.restaurants_id) as averageScore,(select count(*) from users_posts where postId = p.id) as likes, p.users_id
                       from posts p 
                       join photos ph
                       on p.id = ph.posts_id
                       where p.restaurants_id = ` +
              id +
              `
                       group by p.id) s
          where u.id = s.users_id
          order by s.id;`,
            { type: sequelize.QueryTypes.SELECT }
          )
          .then((p_result) => {
            if (p_result.length < 1) {
              res.status(400).send({ message: "평가 데이터가 없습니다." }); // Server error
              return;
            }
            averageScore = p_result[0].averageScore;
            for (let i of p_result) {
              console.log(i);
              delete i["averageScore"];
            }
            res.status(200).send({
              restaurants: r_result[0],
              averageScore,
              posts: p_result,
            });
          })
          .catch((error) => {
            console.log(error);
            res
              .status(500)
              .send({ message: "레스토랑 및 posts 검색 Server Error" }); // Server error
          });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({ message: "레스토랑 검색 Server Error" }); // Server error
      });
  }
};
