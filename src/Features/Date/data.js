const suffix = function (d=day) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}
const dateObj = new Date();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][dateObj.getMonth()];
const year = dateObj.getFullYear();
const day = dateObj.getDate();
const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dateObj.getDay()];
export{month,year,day,dayName,suffix,dateObj}