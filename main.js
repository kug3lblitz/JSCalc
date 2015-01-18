"use strict";

var Overall=0.0, First=0.0, Second=0.0, Oper=null;

function Clear() {
  First=0.0;
  Second=0.0;
  Oper=null;
  Overall=0.0;
  document.getElementById("output").InnerHTML = "0.0";
}

function Calculate() {
	
	if (Oper === "add") {
		Overall = First + Second;
	} else if (Oper === "subtract") {
		Overall = First - Second;
	} else if (Oper === "divide") {
		Overall = First / Second;
	} else if (Oper === "mult") {
		Overall = First * Second;
	}
	return Overall;
}



// Shutup jshint
Calculate(10);

function Init() {
  Clear();
}

Init();

