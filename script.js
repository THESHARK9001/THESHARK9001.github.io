function myFunction() {
    let myPrompt = prompt("Please enter the answer");
    switch(myPrompt){
        case "iloveyou":
            message = "<a style='color: white;' href='iloveyou.html'>You got the answer!</a>"
            break;
        case "iloveyou.html":
            message = "<a style='color: white;' href='iloveyou.html'>You got the answer!</a>"
            break;
      default:
          message = "Wrong answer! try again :3"
          break;
    }
    document.getElementById("PROMPT").innerHTML = message;
}