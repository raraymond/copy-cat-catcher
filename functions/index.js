// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require("firebase-functions");
const TinEye = require("tineye-api");
const admin = require("firebase-admin");
admin.initializeApp();

const credentials = functions.config().tineye;
// console.log(credentials.pub);

const api = new TinEye(
    `https://api.tineye.com/rest/,${credentials.priv},${credentials.pub}`
);

exports.searchResults = functions.https.onCall((data, context) => {
    //   const userId = context.auth.uid;
    //   const userRef = db.doc(`users/${userId}`);
    //   // const userSnap = await userRef.get();
    console.log("defining params");
    const params = {
        offset: 0,
        limit: 10,
        sort: "score",
        order: "desc",
    };
    console.log("define url");
    // const url = req.query.text;
    const url = "https://tineye.com/images/meloncat.jpg";
    console.log("looking for data");
    return api
        .searchUrl(url, params)
        .then(function(response) {
            console.log(response);
            res(response);
        })
        .catch(function(error) {
            console.log(error);
            res.json(error);
        });
});