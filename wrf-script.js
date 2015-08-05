 function checkform() {
	var myForm = document.frmhot;
	if (myForm.status.value == "") {
		alert("Please select a timeframe status.");
		return false;
		myForm.status.focus();
	}
	if (myForm.line.value == "") {
		alert("Please select a line.");
		return false;
	}
	if (myForm.reason.value == "") {
		alert("Please select a reason code.");
		return false;
	}
	if (myForm.partnum.value == "") {
		alert("Please enter a part number.");
		return false;
	}
	if (myForm.badgescan.value == "") {
		alert("Please enter a badge number.");
		return false;
	}
	return true;
 }