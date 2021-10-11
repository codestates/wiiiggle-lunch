const { users } = require("../../models");

module.exports = (req, res) => {
  const email = req.query.email;

  users
    .update(
      {
        emailauth: "yes",
      },
      {
        where: { email },
      }
    )
    .then((result) => {
      res.redirect(
        "http://wiiiggle-test.s3-website.ap-northeast-2.amazonaws.com/"
      ); //메인페이지로
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send({ message: "Server Error" }); // Server error
    });
};
