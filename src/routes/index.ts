// import { Router, Request, Response, NextFunction } from "express";
// import multer from "multer";
// import { v4 as uuidv4 } from 'uuid';
// import  { exec } from "child_process";

// const router = Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     console.log("my ",file);

//     let name  = uuidv4();
//     if(file.mimetype == 'video/mp4') {
//         name  += ".mp4";
//     }
//     else {
//       console.log("wrong type of file existed")
//     }
//     cb(null, name)
//   },
// });

// const  upload = multer({ storage: storage });

// const makeQuallity = () => {

//   exec(`ffmpeg -i input.mp4 -vf "scale=640:360" -c:v libx264 -b:v 800k -r 30 -c:a aac -b:a 64k upload/output_360p.mp4`, function(err, stdout, stderr) {
//     if (err) {
//       console.log("facing error while  making 360 quality version");
//     }
//     console.log(stdout);
//   });

//   exec(`ffmpeg -i input.mp4 -vf "scale=854:480" -c:v libx264 -b:v 1000k -r 24 -c:a aac -b:a 64k output_480p.mp4`, function(err, stdout, stderr) {
//     if (err) {      
//       console.log("facing error while  making 480 quality version");
//     }
//     console.log(stdout);
//   });
//   exec(`ffmpeg -i input.mp4 -vf "scale=1280:720" -c:v libx264 -b:v 2500k -r 30 -c:a aac -b:a 96k output_720p.mp4`, function(err, stdout, stderr) {
//     if (err) {
//       console.log("facing error while  making 720 quality version");
//     }
//     console.log(stdout);
//   });
//   exec(`ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libx264 -b:v 5000k -r 30 -c:a aac -b:a 128k output_1080p.mp4`, function(err, stdout, stderr) {
//     if (err) {
//       console.log("facing error while  making 1080 quality version");
//     }
//     console.log(stdout);
//   });

// }

// // // Route to handle GET request
// // router.get("/", (req: Request, res: Response) => {
// //   console.log("hello world");
// //   res.json({
// //     status: true,
// //     data: { heading: "Hello RJ" },
// //   });
// // });

// // Route to handle file upload (POST request)
// router.post("/api/upload", upload.single("file"), (req: Request, res: Response, next: NextFunction) => {

//   const file = req.file;
//   if (!file) {
//     const error = new Error("Please upload a file");
//     (error as any).httpStatusCode = 400;
//     return next(error);
//   }

//   res.send(file);
// });

// export default router;
