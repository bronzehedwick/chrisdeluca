#!/usr/bin/env node
'use strict';

const fs = require('fs');
const data = require('/Users/chris/Downloads/share.json');

// Utilities {{{

function getWeekOfMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstWeekday = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const offsetDate = 7 - firstWeekday;
    const daysAfterFirstWeek = lastDateOfMonth - offsetDate;
    const weeksInMonth = Math.ceil(daysAfterFirstWeek / 7) + 1;
    const noOfDaysAfterRemovingFirstWeek = date.getDate() - offsetDate;
    let week;
    if (noOfDaysAfterRemovingFirstWeek <= 0) {
        week = 1;
    } else if (noOfDaysAfterRemovingFirstWeek <= 7) {
        week = 2;
    } else if (noOfDaysAfterRemovingFirstWeek <= 14) {
        week = 3;
    } else if (noOfDaysAfterRemovingFirstWeek <= 21) {
        week = 4;
    } else if (weeksInMonth >= 5 && noOfDaysAfterRemovingFirstWeek <= 28) {
        week = 5;
    } else if (weeksInMonth === 6) {
        week = 6;
    }
    return week;
};

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

// }}}

const todaysDate = new Date();
const title = `Reading picks for week ${getWeekOfMonth(todaysDate)} of ${months[todaysDate.getMonth()]}, ${todaysDate.getFullYear()}`;

let links = '';
data.forEach(item => {
    links += `+ [${item.description}](${item.href})<br>${item.extended}` + '\n';
});

const fileContents = `+++
title = "${title}"
date = ${new Date(Date.now()).toISOString()}
categories = [ "Links" ]
+++

This is what I've been reading this past week.

<!--more-->

${links}

There it is, and here we are. Go forth.`;

fs.writeFile(`/Users/chris/Sites/chrisdeluca.me/content/article/${title.replace(',', '').toLowerCase().split(' ').join('-')}.md`, fileContents, err => {
    if (err) {
        return console.error(err);
    }

    console.log("The file was saved!");
});

// vim: foldmethod=marker
