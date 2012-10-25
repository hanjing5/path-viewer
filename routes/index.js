
/*
 * GET home page.
 */



exports.index = function(req, res){
  // http://nodejs.org/api.html#_child_processes
  // executes `pwd`
var express = require('express');
var app = express();


// http://nodejs.org/api.html#_child_processes
var sys = require('util')
var exec = require('child_process').exec;
var child;

var builds;
// executes `pwd`
var shell_cmd = "ls -l .";
child = exec(shell_cmd, function (error, stdout, stderr) {
  builds = stdout;
  var tmp = builds.split("\n");
  for (var i=0;i<tmp.length;i++)
  {
    var subtmp = tmp[i].split(" ");
    var new_tmp = "";
    tmp[i] = subtmp;
  }

  builds = tmp.join("");
  builds = "<html><head><style>h4{color: #009933}</style></head><body><table>" + builds + "</table></body></html>";


  console.log('builds: ' + builds);
  sys.print('stdout: ' + stdout);
  //sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
  //console.log('builds: ' + builds);
  //console.log('child: ' + child.stdout);
  res.render('index', { title: 'Build Viewer', results: builds, tmp: tmp });
});
//builds = "adsjfalkjfw";

};
