#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

//Asking the user his/her ID

const username=await inquirer.prompt([{
    type:"string",
    name:"ID",
    message:"Enter the user ID"
}])

//Asking the user his/her PIN

const userpin=await inquirer.prompt([{
    type:"number",
    name:"userpin",
    message:"Enter the user PIN"
}])

//Asking the user to select the account type

const Account=await inquirer.prompt([{
    type:"list",
    name:"account type",
    message:"select your account type",
    choices:["Current","Saving"]

}])

//the user will select he wants to withdraw cash or just check balance if he selects check account balance 

const functionalities=await inquirer.prompt([{
    type:"list",
    name:"functions",
    message:"select the function you want to perform",
    choices:["Cash withdrawl","Check Account Balance"]
}])

// let the user know his current balance

let Balance=Math.floor(Math.random()*1000000)
console.log(`Your current balance is ${Balance}`);

// if the user selects cash withdrawl giving him options if he wants to selcet fast cash or other amount


if (functionalities.functions== "Cash withdrawl"){
  const withdraw=await inquirer.prompt([{
    type:"list",
    name:"cash",
    message:"select your transaction",
    choices:["Fastcash", "other amount"]
  }])

// if the user selects fast cash giving him options how much amount he wants to withdraw.. once he selects the amount subtract it from the existing balance and show him the remaining balance

if (withdraw.cash=="Fastcash"){  
    const Cash=await inquirer.prompt([{
        type:"list",
        name:"cash",
        message:"select the amount you want to withdraw",
choices:["1000","2000","5000","10000","20000"] }])
let answer=Balance - Cash.cash
console.log(`your remaining balance is ${answer}`);}

// if the user selects other amount give him the option to enter the amount.once he enters the amount subtract it from the existing balance and show him the remaining balance

else if (withdraw.cash=="other amount"){
    const Cash=await inquirer.prompt([{
    type:"number",
    name:"otheramount",
    message:"Enter the amount you want to withdraw"}])
    let answer=Balance-Cash.otheramount
    console.log(`your remaing balance is ${answer}`);
          }

        }



