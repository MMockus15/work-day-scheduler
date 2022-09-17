var saveBtnEl = $("saveBtn");
var textInputEl = $(".plan").text;
var timeEl = $(".hour");


// add current day and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// add save button and when clicked on the text for that event is saved in local storage

// saveBtnEl.on("click", function() {
// 	here define that text and time 
// 	and then save it to local storage 
// 	localStorage.setItem(time, text);
// 	]

saveBtnEl.on("click", function() {

	var time = timeEl.val();
	console.log(time);
	var textInput = textInputEl.val();	



// keep it from deleting on refesh


// save to local storage 
localStorage.setItem(time, textInput);

});


// color code timeblocks / link to css  using movement as current time and past time to indicate past present of future
// function timeBlockColors() {
//   let timeBlocks = $(".time-block");
// 	var today = $.each(".time-block"), function() {
// 	currentHour = parseInt(timeBlocks.getAttribute("data-time"))
// 	}
	
// 	if(today > currentHour) {
// 		$(this).addClass(".future");
// 	} else if (currentHour === today) {
// 		$(this).addClass(".present");
// 	}else {
// 		$(this).addClass(".past");
// 	}};



// colors to show up/ functional
