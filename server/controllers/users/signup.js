const { User } = require('../../models');
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../functions/tokenFunctions');

module.exports = (req, res) => {
  const { userId, password } = req.body;
  User.findOne({
    where: {
      userId,
      password,
    },
  })
    .then(data => {
      if (!data) {
        // return res.status(401).send({ data: null, message: 'not authorized' });
        return res.json({ data: null, message: 'not authorized' });
      }
      delete data.dataValues.password;
      const accessToken = generateAccessToken(data.dataValues);
      const refreshToken = generateRefreshToken(data.dataValues);

      sendRefreshToken(res, refreshToken);
      sendAccessToken(res, accessToken);
    })
    .catch(err => {
      console.log(err);
    });
};

// const express = require('express');
// const app = express();
// const { upload } = require('./upload);

// app.post('/uploadOne', upload.single('img'), (req,res) => {
// 	//파일 하나만 업로드 할 때. ex) { img: File }
// 	console.log(req.file)
// }

// app.post('/uploadArray', upload.array('img'), (req,res) => {
// 	//파일 여러개를 배열로 업로드 할 때. ex) { img: [File,File,File,...] }
// 	console.log(req.files)
// }

// app.post('/uploadFields', upload.fields([ {name:'img1'},{name:'img2'},{name:'img3'}]), (req,res) => {
// 	//파일을 여러개의 객체로 업로드 할 때.
// 	console.log(req.files)
// }

// console.log(req.file);

// {
//   fieldname: 'img',
//   originalname: '스크린샷 2020-08-11 오후 4.05.51.png',
//   encoding: '7bit',
//   mimetype: 'image/png',
//   size: 18472,
//   bucket: 'project-portfolio-upload',
//   key: 'uploads/1597667031103_스크린샷 2020-08-11 오후 4.05.51.png',
//   acl: 'public-read',
//   contentType: 'image/png',
//   contentDisposition: null,
//   storageClass: 'STANDARD',
//   serverSideEncryption: null,
//   metadata: { fieldName: 'img' },
//   location: 'AWS-S3 URL',
//   etag: '"22cdfa150f11b3d125853746e5a7a65c"',
//   versionId: undefined
// }
