import express from "express";
import bodyParser from "body-parser";
import pg from "pg"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public", {
  setHeaders: (res, path) =>{
      if(path.endsWith(".css")){
          res.set("Content-Type", "text/css")
      }
  }
}))

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "12345",
  port: "5432"
})

db.connect()


let items = [];

db.query("SELECT * FROM items", (err, res) => {
  if(err){
    console.error("Error executing query")
  }else{
    items = res.rows
  }
  db.end
})


app.get("/",  (req, res) => {
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});



app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query(
    "INSERT INTO items (title) VALUES ($1);",
    [item]
  )
  res.redirect("/");
});



app.post("/edit", async (req, res) => {
  const id = req.body.updatedItemId
  const item = req.body.updatedItemTitle
  console.log(id)
  console.log(item)

  await db.query(
    "UPDATE items SET title = ($1) WHERE id = ($2);",
    [item, id]
  )

  res.redirect("/")
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId
  console.log(id)

  await db.query(
    "DELETE FROM items WHERE id = ($1);",
    [id]
  )

  res.redirect("/")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
