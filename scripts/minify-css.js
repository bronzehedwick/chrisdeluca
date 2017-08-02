#!/usr/local/bin/node
/* eslint-disable no-console */

const cssnano = require('cssnano');
const fs = require('fs-extra');
const path = require('path');
const dir = './public/css';
const opts = {
  discardComments: {
    removeAll: true
  }
};

fs.readdir(dir)
  .then(processFiles)
  .catch(processError);

function processFiles(files) {
  files.forEach(file => {
    if (path.extname(file) == '.css') {
      fs.readFile(path.resolve(`${dir}/${file}`), 'utf-8')
        .then(data => cssnano.process(data, opts))
        .then(minifyCSS.bind(file))
        .catch(processError);
    }
  });
}

function minifyCSS(result) {
  fs.writeFileSync(`${dir}/${this}`, result.css);
}

function processError(error) {
  console.error(error.stack);
}
