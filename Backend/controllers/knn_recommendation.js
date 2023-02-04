const knn = require("../Scripts/Knn.js");

const knnRec = (req, res, next) => {
  const { userScores, productScoresList } = req.body;

  knn
    .findKNN(userScores, productScoresList)
    .then((nearestNeighbors) => {
      res.send({ nearestNeighbors });
    })
    .catch(next);
};

module.exports = { knnRec };
