/*
//Challenge 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight/markHeight ** 2;
const johnBMI = johnWeight/johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

//Challenge 2

if(markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI}!)`);
  } else {
    console.log(`John's(${johnBMI} is higher than Mark's(${markBMI})`);
}


// Challenge 3 
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas) {
	console.log('Dolphin win the tropthy trop🏆');
} else if(scoreKoalas > scoreDolphins ){
	console.log('Koalas win the tropthy trop🏆');
} else if(scoreDolphins === scoreKoalas) {
	console.log('Both are winners!');
}

//Bonus 1:
const scoreDolphins1 = (97 + 112 + 101) / 3;
const scoreKoalas1 = (109 + 95 + 123) / 3;
console.log(scoreDolphins1, scoreKoalas1);

if(scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= 100) {
	console.log('Dolphin win the tropthy trop🏆');
} else if(scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= 100){
	console.log('Koalas win the tropthy trop🏆');
} else if(scoreDolphins1 === scoreKoalas1) {
	console.log('Both are winners!');
}

//Bonus 2
const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 106) / 3;
console.log(scoreDolphins2, scoreKoalas2);

if(scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100) {
	console.log('Dolphin win the tropthy trop🏆');
} else if(scoreKoalas2 > scoreDolphins2 && scoreKoalas2 >= 100){
	console.log('Koalas win the tropthy trop🏆');
} else if(scoreDolphins2 === scoreKoalas2 && scoreDolphins2 >= 100 && scoreKoalas2 >= 100) {
	console.log('Both are winners!');
} else {
	console.log('No one wins a thropy (');
}


//test
const day = 'wednsday';

if(day === 'monday') {
	console.log('Plan my course structure');
} else if(day === 'tuesday') {
	console.log('Prepare theory videos');
} else if (day === 'wednsday' || day === 'thursday') {
	console.log('Write code examples');
} else if(day === 'friday') {
	console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday'){
	console.log('Enjoy the weeckend');
} else {
	console.log('Not a valid day');
}

//Challenge 4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill is ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

//Challenge 5


const calcAverage = (a,b,c) => (a + b + c) /3;
const scoreDolphins3 = calcAverage(44, 23, 71);
const scoreKoalas3 = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
	if (avgDolphins >= 2 * avgKoalas) {
		console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`);
	} else if(avgKoalas >= 2 * avgDolphins) {
		console.log(`Dolphins win(${avgKoalas} vs ${avgDolphins})`);
	} else {
		console.log('No team wins..!');
	}
}

checkWinner(scoreDolphins3, scoreKoalas3);

//Challenge 6

const calcTip = function(bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[2], bills[3] + tips[3]];


//Challenge 7

const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBMI: function() {
	 	this.bmi = this.mass / this.height ** 2;
	 	return this.bmi;
	}
};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBMI: function() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
	console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`);
} else {
	console.log(`${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`);
}

//Challenge 7
const billLoop= [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsLoop = [];
const totalsLoop = [];

for(let i = 0; i < billLoop.length; i++ ) {
	const tip = calcTip(billLoop[i]);
	tipsLoop.push(tip);
	totalsLoop.push(tip + billLoop[i]);
}

console.log(tipsLoop);
console.log(totalsLoop);

//Bonus:
const calcAverageLoop = function (arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i]; // sum = sum + arr[i];
	}
	return sum / arr.length;
};

console.log(calcAverageLoop([2,3,7]));
console.log(calcAverageLoop(totalsLoop));
console.log(calcAverageLoop(tipsLoop));


//Challenge 8
const calcTempAmplitudeNew = function (t1, t2) {
	const temps = t1.concat(t2);
	console.log(temps);

	let max = temps[0];
	let min = temps[0];

	for (let i = 0; i < temps.length; i++) {
		const curTemp = temps[i];
		if (typeof curTemp !== 'number') continue;

		if (curTemp > max) max = curTemp;
		if (curTemp < min) min = curTemp;
	}
	console.log(max, min);
	return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test data sets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:
- Data 1: [17, 21, 23]
- Data2:[12,5,-5,0,4]

------ Understanding the problem:
1. Array transformed to string separated by 3 dots
2. What is the X days? Answer: index + 1;
------ Breaking the problem in sub-tasks:
1. Transform this array inyo strings
2. Transform each element to strings with C;
3. Strings need to contain day (index + 1);
4. Add --- between elements at start and end of string
5. Log string to console
*/
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
	let str = '';
	for(let i = 0; i < arr.length; i++) {
		str += `${arr[i]}°C in ${i + 1} days ... `;
	}

	console.log('... ' + str);
};
printForecast(data2);

 */

/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and 'players2');
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players;
3. Create an array 'allPlayers' containing all players of both teams (22 players);
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic';
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2');
6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in);
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Bortmund',
    players: [
        [
            'Newuwer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akasnji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4.0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
const [players1, players2] = game.players;

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2)

//6
const printGoal = function (...players) {
    console.log(`${players.length} goals were scored`)
};
printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoal('Davies', 'Muller');
printGoal(...game.scored);

//7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');





