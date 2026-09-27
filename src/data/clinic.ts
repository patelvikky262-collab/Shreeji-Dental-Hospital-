export interface Doctor {
  name: string;
  degree: string;
  college: string;
  role: string;
  image: string;
  points: string[];
  specialty: string;
  experience: string;
}

export interface Treatment {
  id: string;
  title: string;
  hindi: string;
  desc: string;
  tags: string[];
  iconName: string;
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  village: string;
  text: string;
  treatment: string;
  rating: number;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface GalleryItem {
  src: string;
  title: string;
  sub: string;
  tag: string;
}

export const clinicData = {
  name: "Shreeji Dental Hospital",
  hindi: "श्रीजी डेंटल हॉस्पिटल",
  tagline: "Complete Care for Your Smile",
  hindiTagline: "आपकी मुस्कान, हमारी ज़िम्मेदारी",
  founded: "1 June 2026",
  address: {
    line1: "Main Road, Rampura – Kalali",
    line2: "Rampura village, Rohat tehsil",
    cityState: "Pali district, Rajasthan – 306421",
    full: "Main Road, Rampura – Kalali, Rampura, Rohat, Pali 306421 (Rajasthan)"
  },
  phones: [
    { display: "63764 66371", href: "tel:+916376466371", wa: "916376466371" },
    { display: "90018 77056", href: "tel:+919001877056", wa: "919001877056" }
  ],
  instagram: "https://www.instagram.com/shreeji_dental_hospital_162026?stkn=NmQ5aDFmMmdyZzN3",
  mapEmbed: "https://www.google.com/maps?q=Shreeji%20Dental%20Hospital%20Main%20Road%20Rampura%20Kalali%20Rohat%20Pali%20Rajasthan%20306421&output=embed",
  directions: "https://www.google.com/maps/dir/?api=1&destination=Shreeji+Dental+Hospital+Main+Road+Rampura+Kalali+Rohat+Pali+Rajasthan+306421",
  mapsPhotos: "https://www.google.com/maps/search/?api=1&query=Shreeji+Dental+Hospital+Rampura+Rohat+Pali+Rajasthan",
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 2:00 PM  •  4:00 PM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM" },
    { days: "Dental Emergency", time: "Call 24/7 — we respond fast" }
  ],
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Legacy", href: "#legacy" },
    { label: "Doctors", href: "#doctors" },
    { label: "Treatments", href: "#treatments" },
    { label: "Gallery", href: "#gallery" },
    { label: "Stories", href: "#stories" },
    { label: "Book Appointment", href: "#book" },
    { label: "Visit Us", href: "#visit" }
  ],
  tickerItems: [
    "Painless Root Canal (RCT)",
    "Braces & Clear Aligners",
    "Dental Implants",
    "Zirconia Crowns & Bridges",
    "Kids Dentistry",
    "Teeth Whitening",
    "Gum Care & Scaling",
    "Complete & Partial Dentures",
    "Digital Dental X-Ray",
    "24/7 Emergency Care"
  ],
  doctors: [
    {
      name: "Dr. Mahendra Patel",
      degree: "B.D.S.",
      college: "RUHS, Jaipur",
      role: "Chief Dental Surgeon",
      image: "/images/doctor-mahendra.jpg",
      specialty: "Advanced Endodontics & Smile Designing",
      experience: "Experienced Dental Surgeon",
      points: [
        "Painless single-visit root canals & crowns",
        "Braces, clear aligners & dental implants",
        "Cosmetic dentistry & full-mouth rehabilitation"
      ]
    },
    {
      name: "Dr. Amisha Patel",
      degree: "M.B.B.S.",
      college: "SNMC, Jodhpur",
      role: "Medical & Family Care",
      image: "/images/doctor-amisha.jpg",
      specialty: "General Medicine & Family Health",
      experience: "Dedicated Medical Practitioner",
      points: [
        "Comprehensive health & medical checkups",
        "Pediatric wellness & gentle patient counseling",
        "Preventive family medicine & geriatric care"
      ]
    }
  ],
  legacy: {
    title: "In Sacred Memory & Blessing",
    hindiTitle: "स्व. श्री डूंगर राम जी पटेल की पावन स्मृति में",
    name: "Late Shri Dungar Ram Patel",
    image: "/images/doctor-dungar.jpg",
    desc: "Shreeji Dental Hospital was founded to fulfill a cherished dream of bringing world-class, honest, and affordable healthcare to the people of Rampura, Rohat, Kalali, and the entire Pali region. Built on values of compassion, selfless service, and medical excellence.",
    motto: "Dedicated to the well-being of every family in our community."
  },
  treatments: [
    {
      id: "rct",
      title: "Painless Root Canal (RCT)",
      hindi: "रूट कैनाल ट्रीटमेंट",
      desc: "Single-visit rotary RCT with profound anesthesia — save your natural tooth comfortably without pain or fear.",
      tags: ["Single Visit", "Rotary Endo", "Pain-Free"],
      iconName: "Activity",
      popular: true
    },
    {
      id: "braces",
      title: "Braces & Clear Aligners",
      hindi: "दांत सीधे करने के तार व अलाइनर",
      desc: "Metal, ceramic and invisible clear aligners to gently straighten irregular teeth for teenagers and adults.",
      tags: ["Metal", "Ceramic", "Clear Aligners"],
      iconName: "Sparkles",
      popular: true
    },
    {
      id: "crowns",
      title: "Crowns & Bridges",
      hindi: "कैप व ब्रिज",
      desc: "Strong, high-grade natural-looking Zirconia & ceramic caps that restore broken or damaged teeth.",
      tags: ["Zirconia", "Ceramic", "10-Yr Warranty"],
      iconName: "ShieldCheck"
    },
    {
      id: "implants",
      title: "Dental Implants",
      hindi: "दांतों का इम्प्लांट",
      desc: "Permanent fixed teeth replacements that let you chew, smile, and speak with complete confidence.",
      tags: ["Permanent", "Titanium", "Natural Feel"],
      iconName: "Smile",
      popular: true
    },
    {
      id: "pediatric",
      title: "Kids Dentistry",
      hindi: "बच्चों के दांतों का इलाज",
      desc: "Friendly first visits, painless milk-tooth fillings, fluoride shields, and joyful dental experiences for children.",
      tags: ["Gentle Care", "Cavity Protection", "Habit Guidance"],
      iconName: "Heart"
    },
    {
      id: "whitening",
      title: "Teeth Whitening & Smile Designing",
      hindi: "दांत चमकाना व स्माइल डिजाइन",
      desc: "In-office instant whitening and cosmetic makeovers to give you a bright, picture-perfect festive smile.",
      tags: ["Instant Glow", "Safe Enamel", "Stain Removal"],
      iconName: "Sun"
    },
    {
      id: "gums",
      title: "Gum Care & Ultrasonic Cleaning",
      hindi: "मसूड़ों का इलाज व सफाई",
      desc: "Ultrasonic scaling for bleeding gums, pyorrhea treatment, and bad breath elimination.",
      tags: ["Deep Clean", "Pyorrhea Care", "Fresh Breath"],
      iconName: "Sparkle"
    },
    {
      id: "dentures",
      title: "Complete & Partial Dentures",
      hindi: "बत्तीसी व फिक्स दांत",
      desc: "Lightweight, comfortable full and partial denture plates custom-crafted for senior citizens.",
      tags: ["Custom Fit", "BPS Grade", "Comfort Eating"],
      iconName: "CheckCircle2"
    },
    {
      id: "xray",
      title: "Digital Dental X-Ray (RVG)",
      hindi: "डिजिटल एक्स-रे",
      desc: "Ultra-low radiation high-definition digital sensor for instant on-chair diagnosis of root problems.",
      tags: ["Instant HD", "Low Radiation", "Precise"],
      iconName: "Camera"
    },
    {
      id: "emergency",
      title: "Emergency Dental Trauma Care",
      hindi: "इमरजेंसी दांत का इलाज",
      desc: "Immediate relief for severe toothache, swelling, fractured teeth, and facial injury emergencies.",
      tags: ["24/7 Priority", "Fast Relief", "Direct Call"],
      iconName: "PhoneCall",
      popular: true
    }
  ],
  stories: [
    {
      name: "Ramesh Choudhary",
      village: "Rampura",
      text: "My root canal was completely painless — I was back at work the same evening. Dr. Mahendra explains everything in simple words. Best dental care in our area.",
      treatment: "Root Canal Treatment",
      rating: 5
    },
    {
      name: "Sunita Devi",
      village: "Rohat",
      text: "My daughter used to fear dentists, but here she laughs through her checkups. The clinic is spotless and the doctors treat you like family.",
      treatment: "Kids Dentistry",
      rating: 5
    },
    {
      name: "Prakash Mali",
      village: "Kalali",
      text: "I got my mother's full dentures made here. Perfect fitting, honest pricing, and they called us for follow-up twice. Truly seva with a smile.",
      treatment: "Complete Dentures",
      rating: 5
    },
    {
      name: "Kavita Patel",
      village: "Pali",
      text: "Whitening treatment before my sister's wedding — my smile shines in every photo! Modern machines, gentle hands, very reasonable cost.",
      treatment: "Smile Whitening",
      rating: 5
    }
  ],
  faqs: [
    {
      q: "Is root canal treatment (RCT) painful?",
      a: "Not at Shreeji Dental Hospital. We use modern rotary endodontics with profound local anesthesia, so you feel only gentle pressure. Most patients say it is as easy as getting a simple filling."
    },
    {
      q: "Do you treat children and family medical needs?",
      a: "Yes! Dr. Amisha Patel (M.B.B.S.) provides comprehensive family and general medical care, while Dr. Mahendra specializes in gentle pediatric and adult dental treatments."
    },
    {
      q: "How do you ensure hygiene and sterilisation?",
      a: "We maintain 100% strict hospital-grade sterilization with multi-stage Class-B autoclaving, sealed disposable pouches for every patient, and chair disinfection after each procedure."
    },
    {
      q: "What are your consultation charges?",
      a: "Our consultations and diagnostic checkups are kept very affordable for local families in Rampura, Rohat, and Pali. Treatment costs are transparently discussed before starting — no hidden fees."
    },
    {
      q: "Do I need an appointment or can I walk in directly?",
      a: "Walk-ins are always welcomed during clinic hours! However, booking via call or WhatsApp on 63764 66371 ensures priority zero-waiting consultation. Emergencies jump the queue immediately."
    },
    {
      q: "Where exactly is Shreeji Dental Hospital located?",
      a: "We are situated on the Main Road, Rampura – Kalali (Rampura village, Rohat tehsil, Pali district 306421). It is easily accessible from Rohat, Kalali, Pali city, and neighboring villages."
    }
  ],
  gallery: [
    {
      src: "/images/hospital-photo.jpg",
      title: "Shreeji Dental Hospital",
      sub: "The hospital — inauguration day, 1 June 2026",
      tag: "OUR HOSPITAL"
    },
    {
      src: "/images/treatment.jpg",
      title: "Gentle, Modern Dentistry",
      sub: "Comfort-first treatment on a state-of-the-art dental chair",
      tag: "TREATMENT"
    },
    {
      src: "/images/clinic-1.jpg",
      title: "Sterile & Modern",
      sub: "Hygienic operatory with modern equipment",
      tag: "CLINIC"
    },
    {
      src: "/images/smile-1.jpg",
      title: "Smile Designing",
      sub: "Whitening, polishing & complete smile makeovers",
      tag: "SMILES"
    },
    {
      src: "/images/equipment.jpg",
      title: "Precision Instruments",
      sub: "Autoclave-sterilised instruments for every patient",
      tag: "CARE"
    },
    {
      src: "/images/smile-2.jpg",
      title: "Smiles of Rajasthan",
      sub: "Serving families across Rampura, Rohat & Pali",
      tag: "COMMUNITY"
    }
  ]
};
