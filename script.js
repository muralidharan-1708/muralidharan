// Get the project ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('id');

// Example project data (you can replace this with dynamic content from a database or API)
const projectData = {
    1: {
        title: "Project Alpha",
        description: "An in-depth overview of Project Alpha, highlighting its core functionalities and unique aspects.",
        techStack: [
            { name: "Reactjs", image: "images/reactjs.png" },
            { name: "OCR", image: "images/ocr.png" },
            { name: "Mongodb", image: "images/mongodb.png" },
            { name: "LLM", image: "images/llm.jpeg" }
        ],
        details: "This section elaborates on the comprehensive features and the technical challenges encountered during the development of Project Alpha."
    },
    2: {
        title: "Project Beta",
        description: "A detailed description of Project Beta, focusing on its innovative solutions and technical prowess.",
        techStack: [
            { name: "Reactjs", image: "images/reactjs.png" },
            { name: "OCR", image: "images/ocr.png" },
            { name: "Mongodb", image: "images/mongodb.png" }
        ],
        details: "This section provides an extensive analysis of the features and the obstacles overcome throughout the development of Project Beta."
    }
};

// Fetch the project details based on the ID
const project = projectData[projectId];

if (project) {
    document.getElementById('project-title').innerText = project.title;
    document.getElementById('project-description').innerText = project.description;
    document.getElementById('project-details').innerText = project.details;

    const techStackList = document.getElementById('project-tech-stack');
    project.techStack.forEach((tech, index) => {
        const listItem = document.createElement('li');
        
        // Create a container for the image and the name
        const techItem = document.createElement('div');
        techItem.classList.add('tech-item');
        techItem.style.animation = `fadeInUp ${0.5 + index * 0.1}s ease-in-out`;

        // Create image element
        const techImage = document.createElement('img');
        techImage.src = tech.image;
        techImage.alt = tech.name;
        techImage.classList.add('tech-image');

        // Create text element
        const techName = document.createElement('span');
        techName.innerText = tech.name;

        // Append the image and text
        techItem.appendChild(techImage);
        techItem.appendChild(techName);

        // Append the techItem to the list item
        listItem.appendChild(techItem);

        // Add the list item to the tech stack list
        techStackList.appendChild(listItem);
    });
} else {
    document.getElementById('project-title').innerText = "Project not found";
    document.getElementById('project-description').innerText = "No project details available.";
    document.getElementById('project-details').innerText = "";
}
