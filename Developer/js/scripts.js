// const languages = ["html","css","javascript","php","swift","java"];
// const needed_language = languages[2]

// console.log("مرحبا بك في برنامج توظيف المبرمجين")

// let name = prompt("ما اسمك؟");
// let age = parseInt(prompt("كم عمرك؟"));
// let experience = parseInt(prompt("كم عدد سنوات الخبرةالتي تمتلكها في مجال البرمجة"));

// console.log(":لغات البرمجة");
// // console.log("1."+ languages[0]);
// // console.log("2."+ languages[1]);
// // console.log("3."+ languages[2]);
// // console.log("4."+ languages[3]);
// // console.log("5."+ languages[4]);
// // console.log("6."+ languages[5]);
// for (let i = 0; i < languages.length; i++) {
//   console.log(i+"." + languages[i-1]);
    
// }

// let skill1 = prompt("اختر اللغة");

// let skill2 = prompt("اختر لغة اخرى");

// if (
//     age > 25 &&
//     age < 40 &&
//     experience > 3 &&
//     (skill1 == needed_language|| skill2 == needed_language)

// ) 
// {
//     console.log("مقبول");
// } else {
//     console.log("مرفوض!");
// }
// function logger(temp_array) {
//     for (let i = 0; i < temp_array.length; i++) {
//         console.log(temp_array[i]);
        
//     }
// }
// let array = [1, 2, 3]
// logger(array);

// let feh_temp = [32, 70, 99, 106];
// let cel_temp = [];

// function tocel(temp_array) {
// for (let i = 0; i < temp_array; i++) {
//    cel_temp.push((temp_array[i]-32) * (5 / 9)) ;
    
// }
//    return cel_temp 
// }
// let input_array = [32, 70, 99, 106];
// let result_array = [];
// function tocel(feh_temp) {
// for (let i = 0; i < feh_temp.length; i++) {
//    result_array.push((input_array[i] - 32) * (5 / 9));
    
// }
// return result_array;
// }
// console.log(tocel(input_array));

// let hot = [];
// let min_value = 30;
// function hottestdays(result_array, min_value) {
//     for (let i = 0; i < result_array.length; i++) {
//         if(result_array[i] > min_value) {
//       hot.push(result_array[1]);
//         }
        
//     }
//     return hot;
// }
// let feh_temp_array = [32, 70, 99, 106];
// let threshold = 70
//   hot =[];
//    result_array =[];
// function loghottesdays(input_array,min_value) {
// logger(tocel(hottestdays(input_array,min_value), result_array));

// }
// loghottesdays(feh_temp_array, threshold);
var a,b,c,sum,avg;
a=prompt("enter your quiz grade")
if (a>15) {
    alert("the quiz is out of 15!,refresh the page!")
}
b=prompt("enter your midterm exam grade")
if (a>25) {
    alert("the exam is out of 25!,refresh the page!")
}
c=prompt ("enter your final test's grade")
if (a>50) {
    alert("the exam is out of 50!,refresh the page!")
}
d=prompt(" enter your oral's test grade")
if (a>15) {
    alert("the quiz is out of 15!,refresh the page!")
}

sum=eval(a)+eval(b)+eval(c)+eval(d);
document.write("the sum of your grades is "+sum+"<br>");
avg= sum/105 * 100;
document.write("the percentage is " + "" + avg+"%");
if (avg>=90)
 {
    alert("CONGRAGULATIONS,you got an A,click ok to see your percentage");
 }
 else if (avg>=80) {
     alert("GREAT JOB, your grade is B,click ok to see your percentage");
 }
 else if (avg>=70) {
    alert("GOOD JOB, your grade is C,click ok to see your percentage");
}
else if (avg>=60) {
    alert("YOU PASSED, your grade is D,click ok to see your percentage");
}
else if (avg<60) {
    alert("YOU FAILED,YOUR GRADE IS (F),click ok to see your percentage");
}
  
    













// التمرين الثالث

