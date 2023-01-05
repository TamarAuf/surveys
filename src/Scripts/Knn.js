

// Calculate the Euclidean distance between two points
function euclideanDistance(point1, point2) {
    let sum = 0;
    for (let i = 0; i < point1.length; i++) {
      sum += Math.pow(point1[i] - point2[i], 2);
    }
    return Math.sqrt(sum);
  }
  
  // Find the k nearest neighbors of a given point
  function findKNN(point, points, k) {
    // Calculate distances between the given point and all other points
    const distances = points.map(p => ({
      point: p,
      distance: euclideanDistance(point, p)
    }));
  
    // Sort the points by ascending distance
    distances.sort((a, b) => a.distance - b.distance);
  
    // Return the k nearest neighbors
    return distances.slice(0, k).map(d => d.point);
  }
  



  // Tests
  const points = [[1, 1], [2, 2], [3, 3], [4, 4]];
  const k = 2;
  const nearestNeighbors = findKNN([0, 0], points, k);
  console.log(nearestNeighbors); // Output: [[1, 1], [2, 2]]


  
  