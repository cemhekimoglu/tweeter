

function datePassed(time) {

  var diff = Date.now() - time
  var msSecond = 1000;
  var msMinute = msSecond * 60;
  var msHour = msMinute * 60;
  var msDay = msHour * 24;
  var msWeek = msDay * 7;
  var msMonth = msDay * 30;
  var msYear = msDay * 365;

  console.log(diff);

    if(diff > msYear) {
      return Math.floor(diff / msYear) + " years ago";
    } else if(diff > msMonth) {
      return Math.floor(diff / msMonth) + " months ago";
    } else if(diff > msWeek) {
      return Math.floor(diff / msWeek) + " weeks ago";
    } else if(diff > msDay) {
      return Math.floor(diff / msDay) + " days ago";
    } else if(diff > msHour) {
      return Math.floor(diff / msHour ) + " hours ago";
    } else if(diff > msMinute) {
      return Math.floor(diff / msMinute)  + " minutes ago";
    } else if(diff > msSecond) {
      return Math.floor(diff / msSecond)+ " seconds ago";
    } else {
      return "now";
    }
};
