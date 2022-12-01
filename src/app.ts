import express, { Request, Response } from "express";
import { METHODS } from "http";

const app = express();

app.use(express.json()); //Middleware

// app.get("/", (req: Request, res: Response) => {
//   // return res.json({
//   //   success: true,
//   //   name: "Neelaksh Mathur",
//   // });
//   // return res.redirect("https://example.com");
// });

// app.post("/api/data", (req: Request, res: Response) => {
//   console.log(req.body);
//   return res.sendStatus(200);
// });

// app.all("/api/all", (req: Request, res: Response) => {
//   return res.sendStatus(200);
// });

//Chaning Requests
// app
//   .route("/")
//   .get((req: Request, res: Response) => {
//     return res.send("Its a GET Request");
//   })
//   .post((req: Request, res: Response) => {
//     return res.send("Its a POST Request");
//   })
//   .put((req: Request, res: Response) => {
//     return res.send("Its a PUT Request");
//   })
//   .all((req: Request, res: Response) => {
//     return res.send("Its an X Request");
//   });

//Route Paths
// app.get("/health", (req: Request, res: Response) => res.sendStatus(200));
// app.get("/ab*cd", (req: Request, res: Response) => res.send("ab*cd")); // abRANDOMcd
// app.get(/abc/, (req: Request, res: Response) => res.send("/abc/")); //EFGabc, abcEFG, EFGabcTUI

//Route Parameters
//Often we want to path a dynamic path inside our route
// app.get("/api/books/:bookId/:authorId", (req: Request, res: Response) => {
//   //console.log(req.params.bookId);
//   console.log(req.params);
//   return res.send(req.params);
// });

//Route Handlers
// get/post/put ->  METHODS
// "/api/books" -> PATH
// then -> Callback Function

app.listen(3000, () => {
  console.log("Application listening at http://localhost:3000");
});
