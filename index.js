#! /usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const log = console.log;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;
const italic = chalk.italic;
const dim = chalk.dim;

welcome({
  title: `Massa Nja`,
  tagLine: pkgJSON.description,
  bgColor: `#6937FF`,
  color: `#000000`,
  bold: true,
  clear: true,
  version: pkgJSON.version
});

log(`${italic(`A certified MS Azure Solutions Architect and DevOps Platform Engineer with extensive experience
leading the design and implementation of robust,flexible and effective technical solutions for a
varied range of business problems.
Delivery- and customer-focused with a ‘can-do’ attitude complemented by a proven ability to make 
a hands-on contribution at all stages of software development. I am proactive in my approach to 
work and strive for excellence whether working alone or in a wider team environment.
In-depth understanding of Azure Solution Architecture, Azure Platform Automation and Environment 
Provisioning with an extensive range of programming, configuration and process skills - see below
for details.
A problem-solver with strong troubleshooting, technical, soft, verbal and written communication skills. 
Experienced in leading, owning and teamwork on epics in a cross-functional DevOps team.
An established professional with a sense of humour and a commitment to ongoing development for 
myself and the teams I work with.`)}

${twitterClr(` Twitter `)} ${dim(` https://twitter.com/leonjampa`)}
${githubClr(` Github  `)}  ${dim(`https://github.com/LeoNjampa`)}

`);