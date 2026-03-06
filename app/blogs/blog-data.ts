export type ContentBlock = { type: "p" | "h2" | "h3"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  readTime: string;
  /** Number of leading paragraph blocks to show as intro before the featured image */
  introLength: number;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-signs-your-truck-dpf-needs-cleaning",
    title: "5 Signs Your Truck's DPF Needs Cleaning",
    excerpt:
      "A clogged diesel particulate filter can hurt performance and fuel economy. Learn the warning signs so you can schedule DPF cleaning before costly damage.",
    date: "2025-02-15",
    author: "K&M Truck & Trailer",
    image: "/why_us_banner.jpg",
    imageAlt: "Truck repair technician inspecting DPF system",
    readTime: "5 min read",
    introLength: 2,
    content: [
      {
        type: "p",
        text: "Your truck's diesel particulate filter (DPF) is critical for emissions compliance and engine health. When it gets clogged with soot and ash, you'll notice a drop in power, worse fuel economy, and in some cases the engine may even enter limp mode. Catching the problem early saves money and keeps you on the road.",
      },
      {
        type: "p",
        text: "Here are five clear signs that your DPF likely needs cleaning or service:",
      },
      {
        type: "h2",
        text: "1. DPF or check engine light",
      },
      {
        type: "p",
        text: "The most obvious sign is a dedicated DPF warning light or a check engine light with a DPF-related code. Don't ignore it; the system is telling you the filter is full or regeneration isn't completing.",
      },
      {
        type: "h2",
        text: "2. Loss of power",
      },
      {
        type: "p",
        text: "A restricted DPF increases backpressure and robs the engine of power. If your truck feels sluggish, especially under load, and you've ruled out other causes, the DPF is a prime suspect.",
      },
      {
        type: "h2",
        text: "3. Poor fuel economy",
      },
      {
        type: "p",
        text: "When the filter is clogged, the engine works harder to push exhaust through. That often shows up as a noticeable drop in miles per gallon over time.",
      },
      {
        type: "h2",
        text: "4. Frequent or failed regenerations",
      },
      {
        type: "p",
        text: "If your truck is constantly trying to regenerate, or regens never complete, soot is building up faster than it can be burned off. That's a strong signal the filter needs professional cleaning.",
      },
      {
        type: "h2",
        text: "5. Smell or visible smoke",
      },
      {
        type: "p",
        text: "In severe cases, you might notice unusual exhaust smell or smoke. By then, the DPF is heavily restricted and may need cleaning or inspection right away.",
      },
      {
        type: "h3",
        text: "Professional DPF service in South Carolina",
      },
      {
        type: "p",
        text: "At K&M Truck & Trailer, we offer certified DPF cleaning and forced regeneration service across South Carolina. Our mobile team can often come to you—roadside, at the truck stop, or at your yard—so you don't have to lose time driving to a shop. Regular DPF maintenance keeps your truck compliant, efficient, and on the road.",
      },
    ],
  },
  {
    slug: "what-to-do-when-stuck-roadside",
    title: "What to Do When You're Stuck on the Road: A Driver's Guide to Emergency Roadside Repair",
    excerpt:
      "Breakdowns happen. Here's how to stay safe, who to call, and what to expect when you need emergency truck or trailer repair in South Carolina.",
    date: "2025-02-08",
    author: "K&M Truck & Trailer",
    image: "/hero-truck-white.png",
    imageAlt: "Commercial truck on the road",
    readTime: "6 min read",
    introLength: 1,
    content: [
      {
        type: "p",
        text: "A breakdown on the road is stressful—whether it's a flat tire, brake issue, or something that leaves you completely stranded. Knowing what to do before and after the fact can keep you safe and get you back on the road faster.",
      },
      {
        type: "h2",
        text: "First, stay safe",
      },
      {
        type: "p",
        text: "Get your truck as far off the road as possible, turn on hazard lights, and set out triangles or flares if you have them. If you're on a busy highway, stay in the cab or well away from traffic unless it's safer to exit on the passenger side. Never stand between your rig and traffic.",
      },
      {
        type: "h2",
        text: "Next, call for help",
      },
      {
        type: "p",
        text: "Have your location ready (mile marker, direction, nearest exit or landmark). Describe the problem as best you can: no start, flat tire, air leak, warning lights, etc. The more detail you give, the better the repair team can prepare.",
      },
      {
        type: "h3",
        text: "24/7 dispatch across South Carolina",
      },
      {
        type: "p",
        text: "At K&M Truck & Trailer, we dispatch 24/7 across South Carolina. We aim to reach most locations within about 60 minutes. Our mobile units are equipped for common roadside repairs: tire changes, brake adjustments, air line leaks, jump-starts, and more. If the job can't be completed on the spot, we can advise on towing or the next steps.",
      },
      {
        type: "h2",
        text: "While you wait",
      },
      {
        type: "p",
        text: "Stay visible and stay in contact. Keep your phone charged and let your dispatcher or fleet manager know your status. If you have a refrigerated load or time-sensitive cargo, mention it so we can prioritize when possible.",
      },
      {
        type: "h2",
        text: "After you're rolling again",
      },
      {
        type: "p",
        text: "Consider a follow-up inspection. Sometimes a roadside fix is just that—a fix to get you moving. A full check at our shop or on a scheduled visit can catch related issues before they strand you again. We're here to keep South Carolina's drivers and fleets moving safely.",
      },
    ],
  },
  {
    slug: "fleet-maintenance-101-regular-service-saves-money",
    title: "Fleet Maintenance 101: How Regular Service Saves Money and Keeps Your Trucks Running",
    excerpt:
      "Scheduled maintenance isn't just a line item—it's one of the best ways to cut downtime, avoid costly repairs, and protect your bottom line.",
    date: "2025-01-28",
    author: "K&M Truck & Trailer",
    image: "/kmtruck-images/Km-Truck-Trailer-7.jpg",
    imageAlt: "Technician performing fleet maintenance",
    readTime: "7 min read",
    introLength: 2,
    content: [
      {
        type: "p",
        text: "For fleet owners and operators, downtime isn't just inconvenient—it's expensive. A single unscheduled repair can cost thousands in labor, parts, towing, and lost loads. The good news: many of those failures can be avoided with consistent, planned maintenance.",
      },
      {
        type: "p",
        text: "Regular service keeps small problems from becoming big ones. A loose belt, a slow air leak, or worn brake linings are cheap to fix when caught early. Ignored, they lead to breakdowns, accidents, or DOT violations. Preventive maintenance (PM) is built around catching these issues on a schedule, not when the truck is already on the side of the road.",
      },
      {
        type: "h2",
        text: "What should a solid PM program include?",
      },
      {
        type: "p",
        text: "Oil and filter changes, air and fuel filter replacement, brake inspections, tire checks, and electrical system checks are all standard. For diesel trucks, DPF and emissions system service belong on the list too. DOT pre-trip and annual inspection prep help you stay legal and safe.",
      },
      {
        type: "h3",
        text: "Fleet programs at K&M",
      },
      {
        type: "p",
        text: "At K&M Truck & Trailer, we work with fleets of all sizes across South Carolina. We offer PM packages that can be tailored to your mileage, hours, or calendar—whether you run a few trucks or a large fleet. Many services can be done at your location to minimize downtime.",
      },
      {
        type: "h2",
        text: "Smoothing out costs",
      },
      {
        type: "p",
        text: "Scheduling maintenance also smooths out costs. Instead of surprise bills when something breaks, you budget for known service intervals. That makes it easier to plan and often reduces total cost of ownership over the life of the truck.",
      },
      {
        type: "h2",
        text: "Getting started",
      },
      {
        type: "p",
        text: "If you're not on a formal PM schedule yet, start with the basics: oil changes, filters, and brakes. Add from there based on your operation and manufacturer recommendations. Your trucks—and your bottom line—will thank you.",
      },
    ],
  },
  {
    slug: "when-to-replace-truck-brakes-complete-guide",
    title: "When to Replace Truck Brakes: A Complete Guide for Fleet Managers and Owner-Operators",
    excerpt:
      "Brake wear varies by driving conditions, load, and maintenance. Learn how to spot wear early, when to replace vs. reline, and how to avoid DOT violations and costly downtime.",
    date: "2025-01-15",
    author: "K&M Truck & Trailer",
    image: "/kmtruck-images/Km-Truck-Trailer-7.jpg",
    imageAlt: "Technician inspecting heavy-duty truck brakes",
    readTime: "12 min read",
    introLength: 2,
    content: [
      {
        type: "p",
        text: "Brakes are the most critical safety system on your truck or trailer. Worn or out-of-adjustment brakes don't just increase stopping distance—they can lead to DOT violations, failed inspections, and in the worst case, accidents. Knowing when to replace or reline your brakes, and what to look for between service intervals, can save money and keep you legal and safe.",
      },
      {
        type: "p",
        text: "This guide walks you through the signs of brake wear, the difference between replacement and reline, how often to inspect, and what to expect when you bring your rig in for brake service in South Carolina.",
      },
      {
        type: "h2",
        text: "Why brake maintenance matters",
      },
      {
        type: "p",
        text: "Heavy-duty truck and trailer brakes take enormous stress. Every stop, every downgrade, and every load adds heat and wear. Unlike passenger vehicles, commercial brakes are designed for repeated heavy use, but they still have a finite life. Ignoring wear leads to longer stopping distances, uneven braking, and increased risk of runaway or jackknife in extreme situations.",
      },
      {
        type: "p",
        text: "DOT regulations require that brakes be properly maintained and within adjustment limits. During roadside or annual inspections, officers can place vehicles out of service for thin linings, air leaks, or improper adjustment. One out-of-service order can cost you time, money, and your CSA score.",
      },
      {
        type: "h2",
        text: "Signs your brakes need attention",
      },
      {
        type: "h3",
        text: "Warning lights and dash indicators",
      },
      {
        type: "p",
        text: "Many modern tractors and trailers have brake wear sensors or low-air warnings. A brake system warning light or low-air pressure alarm should never be ignored. These are your first line of defense and often indicate a problem before you feel it in the pedal.",
      },
      {
        type: "h3",
        text: "Pulling, vibration, or noise",
      },
      {
        type: "p",
        text: "If the truck or trailer pulls to one side under braking, you may have uneven wear, a stuck slack adjuster, or a contaminated lining. Vibration or pulsation can point to warped drums or rotors. Squealing, grinding, or metal-on-metal noise usually means linings are worn down to the shoe or pad backing—brakes need service immediately.",
      },
      {
        type: "h3",
        text: "Longer stopping distance or soft pedal",
      },
      {
        type: "p",
        text: "If you notice you need more distance to stop or the brake pedal feels soft or goes farther than usual, have the system checked. This can indicate worn linings, air in hydraulic systems, or air brake adjustment issues. Never put off addressing brake feel—it only gets worse.",
      },
      {
        type: "h2",
        text: "Replace vs. reline: what's the difference?",
      },
      {
        type: "p",
        text: "A reline means replacing the friction material (linings or pads) while reusing the same drums or rotors, provided they are still within spec. This is the most common brake service when wear is caught at the right time. Drums and rotors have minimum thickness and wear limits; once they're worn or damaged beyond those limits, they must be replaced.",
      },
      {
        type: "p",
        text: "Full replacement—new drums or rotors plus new linings—is necessary when the foundation brakes are worn, cracked, or out of specification. Your technician will measure and advise. Doing a full replacement when needed avoids comebacks and ensures consistent braking across axles.",
      },
      {
        type: "h2",
        text: "How often should brakes be inspected?",
      },
      {
        type: "p",
        text: "Pre-trip inspections should include a quick visual and functional check: air pressure build-up, brake application, and release. For a thorough brake inspection—pulling wheels and measuring lining thickness—follow your OEM and fleet schedule. Many fleets inspect brakes at every PM or at least every 25,000–50,000 miles, depending on application.",
      },
      {
        type: "p",
        text: "High-mileage or high-stress operations (e.g., mountainous terrain, heavy loads, frequent stops) may need more frequent checks. Trailers often get less attention than tractors but deserve the same level of inspection; trailer brake failures are a leading cause of inspection violations.",
      },
      {
        type: "h2",
        text: "Brake service at K&M Truck & Trailer",
      },
      {
        type: "p",
        text: "At K&M Truck & Trailer, we perform brake inspections, relines, and full brake jobs on tractors and trailers. Our team works on air and hydraulic systems and can often service you at your location or handle your rig in our shop. We'll tell you exactly what's worn, what's in spec, and what can wait until the next PM.",
      },
      {
        type: "p",
        text: "Don't wait for a warning light or a failed inspection. Schedule a brake check and keep your rig safe, legal, and on the road.",
      },
    ],
  },
  {
    slug: "trailer-electrical-and-lighting-maintenance-tips",
    title: "Trailer Electrical and Lighting Maintenance: Keep Your Lights Legal and Your Cargo Moving",
    excerpt:
      "Trailer lights and wiring take a beating from weather, road spray, and wear. Learn how to prevent failures, troubleshoot common issues, and stay DOT-compliant.",
    date: "2025-01-05",
    author: "K&M Truck & Trailer",
    image: "/why_us_banner.jpg",
    imageAlt: "Trailer lighting and electrical inspection",
    readTime: "14 min read",
    introLength: 2,
    content: [
      {
        type: "p",
        text: "Trailer electrical systems power your lights, ABS, and often your refrigeration or other equipment. When wiring fails or lights go out, you're not only at risk of a citation—you're a hazard to other drivers. A dark trailer on the road is one of the most common reasons for roadside stops and out-of-service orders.",
      },
      {
        type: "p",
        text: "Keeping trailer electrical and lighting in good shape doesn't have to be complicated. With regular checks and a few simple habits, you can catch problems before they leave you sidelined or written up. Here's a practical guide to trailer electrical and lighting maintenance.",
      },
      {
        type: "h2",
        text: "Why trailer electrical fails",
      },
      {
        type: "p",
        text: "Trailer wiring is exposed to moisture, road salt, dirt, and physical damage from loading, unloading, and coupling. Connectors corrode, wires chafe or break, and bulbs burn out. Ground connections are especially prone to failure because they rely on clean metal-to-metal contact between the trailer frame and the tractor. One bad ground can take out an entire circuit.",
      },
      {
        type: "p",
        text: "Age and poor previous repairs also play a role. Spliced wires, wrong gauge, or loose connections lead to voltage drop, flickering lights, or no power at all. Investing in proper repairs and preventive checks reduces the chance of a surprise failure on the road.",
      },
      {
        type: "h2",
        text: "What to check on every pre-trip",
      },
      {
        type: "h3",
        text: "Exterior lights",
      },
      {
        type: "p",
        text: "Walk the trailer and confirm all required lights work: clearance lights, tail lights, brake lights, turn signals, and reflectors. Have someone step on the brake pedal and use the turn signals while you watch. Replace any burned-out bulbs immediately and note any that flicker or only work when the cord is wiggled—that's often a connector or ground issue.",
      },
      {
        type: "h3",
        text: "Connector and cord",
      },
      {
        type: "p",
        text: "The seven-way (or other) connector between tractor and trailer should be clean and secure. Look for bent pins, corrosion, or moisture inside the plug. A little dielectric grease can help keep moisture out and improve contact. If the cord is frayed, cracked, or has exposed wires, it needs to be repaired or replaced before you roll.",
      },
      {
        type: "h3",
        text: "Wiring along the frame",
      },
      {
        type: "p",
        text: "Where possible, glance at wiring runs along the trailer frame. Wires should be secured and not hanging where they can catch or rub. Any spot that's rubbing metal will eventually wear through the insulation and short or open the circuit. Tie straps and loom help protect and organize wiring.",
      },
      {
        type: "h2",
        text: "Common trailer electrical problems",
      },
      {
        type: "h3",
        text: "Lights work on tractor but not on trailer",
      },
      {
        type: "p",
        text: "Usually a problem at the connector, a broken wire in the cord, or a bad ground. Check the connector first, then trace back. The ground (white wire) is the most common failure point; ensure the trailer is grounded to the tractor through the connector and that the ground path on the trailer is clean and tight.",
      },
      {
        type: "h3",
        text: "Some lights work, others don't",
      },
      {
        type: "p",
        text: "If one function (e.g., left turn) works but another (e.g., brake lights) doesn't, the issue is often in the wire or connection for that specific circuit. A wiring diagram for your trailer and a multimeter can help trace the fault. Corroded pins in the connector can also cause single-circuit failures.",
      },
      {
        type: "h3",
        text: "Lights flicker or work only when the cord is moved",
      },
      {
        type: "p",
        text: "Intermittent operation almost always points to a loose or corroded connection—connector, splice, or ground. Fix it properly; don't rely on a “good enough” position of the cord. Once the connection is reliable, the flicker should stop.",
      },
      {
        type: "h2",
        text: "DOT and inspection requirements",
      },
      {
        type: "p",
        text: "DOT regulations require that all required lamps and reflectors be present and operational. That includes tail, stop, turn, and clearance lights, and reflectors in the right places. Inspectors can put you out of service for inoperative or missing lights. Keeping your electrical system in good order isn't just good practice—it's the law.",
      },
      {
        type: "h2",
        text: "When to call a professional",
      },
      {
        type: "p",
        text: "Simple bulb changes and connector cleaning can be done on the road or in the yard. For damaged wiring, repeated failures, or complex tracing, it pays to have a technician who specializes in truck and trailer electrical. They can run down shorts, repair harnesses, and ensure everything is up to code.",
      },
      {
        type: "h3",
        text: "Trailer electrical repair at K&M",
      },
      {
        type: "p",
        text: "K&M Truck & Trailer offers full trailer electrical and lighting repair across South Carolina. We troubleshoot no-light and intermittent issues, replace harnesses and connectors, and get your trailer legal and reliable. We can often come to you—at the yard, at a terminal, or roadside—so you don't have to lose time. If you're tired of chasing trailer light gremlins or need a full lighting and wiring check before an inspection, give us a call.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
