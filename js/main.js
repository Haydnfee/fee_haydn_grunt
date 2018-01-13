(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('hello');

  function myFunc() {
    var theHeading = document.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  myFunc();

})();
