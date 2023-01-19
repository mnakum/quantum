// const courses = require("../Json/courses.json");
const courses = [];
fetch("../Json/courses.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.map((d) => {
      courses.push(d);
    });
    const container = document.getElementById("container");

    courses.forEach((result, idx) => {
      let disabled = result.classes === "No Classes" ? "disabled" : "";
      let btwnclass = result.managecourse ? "btwn" : "btwn-dis";
      console.log(btwnclass);

      const content = `
      <div class="card">
          ${
            result.expired ? `<div class="expired" > <p> EXPIRED</p></div>` : ``
          }
          <div class="content" id="stuff">
            <img src=" ${result.img} " alt="img1">
            <div class="info">
              <h3>${result.course}</h3>
              <p>${
                result.subject
              } <span>&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp</span>${result.grade}</p>
              <p><b style="color: #222222;">${
                result.units
              }</b>&nbspUnits&nbsp <b style="color: #222222;">${
        result.lessons
      }</b>&nbspLessons <b style="color: #222222;">${
        result.topics
      }</b>&nbspTopics   </p>
              <select name="sorting" id="sorting" ${disabled} >
                <option value="name">${result.classes}</option>
              </select>
              <p>50 Students<span>&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp</span>${
                result.dates
              }</p>
            </div>
            <div class="favourite">
              <img src="./assets/icons/favourite.svg" alt="">
            </div>
            </div>
          <div class="cardbtns">
            <a href="#">
              <img src="./assets/icons/preview.svg" alt="preview" />
            </a>
            <a href="#">
              <img
                class=${btwnclass}
                src="./assets/icons/manage_course.svg"
                alt="manage"
              />
            </a>
            <a href="#">
              <img
                class=${btwnclass}
                src="./assets/icons/grade_submissions.svg"
                alt="grade"
              />
            </a>
            <a href="#">
              <img src="./assets/icons/reports.svg" alt="report" />
            </a>
          </div>
        </div>
      `;

      container.innerHTML += content;
    });
  });
