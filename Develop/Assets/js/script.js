var saveBtnEl = $("saveBtn");


// add current day and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// add save button and when clicked on the text for that event is saved in local storage
function saveBtnEl () {
saveBtnEl.on("submit", function () {
		
		
var time = $(this).siblings(".hour").text();
var textInput = $(this).siblings(".plan").val();

$.each(textInput, function () {


// keep it from deleting on refesh
// save to local storage 

localStorage.setItem(time, textInput);
}
)})};


// color code timeblocks / link to css  using movement as current time and past time to indicate past present of future
function timeBlockColors() {
  let timeBlocks = $(".time-block");
	var today = $.each(".time-block"), function() {
	currentHour = parseInt(timeBlocks.getAttribute("data-time"))
	}
	
	if(today > currentHour) {
		$(this).addClass(".future");
	} else if (currentHour === today) {
		$(this).addClass(".present");
	}else {
		$(this).addClass(".past");
	}};



// colors to show up/ functional
