
// add current day and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// add in timeblock chart for standard business hours


// color code timeblocks / link to css  using movement as current time and past time to indicate past present of future
// manipulate with $(call in class or id)children().css("color", "yellow"); <can pull specific pieces/elements to change
// can use $(#).children().eq(integer to select which child).addclass("name"); to add classes if neded
// figure out how to link time to all of that

// click into timeblock to add an event


// add save button and when clicked on the text for that event is saved in local storage
// submit form = var for each form submission area, add handle form to submit (event)
// input: checked > grabs all inputs to create an array
// run loop $.each(var,functino(){
	// selected.push($(this).val()); 
// })
// "this" takes in input


// when the page is refereshed the said events persist