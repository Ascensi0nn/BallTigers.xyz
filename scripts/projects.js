const project1 = {
    name: "DueIt",
    month: "September",
    year: "2023",
    description: "Organization through interaction",
    imgPath: "../icons/dueit.png",
    link: "https://devpost.com/software/just-another-file-organizer#updates",
};
const project2 = {
    name: "PublicEye",
    month: "September",
    year: "2023",
    description: "i see you",
    imgPath: "../icons/public-eye.png",
    link: "https://devpost.com/software/public-eye",
};
const project3 = {
    name: "Jafo",
    month: "October",
    year: "2023",
    description: "Just another file organizer",
    imgPath: "../icons/jafo.png",
    link: "https://github.com/Ascensi0nn/jafo",
}

const projects = [project1, project2, project3]
const projectHolder = document.getElementById('project-holder')

function createHorizontalBar() {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    projectHolder.appendChild(bar);
}

for (let i = 0; i < projects.length; i++) {
    createHorizontalBar();

    const p = document.createElement('div');
    p.style.display = 'flex';
    p.style.justifyContent = 'space-evenly';
    if (i % 2 == 0) { p.style.flexDirection = "row"; }
    else { p.style.flexDirection = "row-reverse"; }

    const img = document.createElement('img');
    img.src = projects[i]['imgPath'];
    img.style.height = '35vh';
    img.style.borderRadius = '2rem';

    const sideBar = document.createElement('div');
    sideBar.style.display = 'flex';
    sideBar.style.flexDirection = 'column';
    sideBar.style.alignItems = 'center';

    const title = document.createElement('h2');
    title.style.marginBottom = '0px';
    title.classList.add('light')
    title.innerText = projects[i]['name'];

    const date = document.createElement('h5');
    date.innerText = projects[i]['month'] + ", " + projects[i]['year'];
    date.classList.add('light');
    
    const description = document.createElement('p');
    description.innerText = projects[i]['description'];
    description.classList.add('light');

    sideBar.appendChild(title);
    sideBar.appendChild(date);
    sideBar.appendChild(description);

    p.appendChild(img);
    p.appendChild(sideBar);
    projectHolder.appendChild(p);
}