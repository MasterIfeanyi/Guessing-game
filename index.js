const readline = require("readline");


// username
let username;

// score
let score = 0;

// level
let level = 1;

// range
let range = 1;

// function for range
const rangeFunc = (num) => {
    return Math.round(Math.random() * num) + 1;
}

// random number 
let randomNumber = rangeFunc(range);


// create instance of readline
const terminal = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

// ask for userName
const getInput = async () =>  {
    return new Promise((resolve, reject) => {
        terminal.question("Please enter your username: ", (userInput) => {
            username = userInput;
        });
        resolve();
    })
}


const question1 = () => {
  return new Promise((resolve, reject) => {
    terminal.question('Enter your username: ', (userInput) => {
        username = userInput;
        console.log(username);
        
        if (!userInput) {
            getInput();
        }

        resolve();
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {

    terminal.setPrompt('Guess the number: ');
    terminal.prompt()
    terminal.on('line', (userInput) => {

        const userInputNum = parseInt(userInput)

        if (userInputNum === randomNumber) {
            score++;
            range++;
            level++;
            randomNumber = rangeFunc(range);
            console.log(`W I N N E R ! ! !,  ${username} \n Score: ${score} \n Level ${level} \n ${switchRange(level)}`);
        }

        terminal.prompt();

        if (level === 4) {
            console.log('G A M E  O V E R ! ! !');
            process.exit(0);
        }

        resolve();
    })
  })
}

const main = async () => {
    await question1();
    await question2();
}


main();


terminal.on('close', function()
{
  console.log('G O O D B Y E :(')
  process.exit(1);
});


const switchRange = (num) => {
    switch (num) {
        case 2: 
            return `Now guess between 1 and ${num+1}`;
        case 3:
            return `Now guess between 1 and ${num+1}`;
        default:
            return ``
    }
}

