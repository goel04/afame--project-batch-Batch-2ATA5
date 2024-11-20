function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// Array of project objects with external links
const projects = [
    {
        title: "Easymart",
        description: "A web project likely focused on e-commerce, built using HTML.",
        link: "https://github.com/goel04/Easymart.com",
    },
    {
        title: "Catty-the-AI",
        description: "An AI project that works on voice commands, enabling users to interact through speech.",
        link: "https://github.com/goel04/Catty-the-AI",
    },
    {
        title: "InsureEase",
        description: "InsureEase is a hackathon project aimed at simplifying the insurance process.",
        link: "https://github.com/goel04/InsureEase",
    },
    {
        title: "LegalDoc",
        description: "The startup focuses on providing efficient, accessible legal document solutions tailored for individuals and businesses.",
        link: "https://github.com/goel04/Legaldoc",
    },
    {
        title: "View More Projects",
        description: "Explore more projects on my GitHub profile.",
        link: "https://github.com/goel04", // Link to your GitHub profile
    },
];

// Get the projects container
const projectsContainer = document.getElementById("projectsContainer");

// Function to create and display project cards
function displayProjects() {
    if (!projectsContainer) {
        console.error("projectsContainer element not found.");
        return; // Exit if the container is not found
    }

    projects.forEach((project) => {
        const card = document.createElement("div");
        card.className = "project-card"; // Add class for styling

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        // Adding click event listener to each card
        card.addEventListener("click", () => {
            window.open(project.link, "_blank"); // Open the link in a new tab
        });

        card.appendChild(title);
        card.appendChild(description);
        projectsContainer.appendChild(card);
    });

    // Optionally, you can add a class to animate the cards
    setTimeout(() => {
        const cards = document.querySelectorAll(".project-card");
        cards.forEach((card) => {
            card.classList.add("fade-in"); // Add a fade-in class for animation
        });
    }, 0); // Delay to allow the cards to be appended first
}

// Call the function to display projects
displayProjects();
document.addEventListener("DOMContentLoaded", function() {
    displayProjects();
});
