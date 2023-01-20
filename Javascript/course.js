fetch("../Json/courses.json")
  .then((response) => {
    return response.json();
  })
  .then((courses) => {
    const container = document.getElementById("container");

    courses.forEach((result) => {
      const content = `
      <div class="card">
        ${result.expired ? `<div class="expired" > <p> EXPIRED</p></div>` : ``}
          <div class="content" id="stuff">
            <img src=" ${result.img} " alt="img1">
            <div class="info">
              <p class= "coursename">${result.course}</p>
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
                ${
                  result.classes.length === 0
                    ? `<select name="sorting" id="sorting" disabled style="opacity:0.4" >
                      <option value="name">No Classes</option>
                    </select>`
                    : `<select name="sorting" id="sorting">
                      ${result.classes.map((c) => {
                        return `<option value="name">${c}</option>`;
                      })}
                    </select>`
                }
              <p>50 Students${
                result.startdates === ""
                  ? ``
                  : `<span>&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp</span>` +
                    result.startdates +
                    "-" +
                    result.enddates
              }</p>
            </div>
            <div class="favourite">
              <button id="favbtn${
                result.id
              }" class="deactive" onclick=fav(favbtn${result.id}) ></button>
            </div>  
            </div>
          <div class="cardbtns">
            <a href="#">
              <img src="/assets/icons/preview.svg" alt="preview" ${
                result.previewEnabled ? `` : `class =btwn-dis`
              } />
            </a>
            <a href="#">
              <img
                ${result.managecourseEnabled ? `` : `class =btwn-dis`}
                src="/assets/icons/manage_course.svg"
                alt="manage"
              />
            </a>
            <a href="#">
              <img
                ${result.gradesubmissionEnabled ? `` : `class =btwn-dis`}
                src="/assets/icons/grade_submissions.svg"
                alt="grade"
              />
            </a>
            <a href="#">
              <img src="/assets/icons/reports.svg" alt="report" 
              ${result.reportcourseEnabled ? `` : `class =btwn-dis`}/>
            </a>
          </div>
        </div>
      `;

      container.innerHTML += content;
    });
  });
