class Stopwatch {
  constructor(display) {
    
    this.display = display;
    this.reset();
    this.print(this.times);
  }

  shot() {
    let timeshot = this.format(this.times);
    let item = document.createElement("li");
    item.innerHTML = timeshot;
    if (resultsList.children.length > 9) {
        var ask = confirm('To much results. Do You want to clear resuls list?');
        console.log(ask);
        if (ask) this.clear();
      }
    else resultsList.appendChild(item);
  }
  clear() {
    resultsList.innerHTML = "";
  }
}

const stopwatch = new Stopwatch(document.querySelector(".stopwatch"));


stopButton.addEventListener("click", () => stopwatch.stop()); //dlaczego nie samo: stopwatch.stop?
stopwatch.display.addEventListener("click", () => stopwatch.shot());
resultsList.addEventListener("click", stopwatch.clear);