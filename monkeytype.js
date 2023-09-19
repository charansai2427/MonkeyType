const type = document.querySelector(".type");
const str = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum, totam veritatis eaque quia beatae pariatur harum? Temporibus soluta dolores hic eaque, praesentium, qui labore deserunt molestias ipsa iure option.",
  "Trees. It was something about the trees. The way they swayed with the wind in unison. The way they shaded the area around them. The sounds of their leaves in the wind and the creaks from the branches as they sway, The trees were making a statement that I just couldn't understand.",
  "Her hair was a tangled mess which she tried to make presentable by putting in a lump on the top of her head. It didn't really work although it was a valiant attempt. While most people simply noticed the tangled mess on top of her head, what most people failed to understand that within the tangles mess was an entirely new year. That was her secret. She kept worlds on top of her head.",
  "There was only half a worm in the apple. At first, Judy didn't quite comprehend what this meant. Why would only half a worm be living in an apple? she wondered. And then it dawned on her. Judy quickly spit out the bite she had just taken expecting to see the other half of the worm. It ended up being much worse than that.",
  "Brenda never wanted to be famous. While most of her friends dreamed about being famous, she could see the negative aspects that those who wanted to be famous seemed to ignore. The fact that you could never do anything in public without being mobbed and the complete lack of privacy was something that she never wanted to experience. She also had no desire to have strangers speculating about every aspect of her life and what each thing she did was supposed to mean. Brenda was perfectly happy with her anonymous life where she could do exactly as she wanted without anyone else giving a damn. Thus, her overnight Internet celebrity was not something she was thrilled about as her friends told her how lucky she was.",
  "It was a scrape that he hardly noticed. Sure, there was a bit of blood but it was minor compared to most of the other cuts and bruises he acquired on his adventures. There was no way he could know that the rock that produced the cut had alien genetic material on it that was now racing through his bloodstream. He felt perfectly normal and continued his adventure with no knowledge of what was about to happen to him.",
  "She had been an angel for coming up on 10 years and in all that time nobody had told her this was possible. The fact that it could ever happen never even entered her mind. Yet there she stood, with the undeniable evidence sitting on the ground before her. Angels could lose their wings."
];

const body = document.getElementById("body")
const randomStr = str[Math.floor(Math.random() * str.length)];
console.log(randomStr);
for (var i = 0; i < randomStr.length; i++) {
  type.innerHTML += `<letter class="letters">${randomStr[i]}</letter>`
}

var Arr = [];
body.addEventListener("keyup", (event) => {

  const lettersArr = document.querySelectorAll("letters");
  if (event.key == "Shift" || event.key == "Backspace" || event.key == "Delete" || event.key == "Insert" || event.key == "Ctrl" || event.key == "Alt" || event.key == "CapsLock" || event.key == "Tab") {
    Arr.pop();
    lettersArr[Arr.length].innerText = originalTextArr[Arr.length];
    return;
  }

  if (lettersArr[Arr.length].innerText !== event.key) lettersArr[Arr.length].style.color = "red"
  Arr.push(event.key);
  lettersArr[Arr.length].innerText = event.key;
  const regex = /^[a-zA-Z0-9',. ]/gm;
  if (event.key.match(regex)) {
    console.log(event.key);
  }
})
