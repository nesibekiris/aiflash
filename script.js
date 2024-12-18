
document.addEventListener('DOMContentLoaded', () => {
    const flashcardContainer = document.getElementById('flashcard-container');

    // Flashcard verileri
    const flashcards = [
        {
            question: "What is AI fairness?",
            answer: "Ensuring that AI systems make unbiased and equitable decisions."
        },
        {
            question: "Define AI transparency.",
            answer: "Making the inner workings of AI systems understandable and open to scrutiny."
        },
        {
            question: "What is bias in AI?",
            answer: "Bias occurs when AI systems produce unfair outcomes due to imbalanced data or flawed design."
        },
        {
            question: "Why is accountability important in AI?",
            answer: "It ensures humans remain responsible for the outcomes of AI decisions."
        },
        {
            question: "What is data privacy in AI?",
            answer: "Protecting user data from unauthorized access or misuse."
        },
        {
            question: "What is inclusivity in AI?",
            answer: "Designing AI systems that serve a diverse range of users fairly."
        }
    ];

    // Flashcard oluşturma
    flashcards.forEach(card => {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');

        const content = document.createElement('div');
        content.classList.add('flashcard-content');

        const front = document.createElement('div');
        front.classList.add('flashcard-front');
        front.innerText = card.question;

        const back = document.createElement('div');
        back.classList.add('flashcard-back');
        back.innerText = card.answer;

        content.appendChild(front);
        content.appendChild(back);
        flashcard.appendChild(content);

        // Tıklama ile flip animasyonu
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });

        flashcardContainer.appendChild(flashcard);
    });
});
