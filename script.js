const status = document.getElementById("status");
const course = document.getElementById("course");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const changeCourseBtn = document.getElementById("changeCourseBtn");

loginBtn.addEventListener("click", function () {
    status.textContent = "Online";
    status.style.color = "green";
});

logoutBtn.addEventListener("click", function () {
    status.textContent = "Offline";
    status.style.color = "red";
});

changeCourseBtn.addEventListener("click", function () {
    course.textContent = "Advanced JavaScript";
     
});
