# How to get a server up
## // are comments.
set the following to your index.js:

```
const readline = require('readline');
const { spawn } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const command = spawn('bash', ['-c', line]); // Spawn a bash shell and execute the line

  command.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  command.stderr.on('data', (data) => {
    console.error(data.toString());
  });
});
```


restart your server, and use the console to type the following commands

```
curl https://download.java.net/java/GA/jdk21.0.2/f2283984656d49d69e91c558476027ac/13/GPL/openjdk-21.0.2_linux-x64_bin.tar.gz -o java.tar.gz
```
// wait like 20 seconds for it to download
```
tar -xf java.tar.gz
```
// wait like 5 seconds if you want to be safe

```
rm -rf java.tar.gz
```
```
jdk-21.0.2/bin/java --version
```
// this is to verify it worked, you should see an output saying openjdk and stuff
```
mkdir server
```
```
curl https://api.papermc.io/v2/projects/paper/versions/1.20.6/builds/147/downloads/paper-1.20.6-147.jar -o server/server.jar
```
// get however much ram your server has, say 16gb, and subtract one or two, and multiply it by 1024 to get the M
// so 16gb turns into 15gb turns into 15360
// replace RAM_USAGEwith that number
```
cd server && ../jdk-21.0.2/bin/java -XmsRAM_USAGEM -XmxRAM_USAGEM -jar server.jar --nogui
```
// wait until it mentions accepting the eula
```
rm server/eula.txt
```
```
echo 'eula=true' > server/eula.txt
```

// COPY THE PART AFTER THE : IN YOUR IP
// OPEN FILES
// GO TO SERVER
// OPEN server.properties
// FIND server-port
// CHANGE IT TO THE PART AFTER THE : IN YOUR IP
```
cd server && ../jdk-21.0.2/bin/java -XmsRAM_USAGEM -XmxRAM_USAGEM -jar server.jar --nogui
```
// use the address to connect to your server
// this is also the script you need to run to get the server up everytime you restart your server


# How to make yourself OP
Go into the file manager
Go to server > ops.json
replace the file with this
```
[
  {
    "uuid": "your-minecraft-uuid (get from namemc or smth)",
    "name": "your_username",
    "level": 4,
    "bypassesPlayerLimit": false
  }
]
```

# How to add plugins
Firstly, find a plugin you want to add and download it
Go to the file manager
Go to server > plugins
Upload the .jar file
Restart your server, and run the startup script determined.
