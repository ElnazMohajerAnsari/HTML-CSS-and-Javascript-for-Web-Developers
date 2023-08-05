(function () {
  var names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim",
  ];

  for (var n in names) {
    var firstLetter = names[n].charAt(0).toLowerCase();
    if (firstLetter === "j") {
      byeSpeaker(names[n]);
    } else {
      helloSpeaker(names[n]);
    }
  }
})();
