import express, { NextFunction, Request, Response } from "express";
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
// then -> Callback Function -> Works the same as Middleware

// function handleGetBookOne(req: Request, res: Response, next: NextFunction) {
//   console.log(req.params);
//   next();
// }

// function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
//   console.log("Second Handler");
//   return res.send(req.params);
// }

// app.get("/api/books/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);
//OR
// app.get(
//   "/api/books/:bookId/:authorId",
//   function (req: Request, res: Response, next: NextFunction) {
//     next();
//   },
//   function (req: Request, res: Response, next: NextFunction) {
//     return res.send(req.params);
//   }
// );

//Middleware
// function middleware(req: Request, res: Response, next: NextFunction) {
//   //@ts-ignore
//   req.name = "Neelaksh";
//   next();
// }

const middleware = //Currying

    ({ name }: { name: string }) =>
    (req: Request, res: Response, next: NextFunction) => {
      //@ts-ignore
      //req.name = name;
      res.locals.name = name;
      next();
    };

app.use(middleware({ name: "Neelaksh Mathur" })); //Global Middleware

app.get(
  "/api/books/:bookId/:authorId",

  (req: Request, res: Response, next: NextFunction) => {
    //(req: Request<{bookId:'string',authorId:string},{},{}>, res: Response, next: NextFunction)
    //@ts-ignore
    //console.log(req.name);
    console.log(res.locals.name);
    //@ts-ignore
    //res.send(req.name);
    res.send(res.locals.name);
  }
);

//Error Handling
// app.get("/error", () => {
//   throw new Error("Boom!!");
// });

// async function throwsError() {
//   throw new Error("Boom!!");
// }

// app.get("/error", async (req: Request, res: Response) => {
//   try {
//     await throwsError();
//     res.sendStatus(200);
//   } catch (e) {
//     res.status(400).send("Something bad happened");
//   }
// });

//Application Structure -> Controller Service Model

//Security
//yarn add helmet
// import helmet from "helmet";
// app.use(helmet());

app.listen(3000, () => {
  console.log("Application listening at http://localhost:3000");
});
