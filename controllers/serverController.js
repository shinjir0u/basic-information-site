import fs from "fs/promises";

const requestMethodMapper = {
  "/": {
    statusCode: 200,
    page: "./views/index.html",
  },
  "/about": {
    statusCode: 200,
    page: "./views/about.html",
  },
  "/contact-me": {
    statusCode: 200,
    page: "./views/contact-me.html",
  },
};

async function readFileFromSystem(filePath) {
  try {
    return await fs.readFile(filePath, { encoding: "utf8" });
  } catch (error) {
    console.error(error);
  }
}

function getResponseForRequestURL(url) {
  let statusCode = 404;
  let page = "./views/404.html";

  if (requestMethodMapper[url]) {
    const mappedObject = requestMethodMapper[url];
    ({ statusCode, page } = mappedObject);
  }

  return { statusCode, page };
}

async function serverHandler(request, response) {
  const { statusCode, page } = getResponseForRequestURL(request.url);
  const file = await readFileFromSystem(page);

  response.setHeader("Content-Type", "text/html");
  response.statusCode = statusCode;
  response.end(file);
}

export default serverHandler;
