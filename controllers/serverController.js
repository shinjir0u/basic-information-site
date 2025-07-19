import path from "path";
import url from "url";

const __filepath = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(path.dirname(__filepath));

function homePageHandler(request, response) {
  response.sendFile("/views/index.html", { root: __dirname });
}

function aboutPageHandler(request, response) {
  response.sendFile("/views/about.html", { root: __dirname });
}

function contactMePageHandler(request, response) {
  response.sendFile("/views/contact-me.html", { root: __dirname });
}

function errorHandler(request, response) {
  response.status(404).sendFile("/views/404.html", { root: __dirname });
}

export default {
  homePageHandler,
  aboutPageHandler,
  contactMePageHandler,
  errorHandler,
};
