document.addEventListener("DOMContentLoaded", function () {
    // Floating Hearts Animation
    const heartContainer = document.createElement("div");
    heartContainer.id = "heart-container";
    document.body.appendChild(heartContainer);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);

    // Music Player Functionality
    const music = document.getElementById("bg-music");
    const musicControl = document.getElementById("music-control");
    document.getElementById('backgroundMusic').volume = 0.5; // Adjust volume to your liking (0.0 to 1.0)

    musicControl.addEventListener("click", function () {
        if (music.paused) {
            music.play().then(() => {
                musicControl.textContent = "Pause Music 🎵";
            }).catch(error => {
                console.error("Music playback failed:", error);
                alert("Music playback failed. Please check browser settings and allow audio playback.");
            });
        } else {
            music.pause();
            musicControl.textContent = "Play Music 🎵";
        }
    });

    // Love Quiz Logic
    function showAnswer(correct) {
        const answerElement = document.getElementById("quiz-answer");
        answerElement.textContent = correct ? "Of course you do! 💕" : "Haha, nice try! 😉";
        
        setTimeout(() => {
            goToPage(correct ? 'next-page.html' : 'try-again.html');
        }, 2000);
    }

    document.querySelector(".quiz button:nth-child(2)").addEventListener("click", function () {
        showAnswer(true);
    });

    document.querySelector(".quiz button:nth-child(3)").addEventListener("click", function () {
        showAnswer(false);
    });

    // Surprise Message Logic
    document.getElementById("surprise-btn").addEventListener("click", function () {
        document.getElementById("surprise-message").classList.remove("hidden");
    });
});

// Page Navigation
function goToPage(page) {
    window.location.href = page;
}

// Quiz Scoring Logic
function checkQuiz() {
    let score = 0;

    const answer1 = document.querySelector('input[name="question1"]:checked');
    const answer2 = document.querySelector('input[name="question2"]:checked');
    const answer3 = document.querySelector('input[name="question3"]:checked');

    if (answer1 && answer1.value === "2019") score++;
    if (answer2 && answer2.value === "restaurant") score++;
    if (answer3 && answer3.value === "red") score++;

    const resultText = score === 3 ? "You're a true love expert!" : `You scored ${score}/3. Try again!`;
    document.getElementById('quizResult').innerText = resultText;
}
document.addEventListener("DOMContentLoaded", function () {
    // Floating Hearts Animation
    const heartContainer = document.createElement("div");
    heartContainer.id = "heart-container";
    document.body.appendChild(heartContainer);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);

    // Music Player Functionality
    const music = document.getElementById("bg-music");
    const musicControl = document.getElementById("music-control");
    document.getElementById('bg-music').volume = 0.5; // Adjust volume to your liking (0.0 to 1.0)

    musicControl.addEventListener("click", function () {
        if (music.paused) {
            music.play().then(() => {
                musicControl.textContent = "Pause Music 🎵";
            }).catch(error => {
                console.error("Music playback failed:", error);
                alert("Music playback failed. Please check browser settings and allow audio playback.");
            });
        } else {
            music.pause();
            musicControl.textContent = "Play Music 🎵";
        }
    });

    // Love Quiz Logic (Updated)
    let currentQuestion = 0;
    const questions = [
        { question: "When did we meet?", options: ["2019", "2020", "2021"], correct: "2019" },
        { question: "Where was our first date?", options: ["A restaurant", "A park", "A beach"], correct: "A restaurant" },
        { question: "What is my favorite color?", options: ["Red", "Blue", "Green"], correct: "Red" },
        // Add 7 more questions here
    ];

    function loadQuestion() {
        const quizForm = document.getElementById("quizForm");
        const question = questions[currentQuestion];
        const questionDiv = document.querySelector(".question");

        questionDiv.innerHTML = `
            <label for="question">${question.question}</label><br>
            ${question.options.map((opt, index) => `
                <input type="radio" id="q${currentQuestion}${index}" name="question${currentQuestion}" value="${opt}">
                <label for="q${currentQuestion}${index}">${opt}</label><br>
            `).join("")}
        `;

        if (currentQuestion === questions.length - 1) {
            const submitButton = document.createElement("button");
            submitButton.textContent = "Submit Quiz";
            submitButton.onclick = checkQuiz;
            quizForm.appendChild(submitButton);
        }
    }

    function checkQuiz() {
        let score = 0;
        questions.forEach((q, i) => {
            const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
            if (selectedOption && selectedOption.value === q.correct) {
                score++;
            }
        });

        if (score === questions.length) {
            document.getElementById("quizResult").innerHTML = `
                Congratulations! You got all answers correct! ❤️ 
                <a href="love-letter.html" target="_blank">Read your Love Letter</a>
            `;
        } else {
            document.getElementById("quizResult").innerHTML = "Oops! You got some answers wrong. 😢";
        }
    }

    loadQuestion();
});
