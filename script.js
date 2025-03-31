const scores = {
    "24F2100335": 40,
    "24F2100182": 80,
    "23F2100097": 40,
    "23F3000630": 20
};

function checkScore() {
    let rollNo = document.getElementById("rollNo").value.trim();
    
    if (!/^\d{2}F[123]\d{6}$/.test(rollNo)) {
        alert("Invalid Roll Number Format! Use YYF1XXXXXX, YYF2XXXXXX, or YYF3XXXXXX.");
        return;
    }

    let score = scores[rollNo] || [0, 20, 40, 80][Math.floor(Math.random() * 4)];

    document.getElementById("displayRollNo").innerText = rollNo;
    document.getElementById("displayScore").innerText = score;
    document.getElementById("result").style.display = "block";
}

function openQP() {
    window.open("https://drive.google.com/file/d/1BynZKJj2hfo4W_gG3Huw170vOzslFJTM/view?usp=drive_link", "_blank");
}
