// export interface MemberDetails {
//     slug: string;
//     imageSrc: string;
//     name: string;
//     title: string;
//     bio: string;
//     detail?: string;
// }

// const teamMembers: MemberDetails[] = [
//     {
//         imageSrc: "/images/profiles/caleb.jpg",
//         name: "Dr. Caleb Melenya Ocansey",
//         slug: "caleb-melenya-ocansey",
//         title: "Founder & President",
//         bio: "Dr. Caleb Ocansey is an ecosystem monitoring expert and the founder of the African Initiative for Nature-Based Solutions (AINAS), dedicated to addressing Africa's environmental challenges through sustainable solutions. With a Ph.D. in Soil Science from KNUST and extensive research experience across Africa and Europe, he specializes in ecosystem monitoring, land reclamation, climate resilience, and sustainable agriculture. He is actively involved in international collaborations, including the Responsible AI Lab (RAIL) and the European Joint Programme - Soil. Dr. Ocansey's work bridges science and real-world impact, promoting sustainable land use and community-driven solutions.",
//         detail: "es",
//     },
//     {
//         imageSrc: "/images/profiles/eric.jpg",
//         name: "Dr. Eric Tutu Tchao",
//         slug: "eric-tutu-tchao",
//         title: "Executive Director",
//         bio: "Dr. Eric Tutu Tchao, Senior Lecturer in Computer Engineering at KNUST and Scientific Director at DIPPER Lab, directs the operational and strategic initiatives of AINAS. His expertise encompasses telecommunications, blockchain, IoT, and AI, with a focus on sustainable development and community engagement across Africa. Dr. Tchao's contributions extend to global research through his involvement with the Responsible AI Lab (RAIL), IEEE and the Internet Society."
//     },
//     {
//         imageSrc: "/images/profiles/aline.png",
//         name: "Ms. Aline Adamou Barry",
//         slug: "aline-adamou-barry",
//         title: "Administrator",
//         bio: "Aline Adamou Barry is an experienced administrative and project management professional with over 15 years in international development. As the Administrator for the African Initiative for Nature-Based Solutions (AINAS), she oversees operational efficiency, project coordination, and stakeholder engagement. With expertise in administrative management, travel coordination, and event planning, she has worked with global organizations such as PATH, FARA, and USAID. A bilingual professional fluent in English and French, Aline plays a key role in ensuring smooth program execution and fostering collaborations across Africa and beyond."
//     },
//     {
//         imageSrc: "/images/profiles/enoch.jpeg",
//         name: "Dr. Enoch Bessah",
//         slug: "enoch-bessah",
//         title: "Director of Research & Development",
//         bio: "Dr. Enoch Bessah brings extensive experience in climate change, soil science, and water resources management. He is a Senior Lecturer at KNUST's Agricultural and Biosystems Engineering Department. Dr. Bessah guarantees AINAS's research delivers scientifically sound solutions. These solutions are specifically designed for local contexts."
//     },
//     {
//         imageSrc: "/images/profiles/andrew.jpg",
//         name: "Dr. Andrew Selasi Agbemenu",
//         slug: "andrew-selasi-agbemenu",
//         title: "Director of Technology & Innovation",
//         bio: "Dr. Andrew Selasi Agbemenu holds the position of Senior Lecturer in the Department of Computer Engineering and is a qualified professional engineer. Additionally, he is the Deputy Director of the Distributed IoT-Platforms, Privacy, and Edge-Intelligence Research (DIPPER) Lab. Dr. Agbemenu's research interests encompass analog and mixed-signal integrated circuits, sensor design, blockchain, Internet of Things (IoT), artificial intelligence (AI), and machine learning. These domains are utilised in interdisciplinary research to devise innovative solutions in agriculture, healthcare, and other critical developmental value chains."
//     },
//     {
//         imageSrc: "/images/profiles/angela.jpg",
//         name: "Dr. Angela Tabiri",
//         slug: "angela-tabiri",
//         title: "Director of Youth and Gender",
//         bio: "Dr. Tabiri, an award-winning science communicator and researcher in quantum algebra, empowers young minds in STEM through mentorship and outreach. As the Academic Manager for AIMS Ghana's Girls in Mathematical Sciences Program, she has guided over 100 high school girls toward STEM careers. She also leads Femafricmaths, an initiative promoting female African mathematicians, and actively contributes to global science communication efforts."
//     },
//     {
//         imageSrc: "/images/profiles/adoma.png",
//         name: "Nana Adoma Fredua Antoh",
//         slug: "adoma-fredua-antoh",
//         title: "Director of Legal Affairs",
//         bio: "Nana Antoh oversees all legal matters and ensures compliance with regulatory requirements across AINAS's operations."
//     },
//     {
//         imageSrc: "/images/profiles/derick.jpg",
//         name: "Dr. Derick Osakunor",
//         slug: "derick-osakunor",
//         title: "Director of Advocacy and Policy",
//         bio: "Dr. Derick Osakunor is a global health expert specializing in infection, immunity, and neglected tropical diseases (NTDs). With a Ph.D. in Infection and Immunology from the University of Edinburgh, his research has shaped national schistosomiasis control programs and WHO guidelines. He leads AINAS's advocacy and policy efforts for sustainable environmental practices. His work focuses on integrating research into health policy, improving universal healthcare, and developing behaviorally informed interventions for disease prevention, particularly in WASH-related conditions.",
//         detail: `
//         # Derick Osakunor, PhD, BCMAS

