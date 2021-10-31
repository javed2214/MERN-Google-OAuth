const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/", { target: "http://localhost:5002/" }));
  app.use(proxy("/api/", { target: "http://localhost:5002/" }));
  app.use(proxy("/profile/", { target: "http://localhost:5002/" }));
  app.use(proxy("/posts/", { target: "http://localhost:5002/" }));
  app.use(proxy("/auth/logout/", { target: "http://localhost:5002/" }));
  app.use(proxy("/todo/*", { target: "http://localhost:5002/" }));
};
