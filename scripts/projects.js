const projects = [
    {
        name: "DueIt",
        month: "September",
        year: "2023",
        description: "Organization through interaction",
        imgPath: "./icons/dueit.png",
        link: "https://devpost.com/software/just-another-file-organizer#updates",
    },
    {
        name: "PublicEye",
        month: "September",
        year: "2023",
        description: "Manage your shit",
        imgPath: "./icons/public-eye.png",
        link: "https://devpost.com/software/public-eye",
    },
    {
        name: "Jafo",
        month: "October",
        year: "2023",
        description: "Just another file organizer",
        imgPath: "./icons/jafo.png",
        link: "https://github.com/Ascensi0nn/jafo",
    }
]
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
    title.classList.add('dark')
    title.innerText = projects[i]['name'];

    const date = document.createElement('h5');
    date.innerText = projects[i]['month'] + ", " + projects[i]['year'];
    date.classList.add('dark');
    
    const description = document.createElement('p');
    description.innerText = projects[i]['description'];
    description.classList.add('dark');

    const link = document.createElement('a');
    link.innerText = 'link';
    link.href = projects[i]['link'];
    link.target = '_blank';
    link.style.color = 'var(--primary)';

    sideBar.appendChild(title);
    sideBar.appendChild(date);
    sideBar.appendChild(description);
    sideBar.appendChild(link);

    p.appendChild(img);
    p.appendChild(sideBar);
    projectHolder.appendChild(p);
}