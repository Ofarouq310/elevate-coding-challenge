const printPrime = (a, b) => {
  for (let i = a + 1; i < b; i++){
    let flag = false;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = true;
            break;
        }
    }

    if (flag == false) {
        console.log(i);
    }
}
}

printPrime(7,20);
