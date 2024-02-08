const multer = require('multer')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')
require('dotenv').config()

aws.config.update({
    accessKeyId: process.env.aws_access_key,
    secretAccessKey: process.env.aws_secret_key,
    region: 'ap-south-1'
    
})


const s3 = new aws.S3()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'mytweetimagebucket',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload