function* foo(index) {
    while (index < 2) {
      console.log(yield index++);
    }
  }
  
  const iterator = foo(0);
  
  console.log(iterator.next("Devolvio 0").value);
  // expected output: 0
  
  console.log(iterator.next("Devolvera 1").value);
  // expected output: 1

  function* bar(initialValue = 0, limit = 1) {
    for(let id = initialValue; id <= limit; id++){
        yield id;
    }
  }
  
  let generatopr = bar(0, 2);
  
  for(let value of generatopr){
      console.log(value)
  }

  // ALSO next function could recive a parameter that would be returned by yield statement on generator function line.