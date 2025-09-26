import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

export { gsap, ScrollSmoother, ScrollTrigger, useGSAP };