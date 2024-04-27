// Function to ask Yes/No questions and return a valid response
function askYesNoQuestion(question) {
    const answer = prompt(question).trim().toLowerCase(); // Convert to lowercase and remove extra spaces

    if (answer === '') {
        return 'invalid'; // Handle empty input
    }

    if (answer === 'yes' || 'no') {
        return answer; // Valid response
    } else {
        return 'invalid'; // Any other input is considered invalid
    }
}

// Collect answers for three Yes/No questions
const questions = [
    "Do you like programming?",
    "Have you ever used JavaScript?",
    "Are you interested in web development?"
];

const answers = questions.map((question) => askYesNoQuestion(question)); // Get answers and put them in an array

// Get the section where we'll display the questions and answers
const qaSection = document.getElementById("questions-and-answers");

// Insert questions and answers into the section in a formatted way
let qaContent = "<h2>Responses to Yes/No Questions</h2>";

questions.forEach((question, index) => {
    const answer = answers[index];
    qaContent += `
        <div class="qa-item">
            <p><strong>Question ${index + 1}:</strong> ${question}</p>
            <p><strong>Answer:</strong> ${answer}</p>
        </div>
    `;
});

// Insert the content into the HTML section
qaSection.innerHTML = qaContent;
