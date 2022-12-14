//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Diets } = require("./src/db.js");
const { PORT } = process.env;
const dietsDb = [
  "dairy free",
  "gluten free",
  "ketogenic",
  "lacto ovo vegetarian",
  "fodmap friendly",
  "paleolithic",
  "pescatarian",
  "primal",
  "vegan",
  "whole 30",
];

// Syncing all the models at once.
conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`% listening at ${PORT}`); // eslint-disable-line no-console
    });
  })
  .then(() => {
    dietsDb.map((e) => Diets.findOrCreate({ where: { name: e } }));
  });
