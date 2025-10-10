export interface ServiceInterface {
    id: number;
    title: string;
    image: string;
    description: string;
    areas: string[];
}

export const services = [
    {
        id: 1,
        title: "Residential Architecture",
        image: "/services/residential-architecture.webp",
        description:
            "Our residential designs are guided by the belief that a home should feel timeless yet deeply personal. Each project begins with an exploration of light, material, and proportion, ensuring that comfort and beauty exist in harmony. Whether on a coastal slope or in the heart of a city, our work embraces its surroundings, creating living spaces that nurture both privacy and openness.\n\nWe collaborate closely with clients to translate daily rituals into architecture that feels intuitive and enduring. The result is more than shelter—it is a sanctuary that adapts, inspires, and evolves. With careful detailing and spatial clarity, we shape homes that are as functional as they are poetic.",
        areas: [
            "Private homes & villas",
            "Urban apartments",
            "Retreats & holiday houses",
            "Renovations & extensions",
        ],
    },
    {
        id: 2,
        title: "Public & Cultural Spaces",
        image: "/services/public.webp",
        description:
            "We approach public and cultural projects as opportunities to enrich the collective experience. Architecture in this realm must balance scale with intimacy, offering spaces where individuals can feel connected to both the community and the greater cultural narrative. Museums, libraries, and civic landmarks become more than buildings—they become destinations of shared memory and discovery.\n\nEvery project is shaped with openness in mind, inviting people to gather, reflect, and interact. Material choices and spatial flow are guided by accessibility and inclusivity, ensuring the spaces welcome diverse voices. These projects stand as enduring expressions of identity, fostering connection between past, present, and future generations.",
        areas: [
            "Museums & galleries",
            "Libraries",
            "Community centers",
            "Performance halls",
        ],
    },
    {
        id: 3,
        title: "Interior Design",
        image: "/services/interior-design.webp",
        description:
            "Our interior work focuses on creating atmospheres that are both tactile and emotionally resonant. From the rhythm of daylight across a surface to the grain of natural materials, we pay attention to the small details that shape daily experience. Interiors are conceived not only as functional environments, but as backdrops for life, work, and leisure.\n\nCollaboration with artisans and craftsmen plays an essential role, allowing us to tailor every element with precision. Through layering textures, colors, and forms, we achieve harmony between space and personality. The result is an interior that feels cohesive yet personal, timeless yet deeply tied to its inhabitants.",
        areas: [
            "Residential interiors",
            "Commercial offices",
            "Hospitality & retail",
            "Furniture & bespoke details",
        ],
    },
    {
        id: 4,
        title: "Sustainable Design",
        image: "/services/sustainable-design.webp",
        description:
            "Sustainability is not treated as an afterthought, but as a foundation of our practice. Each project begins with strategies that reduce energy consumption, minimize environmental impact, and extend the life of the building. Passive systems, responsible material sourcing, and adaptive technologies form the core of our design philosophy.\n\nBeyond performance, we seek to create spaces that nurture a sustainable lifestyle. Architecture becomes a partner to the environment, working with natural rhythms rather than against them. The outcome is a building that breathes, adapts, and endures, offering both efficiency and a sense of harmony with the world around it.",
        areas: [
            "Passive house design",
            "Green materials",
            "Energy-efficient systems",
            "Circular building practices",
        ],
    },
    {
        id: 5,
        title: "Urban Design & Planning",
        image: "/services/urban-design.webp",
        description:
            "Our urban projects aim to weave architecture into the broader fabric of the city. We approach planning as an act of choreography—aligning movement, landscape, and built form into a balanced whole. Every design is guided by the human scale, ensuring that cities remain vibrant, accessible, and deeply connected to the people who inhabit them.\n\nWe see urbanism as both vision and responsibility. Streetscapes, plazas, and mixed-use areas are imagined as places of encounter, exchange, and belonging. By integrating sustainability and cultural sensitivity, our plans aspire to create cities that not only function efficiently, but also inspire civic pride and collective well-being.",
        areas: [
            "Masterplanning",
            "Public realm design",
            "Mixed-use developments",
            "Mobility & accessibility",
        ],
    },
];
