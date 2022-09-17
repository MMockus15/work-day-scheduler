var saveBtnEl = $("saveBtn");

// add current day and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// color code timeblocks / link to css  using movement as current time and past time to indicate past present of future
function timeBlockColors() {
  let timeBlocks = document.querySelectorAll(".time-block");
  for (let timeBlocks of nodes ) {
	var today = 12;
	var currentHour = parInt(timeBlocks.getAttribute("data-time"));
	
	if(today > currentHour) {
		$(this).addClass("future");
	} else if (currentHour === today) {
		$(this).addClass("present");
	}else {
		$(this).addClass("past");
	}
	}};

// manipulate with $(call in class or id)children().css("color", "yellow"); <can pull specific pieces/elements to change
// can use $(#).children().eq(integer to select which child).addclass("name"); to add classes if neded


// add save button and when clicked on the text for that event is saved in local storage
saveBtnEl.on("submit", function () {
location.relaod()

var time = $(this).parent().attr("id");
var textInput = $(this).siblings("description").val();

localStorage.setItem(time, textInput);
});


// submit form = var for each form submission area, add handle form to submit (event)
// input: checked > grabs all inputs to create an array
// run loop $.each(var,functino(){
// selected.push($(this).val());
// })
// "this" takes in input
// when the page is refereshed the said events persist