//         Dr. Derick Osakunor has a background in medical diagnostics, global health, infection, and immunity, with a particular focus on schistosome morbidity and immuno-epidemiology. He holds a PhD in Infection and Immunology from the University of Edinburgh, where he worked with the Parasite Immuno-epidemiology Group and the NIHR Global Health Research Unit TIBA (Tackling Infections to Benefit Africa).

//         Dr. Osakunor leads both basic and translational research with a significant impact on the policy, practice, and control of neglected tropical diseases (NTDs), as well as infectious and non-communicable diseases globally. His research has advanced our understanding of schistosomiasis, informed national schistosomiasis control programs, and contributed to WHO guidelines for verifying schistosomiasis control. His pioneering work on paediatric schistosomiasis has been instrumental in prioritizing and operationalizing treatment for children within WHO’s schistosomiasis elimination guidelines.

//         ## Research & Impact

//         His long-term goal is to shape health policy and planning by demonstrating how research findings can be integrated into existing health systems to improve universal healthcare.

//         As part of a multidisciplinary team, Dr. Osakunor is currently investigating the factors influencing disease epidemiology and quantifying the burden and impact of disease on overall health and quality of life. This work aims to:

//         - Develop locally informed, behaviourally consistent guidelines for designing and implementing complex disease interventions.
//         - Reduce disease transmission and establish a novel research framework for water, sanitation, and hygiene (WASH)-associated diseases.
//         `,
//     },
//     {
//         imageSrc: "/images/profiles/konadu.jpg",
//         name: "Dr. Konadu Antwi Agyarkwa",
//         slug: "konadu-antwi-agyarkwa",
//         title: "Director of Communications and Public Relations",
//         bio: "Dr. Agyarkwa manages AINAS's communications strategy and public relations initiatives to enhance visibility and stakeholder engagement."
//     },
//     {
//         imageSrc: "/images/profiles/samuel.jpg",
//         name: "Dr. Samuel Ayodele Mesele",
//         slug: "samuel-ayodele-mesele",
//         title: "Country Director, Nigeria",
//         bio: "Dr. Mesele effectively directs AINAS's Nigeria operations, fostering strategic partnerships and ensuring robust, impactful program delivery."
//     },
//     {
//         imageSrc: "/images/profiles/richard.jpeg",
//         name: "Dr. Richard Adu Amoah",
//         slug: "richard-adu-amoah",
//         title: "Director of Community Engagement",
//         bio: "Dr. Amoah leads AINAS's community engagement initiatives, ensuring strong relationships with local communities and stakeholders."
//     },
//     {
//         imageSrc: "/images/profiles/henry.jpg",
//         name: "Mr. Henry Kottey",
//         slug: "henry-kottey",
//         title: "Director of Finance",
//         bio: "Mr. Kottey manages AINAS's financial operations and ensures effective resource allocation across all projects and initiatives."
//     },
//     {
//         imageSrc: "/images/profiles/gifty.jpg",
//         name: "Dr. Gifty Attu",
//         slug: "gifty-attu",
//         title: "Director of Environmental Sustainability",
//         bio: "Dr. Gifty Nyarko is a fisheries scientist and Director of Environmental Sustainability at the African Initiative for Nature-Based Solutions (AINAS), where she leads efforts to promote conservation and sustainable use of aquatic resources across Africa. Her research focuses on the intersection of fish and people, aiming to balance conservation with food security. As a PhD fellow at Virginia Tech’s Interfaces of Global Change program, her award-winning work uncovered the farming of unapproved tilapia strains in Ghana. She has led diverse projects across aquaculture, genetics, and fisheries economics in Ghana and Cameroon. Gifty currently works as a researcher and consultant, volunteering with CART4D to further her impact on fisheries sustainability and policy."
//     },
//     {
//         imageSrc: "/images/profiles/ivy.jpg",
//         name: "Ms. Ivy T. Lomotey",
//         slug: "ivy-lomotey",
//         title: "Director of Monitoring and Evaluation",
//         bio: "Ms. Lomotey leads the monitoring and evaluation of AINAS's projects to ensure effective implementation and impact assessment."
//     },
// ];


// export const getMembers = (length?: number) => {
//     return teamMembers.slice(0, length);
// }

// export const getMember = (name: string) => {
//     return teamMembers.find(member => member.slug === name);
// }