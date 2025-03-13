const teamMembers = [
    {
        imageSrc: "/images/profiles/caleb.jpg",
        name: "Dr. Caleb Melenya Ocansey",
        slug: "caleb-melenya-ocansey",
        title: "Founder & President",
        bio: "Dr. Ocansey founded AINAS to address Africa's most pressing environmental challenges. With expertise in sustainable development, he leads the organization's mission to empower African communities."
    },
    {
        imageSrc: "/images/profiles/eric.jpg",
        name: "Dr. Eric Tutu Tchao",
        slug: "eric-tutu-tchao",
        title: "Executive Director",
        bio: "Dr. Eric Tutu Tchao, Senior Lecturer in Computer Engineering at KNUST, directs the operational and strategic initiatives of AINAS. His expertise encompasses telecommunications, blockchain, IoT, and AI, with a focus on sustainable development and community engagement across Africa. Dr. Tchao's contributions extend to global research through his involvement with the Responsible AI Lab (RAIL), IEEE and the Internet Society."
    },
    {
        imageSrc: "/images/profiles/enoch.jpeg",
        name: "Dr. Enoch Bessah",
        slug: "enoch-bessah",
        title: "Director of Research & Development",
        bio: "Dr. Enoch Bessah brings extensive experience in climate change, soil science, and water resources management. He is a Senior Lecturer at KNUST's Agricultural and Biosystems Engineering Department. Dr. Bessah guarantees AINAS's research delivers scientifically sound solutions. These solutions are specifically designed for local contexts."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Andrew+Selasi+Agbemenu",
        name: "Dr. Andrew Selasi Agbemenu",
        slug: "andrew-selasi-agbemenu",
        title: "Director of Technology & Innovation",
        bio: "Dr. Agbemenu drives AINAS's technological innovations, integrating renewable energy, sustainable agriculture, and smart technologies into our projects."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Kofi+Konadu",
        name: "Dr. Kofi Konadu",
        slug: "kofi-konadu",
        title: "Director of Environmental Sustainability",
        bio: "Dr. Konadu oversees AINAS's environmental sustainability programs, working to restore ecosystems and promote climate resilience across Africa."
    },
    {
        imageSrc: "/images/profiles/angela.jpg",
        name: "Dr. Angela Tabiri",
        slug: "angela-tabiri",
        title: "Director of Youth and Gender",
        bio: "Dr. Tabiri, an award-winning science communicator and researcher in quantum algebra, empowers young minds in STEM through mentorship and outreach. As the Academic Manager for AIMS Ghana's Girls in Mathematical Sciences Program, she has guided over 100 high school girls toward STEM careers. She also leads Femafricmaths, an initiative promoting female African mathematicians, and actively contributes to global science communication efforts."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Konadu+Antwi+Agyarkwa",
        name: "Dr. Konadu Antwi Agyarkwa",
        slug: "konadu-antwi-agyarkwa",
        title: "Director of Communications and Public Relations",
        bio: "Dr. Agyarkwa manages AINAS's communications strategy and public relations initiatives to enhance visibility and stakeholder engagement."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Nana+Adoma+Fredua+Antoh",
        name: "Nana Adoma Fredua Antoh",
        slug: "adoma-fredua-antoh",
        title: "Director of Legal Affairs",
        bio: "Nana Antoh oversees all legal matters and ensures compliance with regulatory requirements across AINAS's operations."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Ivy+T.+Lomotey",
        name: "Ivy T. Lomotey",
        slug: "ivy-lomotey",
        title: "Director of Monitoring and Evaluation",
        bio: "Ms. Lomotey leads the monitoring and evaluation of AINAS's projects to ensure effective implementation and impact assessment."
    },
    {
        imageSrc: "https://via.placeholder.com/300x300.png?text=Dr.+Derek+Osakunor",
        name: "Dr. Derek Osakunor",
        slug: "derek-osakunor",
        title: "Director of Advocacy and Policy",
        bio: "Dr. Osakunor leads AINAS's advocacy efforts and policy development initiatives to promote sustainable environmental practices."
    },
    {
        imageSrc: "/images/profiles/richard.jpg",
        name: "Dr. Richard Adu Amoah",
        slug: "richard-adu-amoah",
        title: "Director of Community Engagement",
        bio: "Dr. Amoah leads AINAS's community engagement initiatives, ensuring strong relationships with local communities and stakeholders."
    },
    {
        imageSrc: "/images/profiles/henry.jpg",
        name: "Mr. Henry Kottey",
        slug: "henry-kottey",
        title: "Director of Finance",
        bio: "Mr. Kottey manages AINAS's financial operations and ensures effective resource allocation across all projects and initiatives."
    },
    {
        imageSrc: "/images/profiles/samuel.png",
        name: "Dr. Samuel Ayodele Mesele",
        slug: "samuel-ayodele-mesele",
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