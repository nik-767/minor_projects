const quiz = [
    {
        question: "What is the most used programming language in 2021?",
        ans1text: "Java",
        ans2text: "C",
        ans3text: "Python",
        ans4text: "JavaScript",
        answer: "JavaScript",
    },
    {
        question: "Who is the President of US?",
        ans1text: "Joe Biden",
        ans2text: "Donald Trump",
        ans3text: "Barack Obama",
        ans4text: "George Bush",
        answer: "Joe Biden",
    },{
        question: "What does HTML stand for?",
        ans1text: "Hypertext Markup Language",
        ans2text: "Cascading Style Sheet",
        ans3text: "Jason Object Notation",
        ans4text: "Helicopters Terminals Motorboats Lamborginis",
        answer: "Hypertext Markup Language",
    },
    {
        question: "What year was JavaScript launched?",
        ans1text: "1996",
        ans2text: "1995",
        ans3text: "1994",
        ans4text: "none of the above",
        answer: "1995",

    }
]

const question = document.getElementById("heading");
console.log(question);
console.log(question.textContent)

const text_a = document.getElementById("text-a");
const text_b = document.getElementById("text-b");
const text_c = document.getElementById("text-c");
const text_d = document.getElementById("text-d");
console.log(text_a);
console.log(text_b);
console.log(text_c);
console.log(text_d);

console.log(text_a.textContent);
console.log(text_b.textContent);
console.log(text_c.textContent);
console.log(text_d.textContent);

const submit = document.getElementById("submit");
console.log(submit);