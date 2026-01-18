// Tahun otomatis
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();

    // Animasi scroll
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-6");
        }
    });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalLink = document.getElementById("modalLink");

    //About Me
    const aboutItems = document.querySelectorAll(".about-item");
    const aboutObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-4");
        }
        });
    },
    { threshold: 0.3 }
    );

    aboutItems.forEach(item => aboutObserver.observe(item));

    

    // Projects
    const projects = {
        1: {
          title: "Landing Page Modern",
          badge: "Frontend",
          desc: "Test",
          image: "https://picsum.photos/800/400?1",
          tech: ["HTML", "Tailwind CSS", "JavaScript"],
          link: "#",
          github: "#"
        },
        2: {
          title: "KukuKu - Nail Disease Detection App",
          badge: "Android App",
          desc: "Disease detection based on nail conditions is a machine learning project to create a model that can detect types of disease symptoms based on nail images. Self-awareness about health is often ignored by society. Most people don’t have self awareness that something as insignificant as a nail may indicate something more serious. Nail diseases are very common and may be left unnoticed until serious health impacts start to appear. This app will provide a convenient and easily accessible solution for detection of nail disease. For this project, we will use an already available dataset on nail diseases provided here (https://universe.roboflow.com/knm/nail-disease-detection-mxoqy/). At the training stage, our model is trained using a dataset consisting of 6363 nail images, with 9 classes of disease types which will then be processed to create a model. Then we will evaluate the performance of the model to find out whether the model created has good accuracy in all types of classes. The results of this model will then be integrated into a mobile application which will be easy for users to use. This application will help to take pictures and analyze the user's nail images. That way, our model can provide information in early detection of disease based on the condition of their nails.",
          image: "img/kukukubg.png",
          tech: ["JavaScript", "API", "Tailwind"],
          link: "#",
          github: "https://github.com/pingkanss/KukuKuApp"
        },
        3: {
          title: "Maintenance and Prevention System V2",
          badge: "Web App",
          desc: "Lorem Ipsum",
          image: "https://picsum.photos/800/400?3",
          tech: ["HTML", "CSS", "Tailwind"],
          link: "#",
          github: "#"
        }
    };

    window.openModal = function (id) {
        const data = projects[id];
        
        document.getElementById("modal").classList.remove("hidden");
        document.getElementById("modalTitle").textContent = data.title;
        document.getElementById("modalDesc").textContent = data.desc;
        document.getElementById("modalImage").src = data.image;
        document.getElementById("modalBadge").textContent = data.badge;
        document.getElementById("modalLink").href = data.link;
        document.getElementById("modalGithub").href = data.github;
        
        const techContainer = document.getElementById("modalTech");
        techContainer.innerHTML = "";
        data.tech.forEach(t => {
            techContainer.innerHTML += `
            <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                ${t}
            </span>
            `;
        });
    };
    
    window.closeModal = function () {
        modal.classList.add("hidden");
    };
});