export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  href: string;
  items: FAQItem[];
}

export const allFaqCategories: FAQCategory[] = [
  {
    category: "Brakes",
    href: "/brakes",
    items: [
      { question: "Do you repair air brakes roadside?", answer: "Yes - our mobile repair units handle air brake leaks, brake adjustments, and emergency brake repairs right on the road." },
      { question: "What brake brands do you service?", answer: "We service all major brake brands including Bendix, Haldex, Meritor, and more across all major truck OEMs." },
      { question: "How do I know if my brakes need service?", answer: "Warning signs include pulling to one side, a hissing air leak, spongy pedal feel, grinding sounds, or ABS warning lights." },
      { question: "Do you perform DOT brake inspections?", answer: "Absolutely. We perform full DOT-compliant brake system inspections and provide documentation for your records." },
    ],
  },
  {
    category: "Tires",
    href: "/tires",
    items: [
      { question: "Do you offer roadside tire repair?", answer: "Yes! Our mobile units respond 24/7 for roadside flat repair, tire changes, and emergency blowout service." },
      { question: "What tire brands do you carry?", answer: "We stock and service major brands including Michelin, Bridgestone, Goodyear, Continental, and more." },
      { question: "How long does a tire change take?", answer: "A roadside tire change typically takes 30–60 minutes depending on access and the type of repair needed." },
      { question: "Do you service trailer tires too?", answer: "Yes, we service all trailer tire sizes. Visit our Trailer Tires page for more specific information." },
    ],
  },
  {
    category: "Battery",
    href: "/battery",
    items: [
      { question: "Can you jump-start my truck roadside?", answer: "Yes! We provide mobile jump-start service 24/7 across South Carolina for all commercial trucks and trailers." },
      { question: "How do I know if my battery is failing?", answer: "Slow engine cranking, dim lights, warning lights, or a battery that needs frequent jump-starts are all signs of a failing battery." },
      { question: "Do you test the alternator too?", answer: "Absolutely. We inspect the full charging system - battery, alternator, and voltage regulator - to find the root cause." },
      { question: "What battery brands do you use?", answer: "We install premium commercial-grade batteries from top brands, sized for your specific truck application." },
    ],
  },
  {
    category: "DPF Cleaning",
    href: "/dpf",
    items: [
      { question: "Do you offer mobile DPF regen service?", answer: "Yes! We offer mobile forced regeneration wherever you are in South Carolina - roadside, truck stop, or your yard." },
      { question: "What brands do you service?", answer: "We service all major brands including Freightliner, Kenworth, Peterbilt, Volvo, International, and Mack with Cummins, Detroit Diesel, and Paccar engines." },
      { question: "How long does DPF cleaning take?", answer: "Most DPF cleaning services take 2–4 hours depending on the level of clogging. Force regen services typically take 45–90 minutes." },
      { question: "When do I know I need DPF cleaning?", answer: "Signs include yellow/amber DPF warning lights, reduced engine power, increased fuel consumption, or the engine entering 'limp mode'." },
    ],
  },
  {
    category: "Emergency Roadside",
    href: "/emergency-roadside-repair",
    items: [
      { question: "How fast can you reach me?", answer: "We aim to arrive within 60 minutes for most locations in and around Columbia, SC. We dispatch immediately upon your call." },
      { question: "What can you fix roadside?", answer: "We repair tires, brakes, air leaks, electrical faults, jump-starts, fuel delivery, hub issues, and many other mechanical failures roadside." },
      { question: "Do you serve all of South Carolina?", answer: "Yes! Our mobile units serve all of South Carolina with primary coverage along I-77, I-26, and I-20 corridors." },
      { question: "Is emergency service available on holidays?", answer: "Yes - our emergency team is available 24 hours a day, 365 days a year, including all holidays." },
    ],
  },
  {
    category: "Transmission",
    href: "/transmission",
    items: [
      { question: "Do you rebuild transmissions?", answer: "Yes. We perform complete transmission rebuilds and overhauls for all major heavy-duty truck transmission brands." },
      { question: "How do I know if my transmission needs repair?", answer: "Signs include slipping gears, hard shifts, delayed engagement, unusual noises, or transmission warning lights." },
      { question: "How long does a transmission rebuild take?", answer: "A full transmission rebuild typically takes 3–5 business days. Simpler services like fluid changes take just a few hours." },
      { question: "Do you service Allison automatic transmissions?", answer: "Yes, we specialize in Allison automatic and Eaton Fuller manual transmissions, among all other major brands." },
    ],
  },
  {
    category: "Electrical",
    href: "/electrical",
    items: [
      { question: "Do you repair trailer lighting?", answer: "Yes, we diagnose and repair all trailer lighting issues, including short circuits, damaged harnesses, and LED upgrades." },
      { question: "Can you fix starting and charging issues?", answer: "Absolutely. We test and replace batteries, alternators, and starters to ensure your truck turns over reliably." },
      { question: "What electrical systems do you service?", answer: "We repair all electrical systems including lighting, ECM harnesses, ABS wiring, charging systems, and cab accessories." },
      { question: "Is mobile electrical repair available?", answer: "Yes! If your truck won't start or has a dead battery, our mobile units can diagnose and fix the issue at your location." },
    ],
  },
  {
    category: "Trailer Repair",
    href: "/trailer-repair",
    items: [
      { question: "Do you perform DOT trailer inspections?", answer: "Yes. We perform thorough federal DOT inspections and provide all necessary documentation for your compliance records." },
      { question: "Can you repair trailer frames?", answer: "Yes, we perform trailer frame and structural repairs to restore both safety and integrity." },
      { question: "Do you service refrigerated trailers?", answer: "We service all trailer types including refrigerated, dry van, flatbed, and specialty trailers." },
      { question: "Is mobile trailer repair available?", answer: "Yes. Most trailer repairs can be done at your location. Call us for a mobile repair dispatch." },
    ],
  },
  {
    category: "Engine Diagnostics",
    href: "/vehicle-engine-diagnostic",
    items: [
      { question: "What diagnostic software do you use?", answer: "We use Cummins Insite, Detroit Diagnostic Link (DDL), and other OEM-specific software for accurate diagnostics." },
      { question: "Can you diagnose issues roadside?", answer: "Yes! Our mobile diagnostic units can read fault codes and perform preliminary diagnosis at your location." },
      { question: "How long does a diagnostic take?", answer: "Basic diagnostic scanning takes 30–60 minutes. Complex intermittent issues may require additional test drive time." },
      { question: "Do you clear codes after repair?", answer: "Yes, we clear all related fault codes and verify repair success through test procedures before returning your truck." },
    ],
  },
  {
    category: "Steering & Suspension",
    href: "/steering-and-suspension",
    items: [
      { question: "How do I know if my suspension needs repair?", answer: "Signs include uneven tire wear, drifting or pulling, bouncing, difficulty steering, or clunking sounds over bumps." },
      { question: "Do you perform wheel alignments?", answer: "Yes, we perform precision wheel alignments on commercial trucks to improve handling and extend tire life." },
      { question: "Can you repair air ride suspension?", answer: "Yes, we service and repair air ride suspension systems including air bags, valves, and height sensors." },
      { question: "Is mobile suspension diagnosis available?", answer: "We can perform an initial inspection at your location, though most suspension repairs are best done in our shop." },
    ],
  },
  {
    category: "Air Conditioning",
    href: "/air-conditioning",
    items: [
      { question: "Can you recharge my truck AC roadside?", answer: "Yes, we offer mobile AC service including refrigerant recharge and leak diagnosis across South Carolina." },
      { question: "What refrigerant type do you use?", answer: "We use R-134a for most truck applications and R-1234yf for newer model vehicles as specified by the manufacturer." },
      { question: "How do I know if my AC compressor needs replacement?", answer: "Signs include loud clicking or grinding noise from the AC, no cold air, visible damage to the compressor, or clutch not engaging." },
      { question: "Do you repair parking heaters?", answer: "Yes, we service and repair auxiliary parking heaters (Webasto, Espar, etc.) for sleeper comfort." },
    ],
  },
  {
    category: "Force Regen",
    href: "/force-regen",
    items: [
      { question: "What is a force regen?", answer: "A forced regeneration is a process where your truck's DPF (diesel particulate filter) is cleaned by burning off accumulated soot using elevated exhaust temperatures, initiated via diagnostic software." },
      { question: "How long does force regen take?", answer: "A typical forced regeneration takes 45–90 minutes to complete, depending on the engine and DPF condition." },
      { question: "Do you come to my location?", answer: "Yes! Our mobile team comes to your truck's location - roadside, truck stop, or your yard - anywhere in South Carolina." },
      { question: "When do I need a force regen vs DPF cleaning?", answer: "Force regen clears soot through heat. If soot levels are very high or there's ash buildup, physical DPF cleaning may also be needed." },
    ],
  },
  {
    category: "Forced Regeneration",
    href: "/forced-regeneration",
    items: [
      { question: "What triggers the need for a forced regeneration?", answer: "A DPF warning light, engine entering limp mode, reduced power, or excessive soot accumulation prompting the system to demand a regen." },
      { question: "How is forced regen different from passive regen?", answer: "Passive regen happens automatically during highway driving. Forced regen requires a technician to initiate it via diagnostic software when passive regen hasn't cleared the filter." },
      { question: "Can I do a forced regen myself?", answer: "No - forced regen requires professional diagnostic equipment connected to your truck's ECM. Attempting it improperly can cause damage." },
      { question: "Is mobile service available?", answer: "Absolutely. We provide mobile forced regeneration service throughout South Carolina, 24 hours a day, 7 days a week." },
    ],
  },
  {
    category: "Lockouts",
    href: "/lockouts",
    items: [
      { question: "Can you unlock my truck without breaking anything?", answer: "Yes. Our technicians use professional lockout tools designed for commercial trucks that gain entry without damage." },
      { question: "Do you unlock trailers too?", answer: "Yes, we handle both cab and cargo trailer lockouts, including situations with lost or broken keys." },
      { question: "How fast can you respond to a lockout?", answer: "We typically respond within 45–60 minutes for most locations in South Carolina." },
      { question: "Are you available nights and weekends?", answer: "Yes! Lockout service is available 24/7, 365 days a year - including nights, weekends, and holidays." },
    ],
  },
  {
    category: "Fuel Delivery",
    href: "/fuel-delivery",
    items: [
      { question: "How quickly can you deliver fuel?", answer: "We typically reach your location within 60–90 minutes anywhere in South Carolina." },
      { question: "Do you deliver DEF (Diesel Exhaust Fluid) too?", answer: "Call us about DEF delivery - availability varies by location and unit." },
      { question: "Do you need to prime the fuel system after delivery?", answer: "If the truck ran completely out of fuel, priming the system is usually necessary. Our technicians handle this as part of the service." },
      { question: "How much fuel do you typically deliver?", answer: "We typically deliver enough to get you to the nearest fueling station - around 20–50 gallons for most situations." },
    ],
  },
  {
    category: "Semi Truck Repair",
    href: "/semi-truck-repair",
    items: [
      { question: "What truck brands do you service?", answer: "We service all major brands: Freightliner, Kenworth, Peterbilt, Volvo, International, Mack, and Western Star." },
      { question: "Do you offer fleet maintenance programs?", answer: "Yes, we offer preventive maintenance programs tailored to your fleet size and operational needs." },
      { question: "Can you handle emergency breakdowns?", answer: "Absolutely. Our emergency mobile team is available 24/7 to respond to breakdowns anywhere in South Carolina." },
      { question: "How do you handle engine diagnostics?", answer: "We use professional diagnostic tools including Cummins Insite, Detroit Diagnostic Link, and other OEM software for accurate fault reading." },
    ],
  },
  {
    category: "Engine & Transmission Repairs",
    href: "/engine-transmission-repairs",
    items: [
      { question: "Do you offer engine overhaul services?", answer: "Yes. We perform complete engine overhauls including in-frame and out-of-frame rebuilds for all major diesel engines." },
      { question: "Can you rebuild Allison transmissions?", answer: "Yes, we specialize in Allison automatic transmission rebuilds and Eaton Fuller manual gearbox repair and overhaul." },
      { question: "How long does an engine overhaul take?", answer: "Engine overhauls typically take 5–10 business days depending on parts availability and the extent of the rebuild." },
      { question: "Do you warranty your engine and transmission work?", answer: "Yes. All major engine and transmission repairs come with a warranty on parts and labor. Ask us for specific terms." },
    ],
  },
  {
    category: "Air & Cabin Filter",
    href: "/air-and-cabin-filter",
    items: [
      { question: "How often should I replace my truck's air filter?", answer: "Generally every 25,000–50,000 miles, but depends on operating conditions. Dusty environments require more frequent replacement." },
      { question: "Does a clogged air filter hurt fuel economy?", answer: "Yes. A restricted air filter reduces airflow to the engine, causing it to work harder and consume more fuel." },
      { question: "Do you offer full preventive maintenance packages?", answer: "Yes, we offer complete PM packages including oil change, all filters, fluid checks, and safety inspection." },
      { question: "How long does filter replacement take?", answer: "Most filter replacements take 30–60 minutes and can often be done while you wait." },
    ],
  },
  {
    category: "Heating & AC Repairs",
    href: "/heating-ac-repairs",
    items: [
      { question: "Can you fix my heat roadside?", answer: "For simpler heater issues like a stuck thermostat or low coolant, yes. Complex heater core replacements are best done in our shop." },
      { question: "What causes truck AC to stop working?", answer: "Common causes include refrigerant leaks, compressor failure, blocked condenser, or electrical faults in the control module." },
      { question: "Do you service auxiliary parking heaters?", answer: "Yes, we service Webasto, Espar, and other auxiliary parking heaters used in sleeper cabs." },
      { question: "How long does an AC recharge take?", answer: "A basic AC recharge typically takes 1–1.5 hours including leak testing and refrigerant recovery and recharge." },
    ],
  },
  {
    category: "Electrical & Battery Charging",
    href: "/electrical-battery-charging-systems",
    items: [
      { question: "How do I know if my alternator is failing?", answer: "Signs include dimming lights, battery not holding charge, electrical accessories malfunctioning, or a charging system warning light." },
      { question: "Can a bad alternator damage my batteries?", answer: "Yes. An overcharging alternator can destroy batteries. An undercharging one leaves your batteries drained. We test both." },
      { question: "Do you repair welding and data communication wiring?", answer: "Yes, we repair main harness wiring, sensor circuits, and communication bus wiring (J1939, J1708, CAN bus)." },
      { question: "Is overnight battery testing available?", answer: "For intermittent charging issues, we can perform extended overnight battery and charging system monitoring." },
    ],
  },
  {
    category: "Liftgate Repair",
    href: "/liftgate-repair",
    items: [
      { question: "What liftgate brands do you service?", answer: "We service all major brands including Maxon, Waltco, Anthony, Tommy Gate, Thieman, and more." },
      { question: "Can you repair hydraulic liftgate leaks?", answer: "Yes. Hydraulic leaks are a common issue. We locate the leak, replace seals or cylinders, and refill fluid." },
      { question: "Is liftgate safety inspection included?", answer: "Yes, every liftgate repair includes a full safety inspection and operational test before we return your vehicle." },
      { question: "Do you offer mobile liftgate repair?", answer: "Yes, most liftgate repairs can be performed at your location with our mobile technicians." },
    ],
  },
  {
    category: "Trailer Door",
    href: "/trailer-door",
    items: [
      { question: "Can you fix a bent trailer door?", answer: "Yes, we repair door panels and tracks that have been bent or damaged from dock incidents or accidents." },
      { question: "Do you replace door seals?", answer: "Absolutely. A proper door seal is critical for cargo protection. We replace all types of trailer door seals and gaskets." },
      { question: "Is mobile trailer door repair available?", answer: "Yes, most door repairs can be performed at your location with our fully equipped mobile repair units." },
      { question: "Do you work on refrigerated trailer doors?", answer: "Yes, we service refrigerated trailer doors including the special gasket seals that maintain temperature integrity." },
    ],
  },
  {
    category: "Trailer Electrical & A/C",
    href: "/trailer-electrical-a-c-overhaul-services",
    items: [
      { question: "Do you diagnose trailer ABS issues?", answer: "Yes. We diagnose and repair trailer anti-lock brake system (ABS) electrical faults including wheel sensors and control modules." },
      { question: "Can you rewire my trailer lighting?", answer: "Yes, we perform complete trailer lighting rewires, connector upgrades, and LED lighting conversions." },
      { question: "Do you service refrigerated trailer electrics?", answer: "Yes, we service the electrical systems of refrigerated trailers including power connections, temperature controllers, and wiring." },
      { question: "Is DOT lighting compliance guaranteed?", answer: "Yes. All lighting work meets or exceeds DOT requirements. We provide documentation for your records." },
    ],
  },
  {
    category: "Trailer Tires",
    href: "/trailer-tires",
    items: [
      { question: "Can you change trailer tires roadside?", answer: "Yes. We respond 24/7 for roadside trailer tire changes and flat repairs anywhere in South Carolina." },
      { question: "What trailer tire sizes do you carry?", answer: "We carry all common trailer tire sizes including 11R22.5, 11R24.5, 245/70R19.5, and more." },
      { question: "Do you also repair the rim?", answer: "We inspect rims for damage during tire service and can repair or replace bent or cracked rims." },
      { question: "How long does a trailer tire change take?", answer: "A standard trailer tire change takes 30–60 minutes on-site, depending on access and conditions." },
    ],
  },
  {
    category: "Semi Truck Tires",
    href: "/semi-truck-tires",
    items: [
      { question: "Do you stock steer tires for 18-wheelers?", answer: "Yes, we stock all positions including steer, drive, and trailer tires for commercial semi-trucks." },
      { question: "Can you match OEM specifications?", answer: "Yes, we match OEM tire specifications for load rating, speed rating, and size." },
      { question: "Do you offer roadside tire replacement?", answer: "Yes - 24/7 roadside tire replacement for all semi-truck configurations anywhere in South Carolina." },
      { question: "How do I know when to replace my semi tires?", answer: "Replace tires when tread depth is below 4/32\" (steer) or 2/32\" (drive/trailer), when there is visible sidewall damage, or after any blowout event." },
    ],
  },
  {
    category: "Tire, Brake & Suspension",
    href: "/tire-brake-suspension-services",
    items: [
      { question: "Do you offer package pricing for all three systems?", answer: "Yes. Our tire, brake, and suspension service package offers bundled pricing for full system inspections and repairs." },
      { question: "Is this service available for my full fleet?", answer: "Absolutely. We offer fleet maintenance programs covering all three systems on a scheduled basis." },
      { question: "Can you do roadside tire and brake service together?", answer: "Yes, our mobile units can handle both tire and brake repairs at your location simultaneously." },
      { question: "What does the DOT inspection cover?", answer: "Our DOT inspection covers brake function, tire condition and tread depth, wheel fasteners, suspension integrity, and more." },
    ],
  },
  {
    category: "Body & Trim",
    href: "/body-trim",
    items: [
      { question: "Do you repair fiberglass body panels?", answer: "Yes, we repair both fiberglass and aluminum truck body panels and fairings." },
      { question: "Can you help with insurance claim repairs?", answer: "We can provide documentation and repair estimates for insurance claims." },
      { question: "Do you work on sleeper cab damage?", answer: "Yes, we handle sleeper cab repairs including damage to exterior panels, doors, and trim." },
      { question: "How long does body repair take?", answer: "Depending on the extent of damage, most body repairs are completed in 1–3 business days." },
    ],
  },
];
