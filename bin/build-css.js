#!/usr/bin/env node

var compile = require('css-whitespace')
var fs = require('fs-extra')
var rework = require('rework')
var nomnom = require('nomnom')

var opts = nomnom
  .option('entry', {
    abbr: 'e',
    required: true,
    help: 'Entry point of the css file.'
  })
  .option('outfile', {
    abbr: 'o',
    help: 'Where to save parsed css.'
  })
  .option('watch', {
    abbr: 'w',
    help: 'Watch css files for changes.'
  })
  .parse()

function write(string) {
  if (opts.outfile) return fs.writeFile(opts.outfile, string)
  return process.stdout.write(string + '\n')
}

var css = rework(compile(fs.readFileSync(opts.entry, 'utf8')))

write(css)

if (opts.outfile) console.log('CSS written to ' + opts.outfile + '!')
