const S3 = require('aws-sdk/clients/s3.js')

const bucketName=process.env.AWS_BUCKET_NAME
const region=process.env.AWS_BUCKET_REGION
const accessKeyId=process.env.AWS_ACCESS_KEY
const secretAccessKey=process.env.AWS_SECRET_KEY

const s3=new S3({region, accessKeyId, secretAccessKey})

// downloads a file from s3
const getFileStream=()=>{
  console.log('here')
  const downloadParams = {
    // Key: fileKey,
    Bucket: bucketName,
    Delimiter: '/',
    Prefix: 'gallery/'
  }
  s3.listObjects(downloadParams, function (err, data) {
    
    if(err) console.log(err)
    console.log(data);
   });

  // return s3.listObjects(downloadParams)
  //.createReadStream()
}

module.exports = getFileStream