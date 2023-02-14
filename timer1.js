const args = process.argv.slice(2);

for (const arg of args) {
  const seconds = Number(arg);
  if (isNaN(seconds) || seconds < 1) {
    console.log(`Input Invalid: ${arg}`);
    continue;
  }
  setTimeout(() => {
    process.stdout.write("\x07"); // Beep sound
    console.log(`Timer done: ${seconds} seconds`);
  }, seconds * 1000);
}
