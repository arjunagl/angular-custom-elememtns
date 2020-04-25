const fs = require("fs-extra");
const concat = require("concat");

concatenate = async () => {
  const files = [
    "./dist/angular-9-custom-element/runtime-es2015.js",
    "./dist/angular-9-custom-element/runtime-es5.js",
    "./dist/angular-9-custom-element/polyfills-es2015.js",
    "./dist/angular-9-custom-element/polyfills-es5.js",
    "./dist/angular-9-custom-element/main-es2015.js",
    "./dist/angular-9-custom-element/main-es5.js",
  ];

  await fs.ensureDir("output");
  await concat(files, "output/contact-form.js");
};
concatenate();
