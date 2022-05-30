function HelloWorld() {
  function timeout() {
    setTimeout(() => {
      console.log("timeout");
    }, 10000);
  }
  console.log("1");
  timeout();

  console.log("2");
  console.log("3");
  console.log("4");
}
HelloWorld();
