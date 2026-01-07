function checkage(age) {
  if (age > 18) {
    console.log("Adult");
  } else {
    console.log("minor");
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  console.log(`Table of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("------------");
}

checkage(19);
