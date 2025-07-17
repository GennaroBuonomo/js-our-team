const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let cards = '';

for(let i=0; i<teamMembers.length; i++){

  const member = teamMembers[i];

  const {name, role, email, img} = member;

  cards +=`<div class="col-12 col-md-4">
        <div class="team-card">
          <img src="${img}" alt="Marco Bianchi">
          <div class="team-card-body">
            <h5>${name}</h5>
            <p>${role}</p>
            <a href="#">${email}</a>
          </div>
        </div>
      </div>`

}

teamContainer.innerHTML = cards;
  