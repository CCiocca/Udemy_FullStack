import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
res.send("hello from the server")
});

app.get("/about", (req,res) =>{
  res.send("<h1>ABOUT page</h1>")
});

app.get("/contacts", (req,res) => {
  res.send("<h1>CONTACTS page</h1>")
})


app.listen(port, () => {
  console.log(`server running on port ${port}`)
});
