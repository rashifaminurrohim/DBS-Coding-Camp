let segitiga1 = '';
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    segitiga1 += j;
  }
  segitiga1 += '\n';
}
console.log(segitiga1)

let segitiga2 = '';
for (let i = 1; i <= 9; i++) {
  for (let j = 9; j >= i; j--) {
    segitiga2 += j;
  }
  segitiga2 += '\n';
}
console.log(segitiga2);

let segitiga3 = '';
for (let a = 1; a <= 9; a++) {
  for (let b = a; b <= 9; b++) {
    segitiga3 += '*';
  }
  for (let c = 1; c <= a; c++) {
    segitiga3 += c;
  }
  for (let d = 1; d <= a-1; d++) {
    segitiga3 += d;
  }
  for (let e = a; e <= 9; e++) {
    segitiga3 += '*';
  }
  segitiga3 += '\n';
}
console.log(segitiga3);

let segitiga4 = '';
for (let a = 1; a <= 9; a++) {
  for (let b = a; b <= 9; b++) {
    segitiga4 += '*';
  }
  for (let c = 1; c <= a; c++) {
    segitiga4 += c;
  }
  for (let d = 1; d <= a-1; d++) {
    segitiga4 += d;
  }
  for (let e = a; e <= 9; e++) {
    segitiga4 += '*';
  }
  segitiga4 += '\n';
}
for (let a = 1; a <= 9; a++) {
  for (let b = 1; b <= a; b++) {
    segitiga4 += '*';
  }
  for (let c = a; c <= 9; c++) {
    segitiga4 += c;
  }
  for (let d = a; d <= 9-1; d++) {
    segitiga4 += d;
  }
  for (let e = 1; e <= a; e++) {
    segitiga4 += '*';
  }
  segitiga4 += '\n';
}
console.log(segitiga4);

let catur = '';
for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= 20; b++) {
    if (b % 2 == 0) {
      catur += '#';
    } else {
      catur += '*';
    }
  }
  catur += '\n';
  for (let c = 1; c <= 20; c++) {
    if (c % 2 == 1) {
      catur += '#';
    } else {
      catur += '*';
    }
  }
  catur += '\n';
}
console.log(catur);