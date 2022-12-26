// 1.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// let studentNames = studentRecords.map((student) => student.name.toUpperCase());
// console.log(studentNames);

// 2.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// for (let i = 0; i < studentRecords.length; i++) {
//   let mark = studentRecords[i].marks;
//   if (mark > 50) {
//     console.log(studentRecords[i]);
//   }
// }

// 3.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// for (let i = 0; i < studentRecords.length; i++) {
//   let mark = studentRecords[i].marks;
//   let id = studentRecords[i].id;
//   if (mark > 50 && id > 120) {
//     console.log(studentRecords[i]);
//   }
// }

// 4.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// let sum = 0;
// for (let i = 0; i < studentRecords.length; i++) {
//   let mark = studentRecords[i].marks;
//   sum += mark;
// }
// console.log(sum);

// 5.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// for (let i = 0; i < studentRecords.length; i++) {
//   let mark = studentRecords[i].marks;
//   let name = studentRecords[i].name;
//   if (mark > 50) {
//     console.log(name);
//   }
// }

// 6.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// let sum = 0;
// for (let i = 0; i < studentRecords.length; i++) {
//   let mark = studentRecords[i].marks;
//   let id = studentRecords[i].id;
//   if (id > 120) {
//     sum += mark;
//   }
// }
// console.log(sum);

// 7.
// let studentRecords = [
//   { name: "John", id: 123, marks: 98 },
//   { name: "Baba", id: 101, marks: 23 },
//   { name: "yaga", id: 200, marks: 45 },
//   { name: "Wick", id: 115, marks: 75 },
// ];
// let sum = 0;
// for (let i = 0; i < studentRecords.length; i++) {
//   let mark = studentRecords[i].marks;
//   if (mark < 50) {
//     sum = mark + 15;
//     if (sum > 50) {
//       console.log(sum);
//     }
//   }
// }

// 8.
// let arr = [
//   {
//     name: "Jyoti",
//     class: "MCA",
//     rollNo: 21,
//   },
//   {
//     name: "Ram",
//     class: "MCA",
//     rollNo: 22,
//   },
//   {
//     name: "Shyam",
//     class: "MCA",
//     rollNo: 23,
//   },
//   {
//     name: "Girish",
//     class: "MCA",
//     rollNo: 24,
//   },
//   {
//     name: "Harshad",
//     class: "MCA",
//     rollNo: 25,
//   },
//   {
//     name: "Aniket",
//     class: "MCA",
//     rollNo: 26,
//   },
// ];
// console.log(arr);

// let obj = {
//   name: "Jyoti",
//   class: "MCA",
//   rollNo: 21,
// };
// const entries = Object.entries(obj);
// console.log(entries);
