const moves = [
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
  [-2, -1],
  [-2, 1],
  [-1, 2],
];

const isInBounds = (x, y) => {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
};

// Core BFS that just returns the path or null
const findShortestPath = (start, end) => {
  const queue = [];
  const visited = new Set();

  queue.push({ pos: start, path: [start] });
  visited.add(start.toString());

  while (queue.length) {
    const { pos, path } = queue.shift();
    const [x, y] = pos;

    if (x === end[0] && y === end[1]) {
      return path;
    }

    for (const [dx, dy] of moves) {
      const nextX = x + dx;
      const nextY = y + dy;
      const key = [nextX, nextY].toString();

      if (isInBounds(nextX, nextY) && !visited.has(key)) {
        visited.add(key);
        queue.push({
          pos: [nextX, nextY],
          path: [...path, [nextX, nextY]],
        });
      }
    }
  }

  return null;
};

const knightMoves = (start, end) => {
  const path = findShortestPath(start, end);

  if (!path) {
    console.log("No path found.");
    return null;
  }

  console.log(`You made it in ${path.length - 1} moves!  Here's your path:`);
  path.forEach((pos) => console.log(pos));

  return path;
};

knightMoves([3, 3], [4, 3]);
