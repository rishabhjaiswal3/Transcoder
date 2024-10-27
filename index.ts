const { exec } = require('child_process');

// Function to execute a command and return a promise
const runCommand = (command, label) => {
  return new Promise((resolve, reject) => {
    const child = exec(command);

    // Listen for output and log it
    child.stdout.on('data', (data) => {
      console.log(`[${label}] ${data}`);
    });

    // Listen for error output
    child.stderr.on('data', (data) => {
      console.error(`===>[${label}] Error: ${data}`);
    });

    // Handle process completion
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Process exited with code: ${code}`));
      }
    });
  });
};

const makeQuality = async () => {
  try {
    console.log("Starting conversion to 360p...");
    await runCommand(`ffmpeg -i input.mp4 -vf "scale=640:360" -c:v libx264 -b:v 800k -r 30 -c:a aac -b:a 64k ./output/output_360p.mp4`, "360p");
    
    console.log("Starting conversion to 480p...");
    await runCommand(`ffmpeg -i input.mp4 -vf "scale=854:480" -c:v libx264 -b:v 1000k -r 24 -c:a aac -b:a 64k ./output/output_480p.mp4`, "480p");
    
    console.log("Starting conversion to 720p...");
    await runCommand(`ffmpeg -i input.mp4 -vf "scale=1280:720" -c:v libx264 -b:v 2500k -r 30 -c:a aac -b:a 96k ./output/output_720p.mp4`, "720p");
    
    console.log("Starting conversion to 1080p...");
    await runCommand(`ffmpeg -i input.mp4 -vf "scale=1920:1080" -c:v libx264 -b:v 5000k -r 30 -c:a aac -b:a 128k ./output/output_1080p.mp4`, "1080p");

    console.log("All conversions completed successfully!");
  } catch (err) {
    console.error("Error during video conversion:", err);
  }
};

exec('rm -rf output && mkdir output')
makeQuality();