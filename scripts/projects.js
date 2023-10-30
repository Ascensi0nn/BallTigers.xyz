const project1 = {
    name: "DueIt",
    month: "September",
    year: "2023",
    description: "give your balls a tug",
};
const project2 = {
    name: "PublicEye",
    month: "September",
    year: "2023",
    description: "i see you",
};


const projects = [project1, project2]
const projectHolder = document.getElementById('project-holder')

for (let i = 0; i < projects.length; i++) {
    const p = document.createElement('div');
    const title = document.createElement('h3');
    title.classList.add('light')
    title.innerText = projects[i]['name'];
    const img = document.createElement('img');
    const date = document.createElement('p');
    const description = document.createElement('p');
    
    if (i % 2 == 0) {

    }
    else {

    }
    p.appendChild(title);
    p.appendChild(img);
    p.appendChild(date);
    p.appendChild(description);
    projectHolder.appendChild(p);
}