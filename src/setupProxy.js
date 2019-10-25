const proxy = require("http-proxy-middleware");

const filter = (pathname, req) => {
  const result= pathname.match('^/api');
  return result;
};
//
const myproxy = proxy(filter, { target: "https://examapprest.herokuapp.com/" });

module.exports = app => {
  app.use(myproxy);
};