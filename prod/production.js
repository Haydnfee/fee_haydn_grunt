var myApp = {
  // we could put module-specific global variables here
  mainGreeting() {
    console.log('log1');
  }
};

myApp.module1 = {
  saySomething(message) {
    console.log(myApp.mainMessage, message, `log2`);
  }
};

myApp.module2 = {
  doSomethingElse() {
    console.log('log3');
  }
};