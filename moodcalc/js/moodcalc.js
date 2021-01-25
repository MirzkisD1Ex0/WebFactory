function PreloadAction() {
    DisplayDate();
    setInterval("RandomColor()", "300");
}

function DisplayDate() {
    var dateObject = new Date();
    var day = dateObject.getDay();
    switch (day) {
        default: day = "Doomday"; break;
        case 1: day = "Monday"; break;
        case 2: day = "Tuesday"; break;
        case 3: day = "Wednesday"; break;
        case 4: day = "Thursday"; break;
        case 5: day = "Friday"; break;
        case 6: day = "Saturday"; break;
        case 7: day = "Sunday"; break;
    }
    var year = dateObject.getFullYear();
    var month = (dateObject.getMonth() + 1) > 10 ? (dateObject.getMonth() + 1) : "0" + (dateObject.getMonth() + 1);
    var date = dateObject.getDate() > 10 ? dateObject.getDate() : "0" + dateObject.getDate();
    var hour = dateObject.getHours() > 10 ? dateObject.getHours() : "0" + dateObject.getHours();
    var minute = dateObject.getMinutes() > 10 ? dateObject.getMinutes() : "0" + dateObject.getMinutes();
    var second = dateObject.getSeconds() > 10 ? dateObject.getSeconds() : "0" + dateObject.getSeconds();

    document.getElementById("date").innerHTML =
        "< " + day + " / " + year + "." + month + "." + date + " / " + hour + ":" + minute + ":" + second + " >";
}

function RandomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    document.getElementById("moodCalcTitle").style.color = 'rgba(' + r + ',' + g + ',' + b + ',1.0)';
}

function CalcMood(min, max) {
    document.getElementById("mood").innerHTML = Math.floor(Math.random() * (max - min)) + min;
}


var app = new Vue({
    el: "#app",
    data() {

    },
    methods: {
        CalcMood: function (min, max) {
            document.getElementById("mood").innerHTML = Math.floor(Math.random() * (max - min)) + min;
        }
    }
})
