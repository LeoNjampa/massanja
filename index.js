#! /usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
  title: `Welcome to MassaNja CLI:`,
  tagLine: pkgJSON.description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
  version: pkgJSON.version
});

console.log(`
Leo Njampa - Platform Engineer

A certified MS Azure Solutions Architect and DevOps Platform Engineer with extensive experience
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
myself and the teams I work with.

`);