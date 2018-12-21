function readMore(btnId, articleId) {
	if (document.getElementById(btnId).innerHTML === "Read More") {
		document.getElementById(articleId).style.display = "block";
		document.getElementById(btnId).innerHTML = "Read Less";
	}
	else if (document.getElementById(btnId).innerHTML === "Read Less") {
		document.getElementById(articleId).style.display = "none";
		document.getElementById(btnId).innerHTML = "Read More";
	}
}

function ex1() {
	let str = "Hello developers!"
	let num = str.length;
	document.getElementById("answer1").innerHTML = "num = " + num;
}

function ex2() {
	let str = "Hello developers!";
	let ch = str[6];
	str[6] = "D";
	document.getElementById("answer2").innerHTML = "ch = " + ch + "<br>" + "str = " + str;
}

function ex2a() {
	let str = "Hello developers!";
	let ch = str.charAt(6);
	//str.charAt(6) = "D"; Gives an error
	document.getElementById("answer2a").innerHTML = "ch = " + ch;
}

function ex3() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let index = str.indexOf("developers");
	document.getElementById("answer3").innerHTML = "index = " + index;
}

function ex4() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let index = str.indexOf("developers", 20);
	document.getElementById("answer4").innerHTML = "index = " + index;
}

function ex5() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let index = str.lastIndexOf("developers");
	document.getElementById("answer5").innerHTML = "index = " + index;
}

function ex6() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let index = str.lastIndexOf("programers");
	document.getElementById("answer6").innerHTML = "index = " + index;
}

function ex7() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let index = str.search("developers");
	document.getElementById("answer7").innerHTML = "index = " + index; 
}

function ex7a() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let index = str.search("programers");
	document.getElementById("answer7a").innerHTML = "index = " + index; 
}

function ex8() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.slice(6, 28);
	document.getElementById("answer8").innerHTML = "newStr = " + newStr; 
}

function ex9() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.slice(-18, -7);
	document.getElementById("answer9").innerHTML = "newStr = " + newStr; 
}

function ex10() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.slice(6);
	document.getElementById("answer10").innerHTML = "newStr = " + newStr;
}

function ex11() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.slice(-18);
	document.getElementById("answer11").innerHTML = "newStr = " + newStr; 
}

function ex12() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.substr(6, 28);
	document.getElementById("answer12").innerHTML = "newStr = " + newStr; 
}

function ex13() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.substr(-18, 7);
	document.getElementById("answer13").innerHTML = "newStr = " + newStr;
}

function ex14() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.substr(6);
	document.getElementById("answer14").innerHTML = "newStr = " + newStr;
}

function ex15() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.substr(-18);
	document.getElementById("answer15").innerHTML = "newStr = " + newStr; 
}

function ex16() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.replace("developers", "programers");
	document.getElementById("answer16").innerHTML = "newStr = " + newStr; 
}

function ex17() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.toUpperCase();
	document.getElementById("answer17").innerHTML = "newStr = " + newStr; 
}

function ex18() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newStr = str.toLowerCase();
	document.getElementById("answer18").innerHTML = "newStr = " + newStr; 
}

function ex19() {
	let str1 = "Hello developers from Skopje";
	let str2 = "and developers form the rest of the world!";
	let newStr = str1.concat(" ", str2);
	document.getElementById("answer19").innerHTML = "newStr = " + newStr; 
}

function ex20() {
	let str = "        ... Hello     ...       developers     ...       !...       ";
	let newStr = str.trim();
	document.getElementById("answer20").innerHTML = "newStr = " + newStr; 
}

function ex21() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newArray = str.split();
	document.getElementById("answer21").innerHTML = "newArray.length = " + newArray.length + "<br>" + "newArray = [";
	for (let i = 0; i < newArray.length; i++) {
		if (i === newArray.length - 1) {
			document.getElementById("answer21").innerHTML += newArray[i] + "]"; 
		}
		else {
			document.getElementById("answer21").innerHTML += newArray[i] + ", ";	
		}
	}	
}

function ex22() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newArray = str.split("");
	document.getElementById("answer22").innerHTML = "newArray.length = " + newArray.length + "<br>" + "newArray = [";
	for (let i = 0; i < newArray.length; i++) {
		if (i === newArray.length - 1) {
			document.getElementById("answer22").innerHTML += newArray[i] + "]"; 
		}
		else {
			document.getElementById("answer22").innerHTML += newArray[i] + ", ";	
		}
	}	
}

function ex23() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newArray = str.split(" ");
	document.getElementById("answer23").innerHTML = "newArray.length = " + newArray.length + "<br>" + "newArray = [";
	for (let i = 0; i < newArray.length; i++) {
		if (i === newArray.length - 1) {
			document.getElementById("answer23").innerHTML += newArray[i] + "]"; 
		}
		else {
			document.getElementById("answer23").innerHTML += newArray[i] + ", ";	
		}
	}	
}

function ex24() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newArray = str.split("e");
	document.getElementById("answer24").innerHTML = "newArray.length = " + newArray.length + "<br>" + "newArray = [";
	for (let i = 0; i < newArray.length; i++) {
		if (i === newArray.length - 1) {
			document.getElementById("answer24").innerHTML += newArray[i] + "]"; 
		}
		else {
			document.getElementById("answer24").innerHTML += newArray[i] + ", ";	
		}
	}	
}

function ex25() {
	let str = "Hello developers from Skopje and developers form the rest of the world!";
	let newArray = str.split("elopers");
	document.getElementById("answer25").innerHTML = "newArray.length = " + newArray.length + "<br>" + "newArray = [";
	for (let i = 0; i < newArray.length; i++) {
		if (i === newArray.length - 1) {
			document.getElementById("answer25").innerHTML += newArray[i] + "]"; 
		}
		else {
			document.getElementById("answer25").innerHTML += newArray[i] + ", ";	
		}
	}	
}

					