

// Calculate the Euclidean distance between two points
function euclideanDistance(point1, point2) {
    let sum = 0;
    for (let i = 0; i < point1.length; i++) {
      sum += Math.pow(point1[i] - point2[i], 2);
    }
    return Math.sqrt(sum);
  }
  
  /// summery: Find the nearest product to recommend to the user from a given product  list
  /// input: User scores vector,list of products scores vector of the given category
  /// output: the closest product from the products scores vector
  function findKNN(userScores, productScoresList, k) {
    // Calculate distances between the given point and all other points
    const distances = productScoresList.map(p => ({
      point: p,
      distance: euclideanDistance(userScores, p)
    }));
  
    // Sort the points by ascending distance
    distances.sort((a, b) => a.distance - b.distance);
  
    // Return the k nearest neighbors
    return distances[0].point 
  }
  



  // Tests
  const points = [[1, 1], [2, 2], [3, 3], [4, 4]];
  const k = 2;
  const nearestNeighbors = findKNN([0, 0], points, k);
  console.log(nearestNeighbors); // Output: [[1, 1], [2, 2]]


  
  