import * as functions from "firebase-functions";
import * as express from "express";
import * as admin from "firebase-admin";
import * as cors from "cors";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const app = express();

function errorMiddleware(
  err: any,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}

app.use(errorMiddleware);

app.use(cors());

async function authMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const token = req.header("Authorization");
  console.log({ token });
  if (token == null) return res.sendStatus(403);
  const idToken = token.split(" ");
  if (idToken[1] == null) return res.sendStatus(403);

  try {
    await admin.auth().verifyIdToken(idToken[1]);
    next();
    return;
  } catch (e) {
    console.log({ authError: e });
    return res.sendStatus(403);
  }
}

app.use(authMiddleware);

const router = express.Router();
router.get("/users/:uid/todos", async (req, res) => {
  const snap = await admin
    .firestore()
    .collection(`users/${req.params.uid}/todos`)
    .get();
  res.json(
    snap.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
  );
});

router.get("users/:uid/todos/:todoId", async (req, res) => {
  const doc = await admin
    .firestore()
    .doc(`users/${req.params.uid}/todos/${req.params.todoId}`)
    .get();
  res.json({
    ...doc.data(),
    id: doc.id,
  });
});

app.use(router);

exports.tyotos = functions.https.onRequest(app);
