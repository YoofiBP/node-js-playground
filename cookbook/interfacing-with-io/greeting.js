//listen for user input
process.stdin.on("data", (data) => {
    const name = data.toString().trim().toUpperCase();
    if(name.length === 0){
        process.stderr.write('Error')
    }
    process.stdout.write(name);
})

