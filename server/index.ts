import { spawn } from "child_process";

// This script acts as a bridge to run the Python Flask application
// when the "Run" button (npm run dev) is clicked.

console.log("Starting Python Flask application...");

const pythonProcess = spawn("python", ["app.py"], { 
  stdio: "inherit",
  shell: true 
});

pythonProcess.on("error", (err) => {
  console.error("Failed to start Python process:", err);
});

pythonProcess.on("close", (code) => {
  console.log(`Python process exited with code ${code}`);
  process.exit(code ?? 0);
});

// Handle termination signals to kill the Python process
const cleanup = () => {
  pythonProcess.kill();
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
