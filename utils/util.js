const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')

}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function getDates(days, todate) {
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = dateLater(todate, i);
    dateArry.push(dateObj)
  }
  return dateArry;
}
function dateLater(dates, later) {
  let dateObj = {};
  let show_day = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat');
  let date = new Date(dates);
  date.setDate(date.getDate() + later);
  let day = date.getDay();
  let yearDate = date.getFullYear();
  let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);
  let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  dateObj.time = yearDate + '-' + month + '-' + dayFormate;
  dateObj.week = show_day[day];
  dateObj.index=day
  return dateObj;
}
function getWeekday(d){
  let arr=d.split('-');
  let result=[7,1,2,3,4,5,6];
  let date=new Date();
  date.setFullYear(arr[0]);
  date.setMonth(arr[1]);
  date.setDate(arr[2]);
  return result[date.getDay()];
}
function timeMinus(d1,d2){
  var strSeparator = "-"; //日期分隔符
       var oDate1;
       var oDate2;
       var iDays;
       oDate1= d1.split(strSeparator);
       oDate2= d2.split(strSeparator);
       var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
       var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
       iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24);
       return iDays;
}
module.exports = {
  formatDate: formatDate,
  getDates: getDates,
  getWeekday:getWeekday,
  timeMinus:timeMinus
}
