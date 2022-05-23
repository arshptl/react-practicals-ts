// fucntion to get current year, month, date, and time. Converts into an array and returns
export const getDate = () => {
    //create an object first to indicate what values you want to output
    var today = new Date();
    var options = {
        weekday: "long", //to display the full name of the day, you can use short to indicate an abbreviation of the day
        day: "numeric",
        month: "short", //to display the full name of the month
        year: "numeric"
    }
    //indicate the language you want it in first then use the options object for your values
    var sDay = today.toLocaleString("en-US", options);
    let newString = sDay.replace(/,/g, '');
    const dateArray = newString.split(' ');
    return dateArray;
}

// function to get the current dateTime
export const getCurTimeStamp = () => {
    var curDate = new Date();
    console.log(curDate);
    return curDate;
}