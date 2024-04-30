#! /usr/bin/env node
                                ////////////////////// "Starting Project" ////////////////

import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";
import chalkAnimation from "chalk-animation";

// Display a welcome message with an animated box
console.log(
  chalk.bgYellow.white(`\n\t\t\t\t*Welcome To Student Management System*\n`)
);

// Function to display an animation and then stop it after 3 seconds
async function welcomeAnimation() {
  const startingAnimation = chalkAnimation.neon(
    boxen(`Student Management System\nProject 07\nBy\nAnas Hakeem`, {
      title: "*My Project*",
      titleAlignment: "center",
      textAlignment: "center",
      borderStyle: "double",
      borderColor: "red",
      // Set width to 40 characters
      width: 105,
    })
  );

  await new Promise((resolve) => setTimeout(resolve, 7000));

  startingAnimation.stop();
}

await welcomeAnimation();

// Function to prompt the user for student information
async function promptUser() {
  const studentInfo = await inquirer.prompt([
    {
      type: "input",
      name: "Name",
      message: chalk.bgRed.white(`Enter Student Name : `),
      validate: (value: string) =>
        value.trim() !== "" || chalk.bgYellow.red("Please enter a valid name."),
    },
    {
      type: "number",
      name: "Age",
      message: chalk.bgWhite.blue(`Enter Student Age : `),
      validate: (value: number) =>
        (!isNaN(value) && value >= 0 && value <= 150) ||
        chalk.bgRed.white("Please enter a valid age."),
    },
    {
      type: "input",
      name: "gender",
      message: chalk.bgYellow.gray(`Enter Student Gender : `),
      validate: (value: string) =>
        value.trim() !== "" ||
        chalk.bgWhite.red("Please enter a valid gender."),
    },
    {
      type: "input",
      name: "university",
      message: chalk.bgWhite.black(
        `Could You Please Give Me The University's Name : `
      ),
      validate: (value: string) =>
        value.trim() !== "" ||
        chalk.bgRed.black("Please enter a valid university name."),
    },
    {
      type: "input",
      name: "batch",
      message: chalk.bgGreen.white(`Enter Student Batch : `),
      validate: (value: string) =>
        value.trim() !== "" ||
        chalk.bgYellow.white("Please enter a valid batch."),
    },
    {
      type: "list",
      name: "courses",
      message: chalk.bgRed.white.underline.bold(
        "Please Select one Course or Exit"
      ),
      choices: [
        "Cloud Applied Generative AI",
        "Metaverse",
        "Artificial Intelligence",
        "Blockchain",
        "Cloud Native Computing",
        "Internet of Things",
        "Exit....",
      ],
    },
  ]);

  // If the user chooses to exit, display a message and return
  if (studentInfo.courses === "Exit....") {
    console.log(chalk.bgYellow.white.bold("Exiting The Program..."));
    return; // Exit the function
  }

  // Print student information with styling
  for (const [key, value] of Object.entries(studentInfo)) {
    console.log(
      chalk.red.underline.bold(key) +
        " : " +
        chalk.bgWhite.blueBright.italic(value)
    );
  }
}

promptUser().catch((error) =>
  console.error(chalk.bgRed.white.underline("An error occurred:", error))
);

////////////////////////// "Ending Project" /////////////////////////
