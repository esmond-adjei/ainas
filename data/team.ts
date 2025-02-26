const teamMembers = [
    {
        imageSrc: "/images/profiles/caleb.jpg",
        name: "Dr. Caleb Melenya Ocansey",
        title: "Founder & President",
        bio: "Dr. Ocansey founded AINAS to address Africa's most pressing environmental challenges. With expertise in sustainable development, he leads the organization's mission to empower African communities."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Eric+Tutu+Tchao",
        name: "Dr. Eric Tutu Tchao",
        title: "Executive Director",
        bio: "Dr. Tchao oversees AINAS's operations and strategic direction. His focus is on implementing sustainable solutions and promoting community engagement across Africa."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Enock+Bessah",
        name: "Dr. Enock Bessah",
        title: "Director of Research & Development",
        bio: "Dr. Bessah leads AINAS's research initiatives, ensuring that the solutions we implement are scientifically sound and tailored to local needs."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Andrew+Selasi+Agbemenu",
        name: "Dr. Andrew Selasi Agbemenu",
        title: "Director of Technology & Innovation",
        bio: "Dr. Agbemenu drives AINAS's technological innovations, integrating renewable energy, sustainable agriculture, and smart technologies into our projects."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Kofi+Konadu",
        name: "Dr. Kofi Konadu",
        title: "Director of Environmental Sustainability",
        bio: "Dr. Konadu oversees AINAS's environmental sustainability programs, working to restore ecosystems and promote climate resilience across Africa."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Konadu+Antwi+Agyarkwa",
        name: "Dr. Konadu Antwi Agyarkwa",
        title: "Director of Communications and Public Relations",
        bio: "Dr. Agyarkwa manages AINAS's communications strategy and public relations initiatives to enhance visibility and stakeholder engagement."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Nana+Adoma+Fredua+Antoh",
        name: "Nana Adoma Fredua Antoh",
        title: "Director of Legal Affairs",
        bio: "Nana Antoh oversees all legal matters and ensures compliance with regulatory requirements across AINAS's operations."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Ivy+T.+Lomotey",
        name: "Ivy T. Lomotey",
        title: "Director of Monitoring and Evaluation",
        bio: "Ms. Lomotey leads the monitoring and evaluation of AINAS's projects to ensure effective implementation and impact assessment."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Derek+Osakunor",
        name: "Dr. Derek Osakunor",
        title: "Director of Advocacy and Policy",
        bio: "Dr. Osakunor leads AINAS's advocacy efforts and policy development initiatives to promote sustainable environmental practices."
    },
    {
        imageSrc: "/images/profiles/richard.jpg",
        name: "Dr. Richard Adu Amoah",
        title: "Director of Community Engagement",
        bio: "Dr. Amoah leads AINAS's community engagement initiatives, ensuring strong relationships with local communities and stakeholders."
    },
    {
        imageSrc: "/images/profiles/henry.jpg",
        name: "Mr. Henry Kottey",
        title: "Director of Finance",
        bio: "Mr. Kottey manages AINAS's financial operations and ensures effective resource allocation across all projects and initiatives."
    },
    {
        imageSrc: "/images/profiles/samuel.png",
        name: "Dr. Samuel Ayodele Mesele",
        title: "Country Director, Nigeria",
        bio: "Dr. Mesele effectively directs AINAS's Nigeria operations, fostering strategic partnerships and ensuring robust, impactful program delivery."
      }
];


export const getMembers = (length?: number) => {
    return teamMembers.slice(0, length);
}

export const getMember = (name: string) => {
    return teamMembers.find(member => member.name === name);
}