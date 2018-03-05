// // Output a prompt
process.stdout.write('prompt > ');

// // The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd==="pwd") {
    process.stdout.write(process.cwd());
  } else if (cmd=== 'date') {
      const time=new Date();
  
    process.stdout.write(time.toString());
  }

  process.stdout.write('\nprompt > ');

});

