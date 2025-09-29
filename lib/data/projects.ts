export interface ProjectDetailsInterface {
    location: string;
    client: string;
    size: string;
    status: string;
}

export interface ProjectCreditsInterface {
    leadArchitect: string;
    projectArchitect: string;
    interiorDesign: string;
    structuralEngineer: string;
}

export interface ProjectInterface {
    id: string;
    name: string;
    title: string;
    category: string;
    year: number;
    description: string;
    image: string;
    details: ProjectDetailsInterface;
    credits: ProjectCreditsInterface;
    slug: string;
    gallery: string[];
}

export const projects: ProjectInterface[] = [
    {
        id: "01",
        name: "Casa Luminosa",
        title: "Residential Haven",
        category: "Residential",
        year: 2022,
        slug: "casa-luminosa",
        description:
            "Casa Luminosa is envisioned as a retreat where daylight defines the atmosphere. Nestled in a quiet hillside, the residence balances privacy with openness, framing views of nature while inviting warmth inside. Every surface and volume responds to the sun’s path, creating a living environment in harmony with its surroundings.",
        image: "/mockup-1.webp",
        gallery: ['/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp'],
        details: {
            location: "Lake Como, Italy",
            client: "Private",
            size: "450 m²",
            status: "Completed",
        },
        credits: {
            leadArchitect: "Adrian Kovács",
            projectArchitect: "Sofia Marin",
            interiorDesign: "Helena Dubois",
            structuralEngineer: "Elias Verhoeven",
        },
    },
    {
        id: "02",
        name: "Aurora Pavilion",
        title: "Cultural Landmark",
        category: "Public & Cultural",
        year: 2021,
        slug: "aurora-pavilion",
        description:
            "Aurora Pavilion emerges as a cultural beacon shaped by transparency and light. Its fluid geometry welcomes movement and gathering, dissolving the edge between interior and the city beyond. Designed as an open stage for performances and dialogue, the pavilion becomes both a landmark and a shared home for expression.",
        image: "/mockup-1.webp",
        gallery: ['/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp'],
        details: {
            location: "Copenhagen, Denmark",
            client: "City of Copenhagen",
            size: "2,000 m²",
            status: "Completed",
        },
        credits: {
            leadArchitect: "Adrian Kovács",
            projectArchitect: "Sofia Marin",
            interiorDesign: "Helena Dubois",
            structuralEngineer: "Elias Verhoeven",
        },
    },
    {
        id: "03",
        name: "Verde Tower",
        title: "Sustainable Living",
        category: "Sustainable",
        year: 2023,
        slug: "verde-tower",
        description:
            "Verde Tower reimagines urban density as a living ecosystem. Rising above the city, its façade is draped in vertical gardens that filter light, air, and shade. Inside, flexible residences connect with shared green terraces, merging community and ecology. The tower becomes both a home and a sustainable landscape in height.",
        image: "/mockup-1.webp",
        gallery: ['/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp'],
        details: {
            location: "Oslo, Norway",
            client: "Nordic Developments",
            size: "38,000 m²",
            status: "Under Construction",
        },
        credits: {
            leadArchitect: "Adrian Kovács",
            projectArchitect: "Sofia Marin",
            interiorDesign: "Helena Dubois",
            structuralEngineer: "Elias Verhoeven",
        },
    },
    {
        id: "04",
        name: "Atelier Nova",
        title: "Creative Workspace",
        category: "Interior",
        year: 2020,
        slug: "atelier-nova",
        description:
            "Atelier Nova transforms an industrial shell into a luminous workspace for artists and makers. Preserving raw concrete and steel, the design introduces soft partitions and generous skylights that create zones for collaboration and retreat. The adaptive reuse celebrates its past while offering an inspiring environment for future creative exploration.",
        image: "/mockup-1.webp",
        gallery: ['/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp'],
        details: {
            location: "Barcelona, Spain",
            client: "Atelier Venti Collective",
            size: "280 m²",
            status: "Completed",
        },
        credits: {
            leadArchitect: "Adrian Kovács",
            projectArchitect: "Sofia Marin",
            interiorDesign: "Helena Dubois",
            structuralEngineer: "Elias Verhoeven",
        },
    },
    {
        id: "05",
        name: "Marina Vista",
        title: "Seaside Residence",
        category: "Residential",
        year: 2022,
        slug: "marina-vista",
        description:
            "Marina Vista is shaped by the horizon line, where sea and sky meet in endless dialogue. Positioned along the coast, its architecture opens toward sweeping views, while intimate courtyards provide sheltered moments. The residence becomes a fluid threshold, dissolving boundaries and connecting daily life to the rhythm of the sea.",
        image: "/mockup-1.webp",
        gallery: ['/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp'],
        details: {
            location: "Santorini, Greece",
            client: "Private",
            size: "1,200 m²",
            status: "In Progress",
        },
        credits: {
            leadArchitect: "Adrian Kovács",
            projectArchitect: "Sofia Marin",
            interiorDesign: "Helena Dubois",
            structuralEngineer: "Elias Verhoeven",
        },
    },
    {
        id: "06",
        name: "Lumen Library",
        title: "Public Knowledge Hub",
        category: "Public & Cultural",
        year: 2021,
        slug: "lumen-library",
        description:
            "Lumen Library is conceived as a vessel of light and knowledge. Tall, open halls bring daylight deep inside, while quiet study alcoves create spaces for reflection. Its architecture balances transparency with intimacy, fostering a civic hub where learning, discovery, and community converge within a structure that celebrates openness and clarity.",
        image: "/mockup-1.webp",
        gallery: ['/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp'],
        details: {
            location: "Vilnius, Lithuania",
            client: "City of Vilnius",
            size: "7,500 m²",
            status: "Completed",
        },
        credits: {
            leadArchitect: "Adrian Kovács",
            projectArchitect: "Sofia Marin",
            interiorDesign: "Helena Dubois",
            structuralEngineer: "Elias Verhoeven",
        },
    },
    {
        id: "07",
        name: "Solace Retreat",
        title: "Mountain Sanctuary",
        category: "Residential",
        year: 2023,
        slug: "solace-retreat",
        description:
            "Solace Retreat is envisioned as a sanctuary nestled within alpine slopes. Crafted with timber and stone, the design dissolves into its surroundings while embracing panoramic views. Generous glazing frames the ever-changing sky, and intimate courtyards anchor the dwelling to the mountain. The residence offers a seamless dialogue between solitude, shelter, and nature’s raw grandeur.",
        image: "/mockup-1.webp",
        gallery: ['/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp'],
        details: {
            location: "Zermatt, Switzerland",
            client: "Private",
            size: "600 m²",
            status: "Completed",
        },
        credits: {
            leadArchitect: "Adrian Kovács",
            projectArchitect: "Sofia Marin",
            interiorDesign: "Helena Dubois",
            structuralEngineer: "Elias Verhoeven",
        },
    },
    {
        id: "08",
        name: "Horizon Bridge",
        title: "Urban Connector",
        category: "Public & Cultural",
        year: 2024,
        slug: "horizon-bridge",
        description:
            "Horizon Bridge is conceived as more than infrastructure—it becomes a civic promenade uniting two riverbanks. Its sculpted form creates pathways for pedestrians and cyclists, integrating seating terraces and lookout points. The bridge offers both movement and pause, functioning as a connective landmark where architecture, city, and landscape converge.",
        image: "/mockup-1.webp",
        gallery: ['/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp', '/mockup-2.webp', '/mockup-3.webp', '/mockup-1.webp'],
        details: {
            location: "Rotterdam, Netherlands",
            client: "City of Rotterdam",
            size: "450 m span",
            status: "Under Construction",
        },
        credits: {
            leadArchitect: "Adrian Kovács",
            projectArchitect: "Sofia Marin",
            interiorDesign: "Helena Dubois",
            structuralEngineer: "Elias Verhoeven",
        },
    },
];