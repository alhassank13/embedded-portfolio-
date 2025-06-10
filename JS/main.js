document.addEventListener("DOMContentLoaded", () => {
  // Data for timeline, skills, and projects
  const timelineData = [
    {
      side: "right",
      date: "Apr 2024 - Present",
      title: "Data Analysis & O&M Engineer",
      company: "Telecom Egypt",
      details: [
        "Resolved over 50+ complex fiber optic transmission issues monthly, ensuring 99.9% network uptime.",
        "Automated data reporting workflows using Python and Power BI, reducing analysis time by 60%.",
        "Developed and standardized 10+ testing protocols, improving system diagnostics accuracy.",
      ],
      type: "work",
    },
    {
      side: "left",
      date: "Feb 2024 - May 2024",
      title: "Automotive Embedded Systems",
      company: "NTI (National Telecommunication Institute)",
      details: [
        "Mastered FreeRTOS, STM32 programming, and ADAS development.",
        "Graduation project: Bluetooth-controlled RC car with collision detection.",
      ],
      type: "education",
    },
    {
      side: "right",
      date: "Aug 2022 - Sept 2023",
      title: "Arduino & Robotics Instructor",
      company: "BCreative Academy",
      details: [
        "Delivered 12-week IoT/embedded curriculum to 50+ students (ESP8266, Firebase, circuit design).",
        "Supervised 10+ capstone projects; 85% reached full functionality.",
        "Guided students in building IoT products like smart meters and RC cars.",
      ],
      type: "work",
    },
    {
      side: "left",
      date: "Feb 2023 - June 2023",
      title: "Junior Teaching Assistant",
      company: "Nile University",
      details: [
        "Supported 20+ students in sensor and semiconductor lab environments.",
        "Guided students in testing and verifying analog/digital components such as ADCs, sensors, and microcontroller I/O.",
        "Assisted in reviewing design specifications and system requirements for embedded systems projects.",
      ],
      type: "work",
    },
    {
      side: "right",
      date: "Sept 2018 - June 2023",
      title: "B.Sc. Electronics and Communications Engineering",
      company: "Nile University",
      details: [
        "GPA: 3.5/4.0 | Specialized in embedded systems design.",
        "Thesis: AI-based self-healing algorithms for telecom networks (Published in IEEE).",
      ],
      type: "education",
    },
  ];

  const skillsData = {
    categories: [
      {
        name: "Embedded Development",
        skills: [
          "C",
          "C++",
          "Firmware",
          "STM32",
          "AVR",
          "ARM Cortex-M/R",
          "ESP32",
          "RISC-V (Conceptual)",
          "FreeRTOS",
          "Embedded Linux",
          "UART",
          "SPI",
          "CAN",
          "I2C",
          "GPIO",
          "Real-Time Systems",
        ],
      },
      {
        name: "Hardware & Debugging",
        skills: [
          "Hardware Integration",
          "Board Bring-up",
          "Schematics Reading",
          "JTAG/SWD Debugging",
          "Oscilloscopes",
          "Logic Analyzers",
        ],
      },
      {
        name: "IoT Technologies",
        skills: ["ESP8266", "MQTT", "Firebase", "Blynk IoT"],
      },
      {
        name: "Tools & Environments",
        skills: [
          "STM32CubeIDE",
          "Keil",
          "Eclipse",
          "Docker",
          "Git (Version Control)",
          "MATLAB",
          "LTspice",
          "Cadence",
          "VS Code",
          "Unix/Linux",
        ],
      },
      {
        name: "Data Analysis",
        skills: ["Python", "Power BI", "Excel", "SQL"],
      },
      {
        name: "Soft Skills",
        skills: [
          "Collaboration",
          "Problem-solving",
          "Innovation",
          "Dedicated",
          "Planning",
          "Technical Writing",
        ],
      },
    ],
    radarData: {
      labels: ["Embedded Dev", "Hardware", "IoT", "Tools", "Data Analysis"],
      values: [5, 4, 3, 4, 3],
      descriptions: [
        "Expert in Embedded Development (C/C++, RTOS, MCUs, Firmware)",
        "Advanced skills in Hardware Debugging, Integration, and Analysis",
        "Proficient in IoT technologies including ESP8266, MQTT, and Firebase",
        "Advanced usage of various development tools, IDEs, and Linux environments",
        "Proficient in Data Analysis with Python, Power BI, Excel, and SQL",
      ],
    },
  };

  const projectsData = [
    {
      title: "Smart ADAS for RC Vehicles",
      tags: ["STM32", "FreeRTOS", "Embedded"],
      description:
        "Implemented cruise control, auto-parking, and emergency alerts using STM32F103C6, demonstrating strong firmware and protocol development skills.",
      fullDescription:
        "Designed and implemented a miniature Advanced Driver-Assistance System (ADAS) for RC vehicles using an STM32F103C6 microcontroller and FreeRTOS. Key features included adaptive cruise control, autonomous parking, and GPS/SIM module integration for emergency alerts. Developed a robust UART protocol for seamless HMI and control MCU coordination, validated through over 1,000 test iterations with 100% reliability. This project showcased expertise in real-time embedded systems, sensor fusion, and inter-device communication.",
      link: "https://github.com/alhassank13",
    },
    {
      title: "Door Locker Security System",
      tags: ["ATmega32", "Embedded"],
      description:
        "Developed a layered security system with inter-MCU UART communication, custom drivers, and a 3-attempt lockout mechanism.",
      fullDescription:
        "Engineered a secure door locker system utilizing an ATmega32 microcontroller. The architecture featured inter-MCU UART communication for distributed control and a robust 3-attempt lockout mechanism with a 1-minute buzzer alarm for security. Developed custom drivers for LCD (4-bit mode), Timer1 (interrupt-based), and buzzer, alongside a precise motor control system for door locking/unlocking (15s CW/3s hold/15s CCW). This project highlighted low-level driver development and robust state machine design.",
      link: "https://github.com/alhassank13",
    },
    {
      title: "AI-Optimized Telecom Network",
      tags: ["AI/ML", "Data Analysis"],
      description:
        "Graduation project that reduced network outages by 25% using One-Class SVM and self-healing protocols on real-world data.",
      fullDescription:
        "As part of my graduation thesis, I developed AI-based self-healing algorithms for telecom networks. This involved applying One-Class SVM to detect and reduce sleeping cell outages by 25% using real-world data from Orange Egypt. The project demonstrated strong skills in machine learning, data analysis, and problem-solving within complex network environments, aiming to improve network reliability and performance.",
      link: "https://github.com/alhassank13",
    },
    {
      title: "ESP-Smart-Meter",
      tags: ["ESP8266", "IoT", "Data Analysis"],
      description:
        "Built an IoT smart meter using Raspberry Pi and ESP8266 with 92% anomaly detection accuracy, reducing theft in a pilot deployment.",
      fullDescription:
        "Designed and piloted an IoT smart utility monitoring prototype. This system, built on a Raspberry Pi and ESP8266, achieved 92% anomaly detection accuracy for electricity consumption, leading to a 30% reduction in theft cases during its pilot deployment. The project involved sensor interfacing, cloud communication (Firebase), and data analytics for actionable insights, showcasing practical IoT development and data-driven problem-solving.",
      link: "https://github.com/alhassank13",
    },
  ];

  const credentialsData = {
    certifications: [
      "Embedded Systems Diploma Nanodegree (2023)",
      "CCNA v7 Nanodegree-NTI (2022)",
      "IoT Nanodegree-Orange Digital Center (2022)",
    ],
    publications: [
      {
        title:
          "Detecting Sleeping Cells in Cellular Networks Based on One-Class SVM and Deep Autoencoders",
        details:
          "Dec 2023 | Proceedings of the Japan-Africa Conference on Electronics, Communications and Computations (JAC-ECC 2023)",
      },
    ],
  };

  // --- Populate Timeline Section ---
  const timelineContainer = document.querySelector(".relative.wrap");
  timelineData.forEach((item) => {
    const alignment = item.side === "right" ? "flex-row-reverse" : "";
    const iconBg = item.type === "work" ? "bg-purple-500" : "bg-green-500";
    // Constructing each timeline item's HTML
    const timelineItem = `
            <div class="mb-8 flex justify-between items-center w-full ${alignment} timeline-item">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 ${iconBg} shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">${
                      item.type === "work" ? "W" : "E"
                    }</h1>
                </div>
                <div class="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4 cursor-pointer">
                    <h3 class="font-bold text-gray-800 text-xl">${
                      item.title
                    }</h3>
                    <p class="text-sm font-medium text-gray-600">${
                      item.company
                    } | <span class="text-sm text-gray-500">${
      item.date
    }</span></p>
                    <div class="timeline-item-content mt-2">
                        <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                            ${item.details.map((d) => `<li>${d}</li>`).join("")}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    timelineContainer.innerHTML += timelineItem;
  });

  // Add click listener to toggle timeline item content
  document
    .querySelectorAll(".timeline-item .cursor-pointer")
    .forEach((item) => {
      item.parentElement.addEventListener("click", () => {
        item.parentElement.classList.toggle("open");
      });
    });

  // --- Initialize Radar Chart ---
  const ctx = document.getElementById("skillsRadarChart").getContext("2d");
  new Chart(ctx, {
    type: "radar",
    data: {
      labels: skillsData.radarData.labels,
      datasets: [
        {
          label: "Competency Level",
          data: skillsData.radarData.values,
          backgroundColor: "rgba(192, 132, 252, 0.3)", // Slightly more opaque
          borderColor: "rgba(192, 132, 252, 1)",
          pointBackgroundColor: "rgba(192, 132, 252, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(192, 132, 252, 1)",
          borderWidth: 2, // Thicker line
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: "rgba(0, 0, 0, 0.15)" }, // Slightly darker grid lines
          grid: { color: "rgba(0, 0, 0, 0.15)" },
          pointLabels: { font: { size: 14 }, color: "#4A4A4A" },
          ticks: {
            backdropColor: "#FDFBF8",
            color: "grey",
            stepSize: 1,
            beginAtZero: true,
            max: 5,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return skillsData.radarData.descriptions[context.dataIndex];
            },
          },
          backgroundColor: "#333", // Darker tooltip background
          titleColor: "#fff",
          bodyColor: "#fff",
          borderColor: "rgba(192, 132, 252, 0.8)",
          borderWidth: 1,
          cornerRadius: 4,
        },
      },
    },
  });

  // --- Populate Skills List ---
  const skillsListContainer = document.getElementById("skills-list");
  skillsData.categories.forEach((category) => {
    const categoryHtml = `
            <div class="mb-6">
                <h4 class="font-semibold text-lg text-gray-700 mb-2">${
                  category.name
                }</h4>
                <div class="flex flex-wrap gap-2">
                    ${category.skills
                      .map(
                        (skill) =>
                          `<span class="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full skill-tag">${skill}</span>`
                      )
                      .join("")}
                </div>
            </div>
        `;
    skillsListContainer.innerHTML += categoryHtml;
  });

  // --- Populate Projects Section ---
  const projectFiltersContainer = document.getElementById("project-filters");
  const projectGrid = document.getElementById("project-grid");
  // Collect all unique tags for filters
  const allTags = ["All", ...new Set(projectsData.flatMap((p) => p.tags))];

  // Render filter buttons
  projectFiltersContainer.innerHTML = allTags
    .map(
      (tag) =>
        `<button class="filter-btn px-4 py-2 text-sm font-medium rounded-full transition-colors ${
          tag === "All"
            ? "bg-purple-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-purple-200"
        }" data-filter="${tag}">${tag}</button>`
    )
    .join("");

  /**
   * Renders the project cards based on the given filter.
   * @param {string} [filter="All"] - The tag to filter projects by. If "All", all projects are rendered.
   */
  const renderProjects = (filter = "All") => {
    projectGrid.innerHTML = ""; // Clear existing projects
    const filteredProjects =
      filter === "All"
        ? projectsData
        : projectsData.filter((p) => p.tags.includes(filter));

    filteredProjects.forEach((project, index) => {
      const card = `
                <div class="project-card bg-white rounded-lg shadow-md overflow-hidden p-6 border border-gray-200" data-project-index="${index}">
                    <h4 class="font-bold text-lg text-gray-800">${
                      project.title
                    }</h4>
                    <div class="flex flex-wrap gap-2 my-2">
                        ${project.tags
                          .map(
                            (tag) =>
                              `<span class="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">${tag}</span>`
                          )
                          .join("")}
                    </div>
                    <p class="text-gray-600 text-sm mb-4">${
                      project.description
                    }</p>
                    <span class="font-medium text-purple-600 hover:text-purple-800 transition-colors cursor-pointer">Learn More &rarr;</span>
                </div>
            `;
      projectGrid.innerHTML += card;
    });

    // Add click listeners to newly rendered project cards
    document.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", (event) => {
        const index = event.currentTarget.dataset.projectIndex;
        showProjectModal(projectsData[index]);
      });
    });
  };

  // Add click listeners to filter buttons
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from currently active button
      document
        .querySelector(".filter-btn.bg-purple-500")
        .classList.replace("bg-purple-500", "bg-gray-200");
      document
        .querySelector(".filter-btn.text-white")
        .classList.replace("text-white", "text-gray-700");

      // Add active class to clicked button
      button.classList.add("bg-purple-500", "text-white");

      // Render projects based on the selected filter
      renderProjects(button.dataset.filter);
    });
  });

  // Initial rendering of all projects
  renderProjects();

  // --- Populate Credentials Section ---
  const certsList = document.getElementById("certifications-list");
  credentialsData.certifications.forEach((cert) => {
    certsList.innerHTML += `<li><span class="font-semibold text-purple-600 mr-2">✓</span>${cert}</li>`;
  });

  const pubsList = document.getElementById("publications-list");
  credentialsData.publications.forEach((pub) => {
    pubsList.innerHTML += `
            <div>
                <p class="font-semibold text-gray-800">${pub.title}</p>
                <p class="text-sm text-gray-500">${pub.details}</p>
            </div>`;
  });

  // --- Smooth scrolling for navigation links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // --- Active navigation link on scroll ---
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li a");
  window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      // Adjust offset for sticky nav bar height
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") === `#${current}`) {
        a.classList.add("active");
      }
    });
  };

  // --- Project Detail Modal Logic ---
  const projectModal = document.getElementById("projectModal");
  const modalCloseButton = projectModal.querySelector(".modal-close");
  const modalProjectTitle = document.getElementById("modal-project-title");
  const modalProjectTags = document.getElementById("modal-project-tags");
  const modalProjectDescription = document.getElementById(
    "modal-project-description"
  );
  const modalProjectLink = document.getElementById("modal-project-link");

  function showProjectModal(project) {
    modalProjectTitle.textContent = project.title;
    modalProjectTags.innerHTML = project.tags
      .map(
        (tag) =>
          `<span class="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">${tag}</span>`
      )
      .join("");
    modalProjectDescription.textContent = project.fullDescription;
    modalProjectLink.href = project.link;
    projectModal.classList.add("show");
  }

  function hideProjectModal() {
    projectModal.classList.remove("show");
  }

  modalCloseButton.addEventListener("click", hideProjectModal);
  projectModal.addEventListener("click", (event) => {
    if (event.target === projectModal) {
      hideProjectModal();
    }
  });

  // --- Back to Top Button Logic ---
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // --- Section Fade-In on Scroll (Intersection Observer) ---
  const fadeInSections = document.querySelectorAll(".section-fade-in");
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.2, // Trigger when 20% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  fadeInSections.forEach((section) => {
    observer.observe(section);
  });
});
