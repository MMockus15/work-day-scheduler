var saveBtnEl = $(".saveBtn");



// add current day and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// add save button and when clicked on the text for that event is saved in local storage
saveBtnEl.on("click", function() {

	
	var time = $(this).siblings(".hour").text();
	var plan = $(this).siblings(".plan").val();	
	
	// save to local storage 
	localStorage.setItem(time, plan);
});


// color code timeblocks / past present and future
function timeBlockColors() {
	
	$(".time-block").each(function () {
		var timeBlock = $(this).attr('id');
		
	
	var currentHour = moment().hour();
	if(timeBlock > currentHour) {
		$(this).addClass(".future");
	} else if (currentHour === timeBlock) {
		$(this).addClass(".present");
	}else {
		$(this).addClass(".past");
	}
})};



// colors to show up/ functional
