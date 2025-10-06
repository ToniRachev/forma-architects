import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import MorphSVGPlugin from "gsap/dist/MorphSVGPlugin";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText, MorphSVGPlugin, useGSAP);

export { gsap, ScrollSmoother, ScrollTrigger, SplitText, MorphSVGPlugin, useGSAP };