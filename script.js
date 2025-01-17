for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i >= j) {
      document.write("*");
    }
  }
  document.write("<br>");
}

document.write("<br>");

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i <= j) {
      document.write("*");
    }
  }
  document.write("<br>");
}
