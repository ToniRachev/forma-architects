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
}

export const projects: ProjectInterface[] = [
    {
        id: "01",
        name: "Casa Luminosa",
        title: "Residential Haven",
        category: "Residential",
        year: 2022,
        description:
            "Casa Luminosa is envisioned as a retreat where daylight defines the atmosphere. Nestled in a quiet hillside, the residence balances privacy with openness, framing views of nature while inviting warmth inside. Every surface and volume responds to the sun’s path, creating a living environment in harmony with its surroundings.",
        image: "/mockup-1.webp",
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
        description:
            "Aurora Pavilion emerges as a cultural beacon shaped by transparency and light. Its fluid geometry welcomes movement and gathering, dissolving the edge between interior and the city beyond. Designed as an open stage for performances and dialogue, the pavilion becomes both a landmark and a shared home for expression.",
        image: "/mockup-1.webp",
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
        description:
            "Verde Tower reimagines urban density as a living ecosystem. Rising above the city, its façade is draped in vertical gardens that filter light, air, and shade. Inside, flexible residences connect with shared green terraces, merging community and ecology. The tower becomes both a home and a sustainable landscape in height.",
        image: "/mockup-1.webp",
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
        description:
            "Atelier Nova transforms an industrial shell into a luminous workspace for artists and makers. Preserving raw concrete and steel, the design introduces soft partitions and generous skylights that create zones for collaboration and retreat. The adaptive reuse celebrates its past while offering an inspiring environment for future creative exploration.",
        image: "/mockup-1.webp",
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
        description:
            "Marina Vista is shaped by the horizon line, where sea and sky meet in endless dialogue. Positioned along the coast, its architecture opens toward sweeping views, while intimate courtyards provide sheltered moments. The residence becomes a fluid threshold, dissolving boundaries and connecting daily life to the rhythm of the sea.",
        image: "/mockup-1.webp",
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
        description:
            "Lumen Library is conceived as a vessel of light and knowledge. Tall, open halls bring daylight deep inside, while quiet study alcoves create spaces for reflection. Its architecture balances transparency with intimacy, fostering a civic hub where learning, discovery, and community converge within a structure that celebrates openness and clarity.",
        image: "/mockup-1.webp",
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
];
