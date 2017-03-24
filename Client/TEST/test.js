#!/usr/bin/env node

/*

    Just various testing code.. it will of course change over time... :-)
    
    
*/




var electron = require('electron-prebuilt');
var proc = require('child_process');

// will something similar to print /Users/maf/.../Electron
console.log(electron)

var doh = __dirname;
// spawn electron

// var ProjectPath = '"'+ __dirname + '/App/"';
// var ProjectPath = '/../../App/';
var ProjectPath = 'App/';

console.log(ProjectPath);
// console.log(cmdLIne)
// var child = proc.spawn(electron);
// var child = proc.spawn(electron+ ' ' + ProjectPath);
// var child = proc.spawn(electron+ ' "'+ __dirname + '/App/"');
// var child = proc.spawn(electron, '"'+ __dirname + '/App/"');
// var child = proc.spawn(electron,  ProjectPath);
var child = proc.spawn('electron' + ' ' + ProjectPath);
 
//     /media/bugz/WORK/PROJECTS FOLDER/S010../../../../App/

/*
// It just returns a path
var electronPath = require( 'electron-prebuilt' ) ;
var childProcess = require( 'child_process' ) ;


// Adjust the command line arguments: remove the "node <code.js>" part
var args = process.argv.slice( 2 ) ;  
// ... and insert the root path of our application (it's the parent directory)
// as the first argument
// args.unshift( __dirname + '/../' ) ;

// Run electron
// childProcess.spawn( electronPath , args , { stdio: 'inherit' } ) ;  
console.log(args)
childProcess.spawn( electronPath , args , { stdio: 'inherit' } ) ;
*/