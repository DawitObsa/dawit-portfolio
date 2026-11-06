const { execSync } = require('node:child_process');

const ports = [4000, 8080, 8081, 8082];

function log(message) {
  console.log(message);
}

function clearWindowsPort(port) {
  const command = `powershell -NoProfile -Command "(Get-NetTCPConnection -LocalPort ${port} -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique) | ForEach-Object { Stop-Process -Id $_ -Force; Write-Output \"Stopped PID $_ on port ${port}\" }"`;

  try {
    const output = execSync(command, { stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
    if (output) {
      log(output);
    } else {
      log(`Port ${port} was free.`);
    }
  } catch {
    log(`Port ${port} was free.`);
  }
}

function clearUnixPort(port) {
  const command = `lsof -ti tcp:${port} || fuser -k ${port}/tcp 2>/dev/null || true`;

  try {
    const output = execSync(command, { stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
    if (output) {
      log(`Cleared port ${port}: ${output}`);
    } else {
      log(`Port ${port} was free.`);
    }
  } catch {
    log(`Port ${port} was free.`);
  }
}

for (const port of ports) {
  if (process.platform === 'win32') {
    clearWindowsPort(port);
  } else {
    clearUnixPort(port);
  }
}
