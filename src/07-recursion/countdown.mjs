function countdown(num) {
  if (num <= 0) {
    console.info("All done!");
    return;
  }

  console.log(num);
  return countdown(--num);
}

export { countdown };
