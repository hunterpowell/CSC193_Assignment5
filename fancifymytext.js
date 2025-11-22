// alert("Hello, World!");

function makeBigger() {
    // "alert" feels so violent lol
    // alert("Hello world!")
    document.getElementById("textArea").style.fontSize = "24pt";
}

function applyStyle() {
    var textArea = document.getElementById("textArea")
    var fancyRadio = document.getElementById("fancyShmancy")

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
    else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// this is a lot like a question i got in an interview recently lol
function addMoo() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;

    text = text.toUpperCase();
    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim() !== "") {
            var words = sentences[i].trim().split(" ");

            // only moo when we have something written!
            if (words.length > 0) {
                words[words.length - 1] = words[words.length - 1] + "-Moo";
            }

            sentences[i] = words.join(" ");
        }
    }

    textArea.value = sentences.join(".");
}
