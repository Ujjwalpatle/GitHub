// Example JavaScript to dynamically add projects
const projectList = document.getElementById('project-list');

const projects = [
    { name: 'Project 1', description: 'Description of Project 1' },
    { name: 'Project 2', description: 'Description of Project 2' },
    // Add more projects as needed
];

projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
    projectList.appendChild(projectItem);
});

// Example JavaScript to dynamically add images
const imageList = document.getElementById('image-list');

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    // Add more image URLs as needed
];

images.forEach(image => {
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');
    imageItem.innerHTML = `<img src="${image}" alt="Project Image">`;
    imageList.appendChild(imageItem);
});

