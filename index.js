const express = require("express");
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");
const app = express();

app.use("/api/v1/user",userRouter);
app.use("/api/v1/admin",userRouter);
app.use("/api/v1/course", courseRouter); 

app.use("/api/v2/user",userRouter);
app.use("/api/v2/admin",userRouter);
app.use("/api/v2/course", courseRouter); 

async function main(){
  await mongoose.connect("mongodb+srv://Yashsainani123:Yashsainani@1234@yashsainani123.kcvlkn5.mongodb.net/CourseEra-App")
  app.listen(3000)
    console.log("listening on port 3000");
  }
app.listen(3000);