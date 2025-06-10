document.addEventListener("DOMContentLoaded", () => {
  // Data for timeline, skills, and projects extracted and consolidated from both ALHassanKhaled-v1.5.pdf and ALHassanKhaled-v2.0.pdf
  const timelineData = [
    {
      side: "right",
      date: "Apr 2024 - Present",
      title: "Data Analysis & O&M Engineer",
      company: "Telecom Egypt",
      details: [
        "Resolved over 50+ complex fiber optic transmission issues monthly, ensuring 99.9% network uptime across national and international links.",
        "Automated data reporting workflows using Python and Power BI, reducing analysis time by 60% and enabling faster executive decisions.",
        "Developed and standardized 10+ testing protocols, improving system diagnostics accuracy and reducing troubleshooting time by 40%.",
        "Modified diagnostic tools and automation scripts to improve network analysis efficiency by 60%, aligning with customer expectations for reliability and speed.",
      ],
      type: "work",
    },
    {
      side: "left",
      date: "Feb 2024 - May 2024",
      title: "Automotive Embedded Systems (Certification)",
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
        "Built and piloted a smart utility monitoring prototype.",
      ],
      type: "work",
    },
    {
      side: "left",
      date: "Feb 2023 - June 2023",
      title: "Junior Teaching Assistant",
      company: "Nile University",
      details: [
        "Supported 20+ students in sensor and semiconductor lab environments over a semester, achieving a 95% lab report completion rate.",
        "Guided students in testing and verifying analog/digital components such as ADCs, sensors, and microcontroller I/O.",
        "Assisted in reviewing design specifications and system requirements for embedded systems projects.",
        "Evaluated and provided feedback for 10+ semiconductor-related embedded projects, ensuring academic consistency and improving project outcomes by 10%.",
      ],
      type: "work",
    },
    {
      side: "right",
      date: "Sept 2018 - July 2023",
      title: "B.Sc. Electronics and Communications Engineering",
      company: "Nile University",
      details: [
        "GPA: 3.5/4.0 | Specialized in embedded systems design.",
        "Thesis: AI-based self-healing algorithms for telecom networks (Orange Egypt), integrating Python, cloud monitoring, and infrastructure reliability (Published in IEEE).",
      ],
      type: "education",
    },
    {
      side: "left",
      date: "June 2022 - Sept 2022",
      title: "Junior Research Assistant",
      company: "WINC, Nile University",
      details: [
        "Conducted research in digital twins, automation, and AI-based network optimization to improve service reliability.",
      ],
      type: "work",
    },
    {
      side: "right",
      date: "Jul 2024 - Nov 2024",
      title: "Data Analysis Course",
      company: "Amit",
      details: [
        "Completed a comprehensive data analysis course.",
        "Gained proficiency in various data analysis techniques and tools.",
      ],
      type: "education",
    },
    {
      side: "left",
      date: "Jan 2025 - Present",
      title: "Frontend Web Development Bootcamp",
      company: "Route Academy",
      details: [
        "Mastered React, Redux, Next.js, Bootstrap, TypeScript, TanStack Query.",
        "Built full-featured responsive applications with user authentication, chat systems, and analytics dashboards using Firebase and HTML/CSS.",
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
          "STM32",
          "AVR",
          "ARM Cortex",
          "FreeRTOS",
          "Embedded Linux",
          "UART",
          "SPI",
          "CAN",
          "LIN",
          "I2C",
          "GPIO",
          "Real-Time Systems",
          "Sensor Interfaces",
          "Bluetooth Modules",
        ],
      },
      {
        name: "Frontend & Web Development",
        skills: [
          "React",
          "JavaScript",
          "TypeScript",
          "Next.js",
          "HTML",
          "CSS",
          "Tailwind",
          "Redux",
          "React Router",
          "Sass",
          "Bootstrap",
          "Responsive Layouts",
          "Form Validation (Formik, Yup)",
          "Chat UI",
          "Dashboard UI",
        ],
      },
      {
        name: "Programming & Scripting",
        skills: ["Python"], // C and C++ are covered in Embedded, JavaScript in Frontend
      },
      {
        name: "Cloud & DevOps Tools",
        skills: [
          "Firebase",
          "GitHub",
          "JSON APIs",
          "VS Code",
          "Automation Scripts",
          "Docker",
        ], // Docker added from v1.5 tools
      },
      {
        name: "Data Analysis & Visualization",
        skills: [
          "Python",
          "Power BI",
          "Excel",
          "SQL",
          "Data Pipelines",
          "Reporting",
        ],
      },
      {
        name: "IoT Technologies",
        skills: ["ESP8266", "MQTT", "Firebase", "Blynk IoT", "Arduino"],
      },
      {
        name: "Tools & Environments",
        skills: [
          "STM32CubeIDE",
          "Keil",
          "Eclipse",
          "Git",
          "MATLAB",
          "LTspice",
          "Cadence",
          "Unix/Linux",
          "RTOS environments",
        ],
      },
      {
        name: "Computer Science & Engineering Foundations",
        skills: ["Computer Engineering", "Data Structures", "Code Reviews"],
      },
      {
        name: "Project Management & Soft Skills",
        skills: [
          "Project Planning",
          "Estimating durations",
          "Schedules",
          "Investigating faults",
          "Collaboration",
          "Specification interpretation",
          "Product Flow understanding",
          "Customer Needs",
          "Supportability",
          "Responsibilities",
          "Innovation",
          "Dedicated",
          "Assists",
          "Reflect",
          "Access",
          "Planning",
          "Technical Writing", // From v1.5 "Writing"
          "Team Collaboration",
          "Participating",
          "Reliability",
          "Feedback Handling",
        ],
      },
    ],
    radarData: {
      labels: [
        "Embedded Dev",
        "Frontend Dev",
        "Data Analysis",
        "IoT",
        "Cloud/DevOps",
        "Soft Skills",
      ],
      values: [5, 4, 4, 3, 4, 4], // Adjusted values based on broad categories and consolidated skills
      descriptions: [
        "Expert in Embedded Development (C/C++, RTOS, MCUs, Firmware, Hardware)",
        "Proficient in Frontend Web Development (React, JavaScript, modern frameworks)",
        "Proficient in Data Analysis & Visualization (Python, Power BI, SQL, data pipelines)",
        "Experienced in IoT technologies (ESP8266, MQTT, Firebase, Arduino)",
        "Skilled in Cloud & DevOps tools (Firebase, GitHub, automation scripts, Docker)",
        "Strong soft skills including collaboration, problem-solving, planning, and technical writing",
      ],
    },
  };

  const projectsData = [
    {
      title: "Smart ADAS for RC Vehicles",
      tags: ["STM32", "FreeRTOS", "Embedded", "Mobile App"],
      description:
        "Implemented cruise control, auto-parking, emergency alerts using STM32, built a mobile app for control via Bluetooth, and developed a robust UART protocol.",
      fullDescription:
        "Designed and implemented a miniature Advanced Driver-Assistance System (ADAS) for RC vehicles using an STM32F103C6 microcontroller and FreeRTOS. Key features included adaptive cruise control, autonomous parking, and GPS/SIM module integration for cloud-connected emergency alerts. Developed a robust UART protocol (8-bit data, even parity) for seamless HMI and control MCU coordination, validated through over 1,000 test iterations with 100% reliability. Additionally, built a mobile application for controlling the RC car via Bluetooth using an Android interface, and implemented embedded state-machine architecture with RTOS, tested for reliability under different conditions. This project showcased expertise in real-time embedded systems, sensor fusion, inter-device communication, and mobile integration.",
      link: "https://github.com/alhassank13",
    },
    {
      title: "Door Locker Security System",
      tags: ["ATmega32", "Embedded", "Security"],
      description:
        "Developed a layered security system with inter-MCU UART communication, custom drivers, and a 3-attempt lockout mechanism.",
      fullDescription:
        "Engineered a secure door locker system utilizing an ATmega32 microcontroller. The architecture featured inter-MCU UART communication for distributed control and a robust 3-attempt lockout mechanism with a 1-minute buzzer alarm for security. Developed custom drivers for LCD (4-bit mode), Timer1 (interrupt-based), and buzzer, alongside a precise motor control system for door locking/unlocking (15s CW/3s hold/15s CCW). This project highlighted low-level driver development and robust state machine design.",
      link: "https://github.com/alhassank13",
    },
    {
      title: "AI-Optimized Telecom Network (Graduation Project)",
      tags: ["AI/ML", "Data Analysis", "Network", "Python"],
      description:
        "Reduced network outages by 25% using One-Class SVM and applied self-healing protocols to Orange Egypt data, integrating Python and cloud monitoring.",
      fullDescription:
        "As part of my graduation thesis, I developed AI-based self-healing algorithms for telecom networks. This involved applying One-Class SVM to detect and reduce sleeping cell outages by 25% using real-world data from Orange Egypt. The project integrated Python, cloud monitoring, and infrastructure reliability mechanisms, demonstrating strong skills in machine learning, data analysis, and problem-solving within complex network environments, aiming to improve network reliability and performance.",
      link: "https://github.com/alhassank13",
    },
    {
      title: "ESP-Smart-Meter",
      tags: ["ESP8266", "IoT", "Data Analysis", "Raspberry Pi"],
      description:
        "Built an IoT smart meter with 92% anomaly detection accuracy using Raspberry Pi and ESP8266, reducing theft cases by 30% in a pilot deployment.",
      fullDescription:
        "Designed and piloted an IoT smart utility monitoring prototype. This system, built on a Raspberry Pi and ESP8266, achieved 92% anomaly detection accuracy for electricity consumption, leading to a 30% reduction in theft cases during its pilot deployment. The project involved sensor interfacing, cloud communication (Firebase), and data analytics for actionable insights, showcasing practical IoT development and data-driven problem-solving.",
      link: "https://github.com/alhassank13",
    },
    {
      title: "E-Commerce Web App",
      tags: ["React", "Firebase", "Frontend", "Web Development"],
      description:
        "Developed a cloud-based e-commerce platform with product filtering, cart management, checkout system, and wishlist functionality.",
      fullDescription:
        "Developed a comprehensive cloud-based e-commerce platform with essential features including product filtering, efficient cart management, a secure checkout system, and personalized wishlist functionality. The tech stack primarily included React for the frontend, Formik and Yup for robust form validation, Tailwind CSS for styling, and Firebase Authentication for user management. Implemented advanced UX features such as offline detection, error boundaries for graceful error handling, and toast notifications for enhanced user feedback, ensuring a smooth and reliable shopping experience.",
      link: "https://github.com/alhassank13", // Placeholder, add actual link if available
    },
    {
      title: "Chat Dashboard Interface",
      tags: ["AI", "Frontend", "Web Development", "UI/UX"],
      description:
        "Designed an AI agent chat UI interface supporting real-time user interaction, including live chat threads and feedback logging.",
      fullDescription:
        "Designed and developed an intuitive AI agent chat UI interface to support real-time user interaction. Key functionalities included live chat threads for dynamic conversations, comprehensive feedback logging for continuous improvement, and simulated LLM API integration for realistic agent responses. This project demonstrated strong skills in frontend development, responsive UI/UX design, and integration with AI simulation for interactive applications.",
      link: "https://github.com/alhassank13", // Placeholder, add actual link if available
    },
  ];

  const credentialsData = {
    certifications: [
      "Embedded Systems Diploma - NTI (2024)",
      "CCNA v7 Nanodegree - NTI (2022)",
      "IoT Nanodegree - Orange Digital Center (2022)",
      "Route Frontend Web Development Bootcamp (2025 - Present)",
      "Data Analysis Course - Amit (Jul 2024 - Nov 2024)",
      "Testing Foundations Track - Udacity",
    ],
    publications: [
      {
        title:
          "Detecting Sleeping Cells in Cellular Networks Based on One-Class SVM and Deep Autoencoders",
        details:
          "Dec 2023 | 10.1109/JAC-ECC61002.2023.10479631 (Proceedings of the Japan-Africa Conference on Electronics, Communications and Computations (JAC-ECC 2023))",
      },
    ],
  };

  // --- Populate Timeline Section ---
  const timelineContainer = document.querySelector(".relative.wrap");
  // Sort timeline data chronologically before rendering (most recent first)
  timelineData.sort((a, b) => {
    const parseDate = (dateStr) => {
      const [start, end] = dateStr.split(" - ");
      let endDate;
      if (end === "Present" || end === "Till Now") {
        endDate = new Date(); // Current date for ongoing
      } else if (end) {
        // Handle cases like "Nov 2024" or "2024"
        const endParts = end.split(" ");
        if (endParts.length === 2) {
          // e.g., "Nov 2024"
          endDate = new Date(
            endParts[1],
            new Date(Date.parse(endParts[0] + " 1, 2000")).getMonth()
          );
        } else {
          // e.g., "2024"
          endDate = new Date(parseInt(endParts[0]), 11, 31); // Dec 31st of the year
        }
      } else {
        // If only a start date is given, use it for comparison
        const startParts = start.split(" ");
        if (startParts.length === 2) {
          // e.g., "Jan 2025"
          endDate = new Date(
            startParts[1],
            new Date(Date.parse(startParts[0] + " 1, 2000")).getMonth()
          );
        } else {
          // e.g., "2023"
          endDate = new Date(parseInt(startParts[0]), 0); // Jan 1st of the year
        }
      }
      return endDate.getTime();
    };
    return parseDate(b.date) - parseDate(a.date);
  });

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
