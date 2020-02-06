#!/usr/bin/env node
//@ts-check
'use strict'

//TODO: refactor to point less FP
//TODO: optimize imagemagic convert to screen size

import yargs from 'yargs'
import { execSync } from 'child_process'
import path from 'path'
import R from 'ramda'
import createArray from './createArray.js'

const { TYPE, DIR } = parseArguments()
// console.log(TYPE, DIR)

main()

function main () {
  let stdout
  try {
    stdout = readDirectory(TYPE, escape(DIR))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
  // console.log(stdout.toString())
  const files = getFiles(stdout.toString())

  let noOfPages = files.length
  let padLength = String(noOfPages).length
  const pageNumbers = createArray(noOfPages, (_ , n) => String(n + 1).padStart(padLength, '0'))

  // console.log(/* files,  */pages, pageNumbers)

  const dirOut = path.dirname(fst(fst(files)))
  // console.log(dirOut)
  let commands = R.zipWith(([file1, file2], n) =>
    {
      let cmd = ``
      if (!file2) {
        cmd = `cp ${file1} ${dirOut}/page${n}.${TYPE}`
      } else {
        cmd = `convert +append ${file1} ${file2} ${dirOut}/page${n}.${TYPE}`
      }
      return cmd
    },
    files,
    pageNumbers)

  // if (pageNumbers.length % 2 === 1) commands = commands.slice(0, -1)

  // console.log(commands)
  R.forEach(cmd => execSync(cmd), commands)
}

function getFiles (dirContent) {
  const files = dirContent.slice(0, -1).split('\n')
  return groupPairs(R.groupWith)(R.map(escape, files))
}

function groupPairs (f, c = 0) {
  return list => f(() => ++c % 2 === 1, list)
}

function parseArguments () {
  const argv = yargs
    .usage(
`Usage:
  node --experimental-modules $0 [-t|--type FILE_EXTENSION] PATH

  FILE_EXTENSION: Default is jpg but you can specify anything that ImageMagick support.

  PATH: The path to the folder which contains your images.`)
    .alias('t', 'type')
    .default('t', 'jpg')
    .demandCommand(1)
    .version()
    .argv

  return {
    TYPE: argv.type || 'jpg',
    DIR: path.resolve(
      process.cwd(),
      path.normalize(fst(argv._)))
  }
}

function fst (list) {
  return list && list[0]
}

function escape (path) {
  return path.replace(/[\s\(\)]/g, '\\$&')
}

function sleep (duration) {
  setTimeout(()=>{}, duration)
}

function readDirectory (type, directory) {
  return execSync(`ls ${directory}/*.${type}`)
}
