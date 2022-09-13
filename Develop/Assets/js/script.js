
// add current day and date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// add in timeblock chart for standard business hours
// color code timeblocks to indicate past present of future
// click into timeblock to add an event
// add save button and when clicked on the text for that event is saved in local storage
// when the page is refereshed the saed events persist