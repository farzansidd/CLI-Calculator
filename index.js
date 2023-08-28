import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import showBanner from "node-banner";
// import { start } from "repl";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 5000);
    });
};
async function welcome() {
    let showbanner = await showBanner(`Develop By Farzan`);
    let rainbowTitle = chalkAnimation.neon(`Let's start calculations`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function askQuestion() {
    await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division",],
        },
        {
            type: "number",
            name: "num01",
            message: "Enter Your First Number",
        },
        {
            type: "number",
            name: "num02",
            message: "Enter Your Second Number",
        },
    ])
        .then((answer) => {
        if (answer.operator == "Addition") {
            console.log(`${answer.num01} + ${answer.num02} = ${answer.num01 + answer.num02}`);
        }
        else if (answer.operator == "Subtraction") {
            console.log(`${answer.num01} - ${answer.num02} = ${answer.num01 - answer.num02}`);
        }
        else if (answer.operator == "Multiplication") {
            console.log(`${answer.num01} * ${answer.num02} = ${answer.num01 * answer.num02}`);
        }
        else if (answer.operator == "Division") {
            console.log(`${answer.num01} / ${answer.num02} = ${answer.num01 / answer.num02}`);
        }
    });
}
async function startagain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press Y or N:",
        });
    } while (again.restart == `y` || again.restart == `Y` || again.restart == `Yes` || again.restart == `YES` || again.restart == `yes`);
}
startagain();
