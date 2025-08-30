export async function asyncDelay(ms: number = 0, verbose = false) {
  if (ms <= 0) return;

  if (verbose) {
    console.log(`Delay for ${ms / 1000}s`);
  }

  await new Promise((resolve) => setTimeout(resolve, ms));
}
