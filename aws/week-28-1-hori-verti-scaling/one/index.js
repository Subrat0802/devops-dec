const cluster = require("cluster");
const os = require("os");

if (cluster.isPrimary) {
  console.log(`Primary process PID: ${process.pid}`);
  console.log(`CPU cores available: ${os.cpus().length}`);

  // Fork workers equal to number of CPU cores
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

} else {
  console.log(`Worker PID: ${process.pid} started`);

  let sum = 0;
  const bigNumber = 10_000_000_000;
  let startTime = Date.now();
  for (let i = 0; i < bigNumber; i++) {
    sum += i;
  }
  let endTime = Date.now();
  console.log(endTime - startTime);
  console.log(`Worker PID: ${process.pid} sum = ${sum}`);
}
