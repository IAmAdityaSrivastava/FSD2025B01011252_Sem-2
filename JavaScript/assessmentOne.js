let students=[];
function addStudent() {
    let name=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    let math=Number(document.getElementById("math").value);
    let science=Number(document.getElementById("science").value);
    let english=Number(document.getElementById("english").value);
    let student={name:name,roll:roll,marks:{math:math,science:science,english:english}};
    students.push(student);
    alert("Student Added!");
}
function displayStudents() {
    let output="<h3>All Students</h3>";
    for(let s of students) {
        output+=`Name:${s.name},Roll:${s.roll},Math:${s.marks.math},Science:${s.marks.science},English:${s.marks.english}<br>`;
    }
    document.getElementById("output").innerHTML=output;
}
function calculateTotals() {
    let output="<h3>Total Marks</h3>";
    for(let s of students) {
        let total=s.marks.math+s.marks.science+s.marks.english;
        output+=`${s.name}(Roll${s.roll})-Total:${total}<br>`;
    }
    document.getElementById("output").innerHTML=output;
}
function calculateAverage() {
    let output="<h3>Average Marks</h3>";
    for(let s of students) {
        let total=s.marks.math+s.marks.science+s.marks.english;
        let avg=total/3;
        output+=`${s.name}-Average:${avg.toFixed(2)}<br>`;
    }
    document.getElementById("output").innerHTML=output;
}
function showTopStudents() {
    let output="<h3>Top Students(Avg > 80)</h3>";
    for(let s of students) {
        let avg=(s.marks.math+s.marks.science+s.marks.english)/3;
        if(avg>80) {
            output+=`${s.name}-Avg:${avg.toFixed(2)}<br>`;
        }
    }
    document.getElementById("output").innerHTML=output;
}
function showFailedStudents() {
    let output="<h3>Failed Students(Avg < 40)</h3>";
    for(let s of students) {
        let avg=(s.marks.math+s.marks.science+s.marks.english)/3;
        if(avg<40) {
            output+=`${s.name}-Avg: ${avg.toFixed(2)}<br>`;
        }
    }
    document.getElementById("output").innerHTML=output;
}
function countStudents() {
    document.getElementById("output").innerHTML=`<h3>Total Students: ${students.length}</h3>`;
}