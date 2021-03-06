'use strict';

const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');

const START_URL = "http://www.oldnavy.gap.com";
const SEARCH_WORD = "sale";
const MAX_PAGES_TO_VISIT = 10;

const pagesVisited = {};
let numPagesVisited = 0;
const pagesToVisit = [];
const url = new URL(START_URL);
const baseUrl = url.protocol + "//" + url.hostname;

pagesToVisit.push(START_URL);
crawl();

function crawl() {
  if (numPagesVisited >= MAX_PAGES_TO_VISIT) {
    console.log("Reached max limit of number of pages to visit.");
    return;
  }
  let nextPage = pagesToVisit.pop();
  if (nextPage in pagesToVisit) {
    // We've already visited this page, so repeat the crawl.
    crawl();
  } else {
    // New page we haven't visited
    visitPage(nextPage, crawl);
  }
  console.log(pagesVisited);
}

function visitPage(url, callback) {
  // Add page to our set
  pagesVisited[url] = true;
  numPagesVisited++;

  // Make the reqeust
  console.log("Visiting page: " + url);
  request(url, (err, res, body) => {
    if (err) {
      console.log("ERROR: " + err);
    }
    // Check status code (200 is HTTP OK)
    console.log("status code: " + res.statusCode);
    if (res.statusCode !== 200) {
      callback();
      return;
    }
    // Parse the document body
    let $ = cheerio.load(body);
    let isWordFound = searchForWord($, SEARCH_WORD);
    if (isWordFound) {
      console.log('Word ' + SEARCH_WORD + ' found at page ' + url);
    } else {
      collectInternalLinks($);
      // In this short program, our callback is just calling crawl()
      callback();
    }
  });
}

function searchForWord($, word) {
  let bodyText = $('html > body').text();
  return(bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1);
}

function collectInternalLinks($) {
  let allRelativeLinks = [];
  let allAbsoluteLinks = [];

  let relativeLinks = $("a[href^='/']");
  relativeLinks.each(() => { allRelativeLinks.push($(this).attr('href')) });

  let absoluteLinks = $("a[href^='http']");
  absoluteLinks.each(() => { allAbsoluteLinks.push($(this).attr('href')) });

  console.log("Found " + allRelativeLinks.length + " relative links");
  console.log("Found " + allAbsoluteLinks.length + " absolute links");
}
