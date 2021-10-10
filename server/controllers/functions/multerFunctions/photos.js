module.exports = (req, res) => {
  console.log(req.files);
  let images = [];
  for (let i of req.files) {
    // console.log(i.location);
    images.push(i.location);
  }
  res.send({ images: images, message: "사진 등록 되었습니다." });
};
