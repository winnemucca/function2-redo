// $(document).on('ready', function() {

// 	var getName = function(object) {
// 		return object.name;

// 	}
// 	console.log(getName({name: 'Luisa', age: 25}));

// 	var totalLetters = function(string) {
	
// 		return string.join('').length;

// 	};
// 	console.log(totalLetters(['javascript', 'is', 'awesome']));


  
//   var keyValue = function(key, value) {
//   	var newObject = {};
//   	newObject[key]= value;
//   	return newObject;

//   }
//   console.log(keyValue('city','Denver'));
// });

// var negativeIndex = function(arr) {
// 	return arr[arr.length+i];

// }
// console.log(negativeIndex(['a','b','c','d'] )-2);

var sports = ['soccer', 'baseball','wrestling','rugby'];

var total = sports.push('football', 'swimming');

var also = sports.splice(1,0,'karate');


var nintendo = ['battle toads', 'mario bros.', 'ninja gaiden', 'zelda', 'duck shooting game'];


// result gives me ninja gaiden zelda
// var superNintendo = nintendo.slice(2,4);

// result gives me ninja gaiden zelda duck shooting game
// var superNintendo = nintendo.slice(-3);


// the result is ninja gaiden zelda duck shooting
// var superNintendo = nintendo.slice(2);


// var negativeIndex = function(string,negativeNumber) {
// 	return string[negativeNumber + string.length];

// }
// console.log(negativeIndex(['jerry', 'sarah', 'sandy'],-1));



// var removeM = function(string) {
// 	var newstring=[];
// 	// var seperate = string.split('');
// 	for(var i =0; i<string.length; i++) {
// 		if(string[i] !== 'm'.toLowerCase()) {
// 			newstring.push(string[i]);
// 		}
// 	}
// 	var superString= newstring.join('');
// 	return superString;

// }
// console.log(removeM('family'));
// console.log(removeM('mommy'));






// var removeM2 = function(string) {
// 	var newArray = [];
// 	for(var i=0;i <string.length; i++) {
// 		if(string[i]!== 'm'){
// 			newArray.push(string[i]);
// 		}
// 	}
// 		return newArray.join('');


// }
// console.log(removeM2('mommy'));


//the first way only gets the last name
// var printObject =function(name) {
// 	for( var food in name) {
// 	var answer= food +' is ' + name[food];
// 	}
// 	return answer;
// }
// console.log(printObject({firstName: 'pork', lastName: 'chops'}));



// var printObject2 = function (obj) {
// 	for(var i in obj) {
// 		console.log(i + ' is ' + obj[i]);
// 	}
// };
// printObject2({firstName: 'pork', lastName: 'chops'});


// var vowels = function(string) {
// 	var newWord =[];
// 	for(var i =0; i< string.length; i++) {
// 		if(string[i] === 'a'|| string[i]==='e' || string[i] === 'i' || string[i] === 'o'|| string[i]=== 'u') {
// 			newWord.push(string[i]);
// 		}
// 	}
// 			return newWord;

// }
// console.log(vowels('alabama'));
// console.log(vowels('kauyedauty'));


// var twins = function(list) {

// 	if(list.length % 2===1) {
// 		return false;
// 	}
// 	for(var i=0; i<list.length; i+=2) {
// 		if(list[i] !== list[i+1]) {
// 			return false;
// 		}
// 	}
// 	return true
// };
// console.log(twins(['a','a','b','b','c']));
// console.log(twins(['b','b']));


var or = function(bool) {
	for(var i =0; i<bool.length; i++) {
		if(bool[i] === 'true') {
			return true
		}
	}
	return false;
}
console.log(or(['false', 'false', 'true', 'false']));
console.log(or(['false']));
console.log(or([]));


function unique(sArray) {
	var uniques = []
	for (var i = 0; i < sArray.length; i++) {
		if($.inArray(sArray[i], uniques) === -1 ) {uniques.push(sArray[i])}
	};
	return uniques
}
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))



