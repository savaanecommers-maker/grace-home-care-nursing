export const SERVICES = [
  {
    id: 'modal-nursing-care',
    icon: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    title: 'Nursing Care',
    desc: 'Comprehensive nursing support from routine medical procedures to specialized treatments, delivered by qualified nurses.',
    modalBody: {
      intro: 'Our <strong>skilled nursing care</strong> brings hospital-quality medical support into the comfort of your home, delivered by qualified and experienced nurses.',
      subhead: 'Our nursing services include:',
      items: [
        { icon: '💉', title: 'Injections & IV Therapy', desc: 'Administering medications, injections, and intravenous fluids safely.' },
        { icon: '🩹', title: 'Wound & Dressing Care', desc: 'Cleaning, dressing, and monitoring wounds to prevent infection.' },
        { icon: '💊', title: 'Medication Management', desc: 'Ensuring the right medicines are taken at the right time.' },
        { icon: '📋', title: 'Vitals Monitoring', desc: 'Regular checks of blood pressure, sugar, temperature, and more.' },
      ]
    }
  },
  {
    id: 'modal-care-taker',
    icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    title: 'Care Taker',
    desc: 'Carefully selected, extensively trained, and deeply compassionate caretakers who prioritize your comfort and well-being.',
    modalBody: {
      intro: 'Our <strong>trained caretakers</strong> provide dedicated, round-the-clock support and companionship, treating your loved ones with warmth and respect.',
      subhead: 'What our caretakers provide:',
      items: [
        { icon: '🤝', title: 'Daily Living Support', desc: 'Assistance with everyday tasks and routines.' },
        { icon: '🍲', title: 'Meal Preparation & Feeding', desc: 'Nutritious meals prepared and served with care.' },
        { icon: '💬', title: 'Companionship', desc: 'Friendly company and emotional support throughout the day.' },
        { icon: '🕐', title: '24/7 Availability', desc: 'Full-time or part-time caretakers as per your needs.' },
      ]
    }
  },
  {
    id: 'modal-pediatric-care',
    icon: '<path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M17 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/>',
    title: 'Pediatric Care',
    desc: 'Compassionate care for children from infancy through adolescence, tailored to their unique developmental needs.',
    modalBody: {
      intro: 'Specialized <strong>home care for children</strong> from infancy through adolescence, delivered by nurses trained in pediatric needs.',
      subhead: 'Our pediatric care covers:',
      items: [
        { icon: '🍼', title: 'Newborn & Infant Care', desc: 'Feeding, hygiene, and monitoring for the youngest patients.' },
        { icon: '💊', title: 'Medication & Treatment', desc: 'Administering prescribed medicines and therapies safely.' },
        { icon: '🌡️', title: 'Illness Recovery Support', desc: 'Care during and after illness, at home.' },
        { icon: '📈', title: 'Growth Monitoring', desc: 'Tracking development and well-being.' },
      ]
    }
  },
  {
    id: 'modal-old-age-care',
    icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    title: 'Old Age Care',
    desc: 'Respectful, attentive elder care that honors the wisdom of age and goes far beyond mere assistance.',
    modalBody: {
      intro: 'Compassionate <strong>elderly care at home</strong> that preserves dignity, independence, and comfort for your ageing loved ones.',
      subhead: 'Our elderly care includes:',
      items: [
        { icon: '🧓', title: 'Daily Assistance', desc: 'Help with bathing, dressing, mobility, and meals.' },
        { icon: '🧠', title: "Dementia & Alzheimer's Care", desc: 'Patient, specialized support for memory conditions.' },
        { icon: '💊', title: 'Medication Reminders', desc: 'Keeping medication schedules on track.' },
        { icon: '❤️', title: 'Companionship', desc: 'Emotional support and friendly company.' },
      ]
    }
  },
  {
    id: 'modal-doctor-consultation',
    icon: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15a6 6 0 0 0 12 0v-4"/><circle cx="20" cy="10" r="2"/>',
    title: 'Doctor Consultation',
    desc: 'Expert doctors offering comprehensive consultation to address your health concerns with care and precision.',
    modalBody: {
      intro: 'Access <strong>expert medical advice at home</strong>. Our doctors provide consultations, follow-ups, and emergency physician support whenever you need it.',
      subhead: 'Consultation services include:',
      items: [
        { icon: '🏠', title: 'Home Visits', desc: 'Doctors visit you at home for check-ups and diagnosis.' },
        { icon: '🚑', title: 'Emergency Physician', desc: 'Prompt medical support in urgent situations.' },
        { icon: '📝', title: 'Treatment Planning', desc: 'Personalized care plans and prescriptions.' },
        { icon: '🔁', title: 'Regular Follow-ups', desc: 'Ongoing monitoring of your health condition.' },
      ]
    }
  },
  {
    id: 'modal-physiotherapy',
    icon: '<path d="M3 12h4l2 5 4-10 2 5h6"/>',
    title: 'Physiotherapy',
    desc: 'Professional physiotherapy delivered at home for comfortable, effective rehabilitation and mobility recovery.',
    modalBody: {
      intro: 'Professional <strong>physiotherapy in the comfort of your home</strong>, helping you recover mobility, strength, and independence.',
      subhead: 'Our physiotherapy covers:',
      items: [
        { icon: '🦴', title: 'Post-Surgery Rehab', desc: 'Recovery exercises after operations or injury.' },
        { icon: '🧘', title: 'Mobility & Strength', desc: 'Restoring movement and muscle strength.' },
        { icon: '🩺', title: 'Pain Management', desc: 'Relief for joint, back, and muscle pain.' },
        { icon: '🧠', title: 'Neuro Physiotherapy', desc: 'Support for stroke and paralysis recovery.' },
      ]
    }
  },
  {
    id: 'modal-post-surgical',
    icon: '<path d="M3 12h4l2 5 4-10 2 5h6"/>',
    title: 'Post-Surgical Care',
    desc: 'Attentive recovery support after surgery — wound care, dressing changes, and monitoring for a safe healing at home.',
    modalBody: {
      intro: 'Safe, monitored <strong>recovery care after surgery</strong>, helping you heal comfortably at home and avoid complications.',
      subhead: 'Post-surgical support includes:',
      items: [
        { icon: '🩹', title: 'Wound & Dressing Care', desc: 'Sterile dressing changes and infection prevention.' },
        { icon: '💊', title: 'Medication Management', desc: 'Pain relief and prescribed medicines on schedule.' },
        { icon: '📋', title: 'Vitals Monitoring', desc: 'Tracking recovery progress closely.' },
        { icon: '🚶', title: 'Mobility Support', desc: 'Safe movement and rehabilitation guidance.' },
      ]
    }
  },
  {
    id: 'modal-mother-baby',
    icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/>',
    title: 'Mother & Baby Care',
    desc: 'Postnatal support for new mothers and newborns, including feeding, hygiene, and recovery assistance.',
    modalBody: {
      intro: 'Dedicated <strong>postnatal care for new mothers and newborns</strong>, supporting recovery and healthy early development.',
      subhead: 'We provide:',
      items: [
        { icon: '🤱', title: 'Newborn Care', desc: 'Feeding, bathing, and hygiene support for the baby.' },
        { icon: '💆', title: "Mother's Recovery", desc: 'Postnatal care, massage, and wellness support.' },
        { icon: '🍲', title: 'Nutrition Guidance', desc: 'Healthy meals for mother and baby.' },
        { icon: '🌙', title: 'Night Support', desc: 'Assistance through the night as needed.' },
      ]
    }
  },
  {
    id: 'modal-palliative',
    icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    title: 'Palliative Care',
    desc: 'Gentle, dignified comfort care for patients with serious or terminal illness, focused on quality of life.',
    modalBody: {
      intro: 'Gentle, dignified <strong>comfort care for serious or terminal illness</strong>, focused entirely on quality of life and emotional support.',
      subhead: 'Palliative care includes:',
      items: [
        { icon: '💊', title: 'Pain & Symptom Relief', desc: 'Keeping the patient comfortable.' },
        { icon: '❤️', title: 'Emotional Support', desc: 'Compassionate care for patient and family.' },
        { icon: '🛏️', title: 'Bedside Care', desc: 'Full assistance with daily needs.' },
        { icon: '👨‍👩‍👧', title: 'Family Guidance', desc: 'Support and counselling for loved ones.' },
      ]
    }
  },
  {
    id: 'modal-lab-sample',
    icon: '<path d="M8 2h8M12 2v6M6 8h12l2 12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>',
    title: 'Lab Sample Collection',
    desc: 'Convenient home collection of blood and diagnostic samples, with reports delivered to your doorstep.',
    modalBody: {
      intro: 'Convenient <strong>home collection of lab samples</strong> — no need to visit a diagnostic centre. Reports delivered right to your doorstep.',
      subhead: 'Our lab services include:',
      items: [
        { icon: '🩸', title: 'Blood Sample Collection', desc: 'Safe, hygienic collection at home.' },
        { icon: '🧪', title: 'Diagnostic Tests', desc: 'A wide range of routine and specialized tests.' },
        { icon: '📄', title: 'Home Report Delivery', desc: 'Digital and printed reports delivered to you.' },
        { icon: '⏱️', title: 'Quick Turnaround', desc: 'Fast, reliable results.' },
      ]
    }
  },
  {
    id: 'modal-medical-equipment',
    icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/>',
    title: 'Medical Equipment',
    desc: 'Rental and setup of home medical equipment — hospital beds, oxygen concentrators, wheelchairs, and more.',
    modalBody: {
      intro: 'Rental and setup of <strong>home medical equipment</strong>, so you can create a safe, hospital-ready environment at home.',
      subhead: 'Available equipment:',
      items: [
        { icon: '🛏️', title: 'Hospital Beds', desc: 'Adjustable beds for patient comfort and care.' },
        { icon: '🫁', title: 'Oxygen Concentrators', desc: 'Reliable oxygen support at home.' },
        { icon: '♿', title: 'Wheelchairs & Walkers', desc: 'Mobility aids for independence.' },
        { icon: '🔧', title: 'Setup & Support', desc: 'Delivery, installation, and guidance included.' },
      ]
    }
  },
  {
    id: 'modal-nri',
    icon: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    title: 'NRI Service',
    desc: 'Living abroad? We care for your parents and loved ones back home with regular updates, so you stay connected and worry-free.',
    modalBody: {
      intro: 'Living abroad? Our <strong>NRI care service</strong> lets you ensure your parents and loved ones back home receive the best care — while you stay informed and worry-free.',
      subhead: 'What we offer NRI families:',
      items: [
        { icon: '👨‍⚕️', title: 'Dedicated Care Manager', desc: 'A single point of contact for your family.' },
        { icon: '📱', title: 'Regular Updates', desc: "Photos, calls, and reports on your loved one's health." },
        { icon: '🌍', title: 'Remote Coordination', desc: 'Arrange care from anywhere in the world.' },
        { icon: '🏥', title: 'Hospital & Emergency Help', desc: 'Assistance with appointments and emergencies.' },
      ]
    }
  },
  {
    id: 'modal-personal-care',
    icon: '<path d="M12 2a3 3 0 0 1 3 3c0 1.5-1 2.5-1 4h-4c0-1.5-1-2.5-1-4a3 3 0 0 1 3-3z"/><path d="M9 9h6l1 5H8z"/><path d="M7 22a5 5 0 0 1 10 0"/>',
    title: 'Personal Care Services',
    desc: 'Compassionate assistance with bathing, grooming, dressing, mobility, and daily activities — helping your loved ones live with comfort and dignity.',
    modalBody: {
      intro: 'Personal care services assist individuals with <strong>activities of daily living (ADLs)</strong>. These essential services help maintain independence and improve quality of life.',
      subhead: 'Personal care services typically include:',
      items: [
        { icon: '🛁', title: 'Bathing & Grooming', desc: 'Assistance with bathing, showering, grooming, and personal hygiene.' },
        { icon: '👕', title: 'Dressing', desc: 'Help with selecting and putting on clothes.' },
        { icon: '🚻', title: 'Toileting & Incontinence Care', desc: 'Assistance with using the toilet and managing incontinence.' },
        { icon: '🚶', title: 'Mobility Assistance', desc: 'Support with moving around the home, transferring from bed to chair and walking.' },
      ]
    }
  },
]

export const STATS = [
  { icon: 'star', color: 'gold', num: '5.0 ★', label: 'Google Rating' },
  { icon: 'chat', color: 'coral', num: '255+', label: 'Happy Reviews' },
  { icon: 'badge', color: 'blue', num: 'No:1', label: 'Homecare Agency' },
  { icon: 'clock', color: 'mint', num: '7 Days', label: 'A Week Service' },
]

export const WHY_ITEMS = [
  {
    num: '01',
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    title: 'Elder Care @ Home',
    desc: 'Experienced, trained staff who treat your loved ones like family, right in the comfort of home.',
  },
  {
    num: '02',
    icon: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15a6 6 0 0 0 12 0v-4"/><circle cx="20" cy="10" r="2"/>',
    title: 'Doctor Consultation',
    desc: 'Emergency physician and expert consultation services to address your health concerns with care.',
  },
  {
    num: '03',
    icon: '<path d="M3 12h4l2 5 4-10 2 5h6"/>',
    title: 'Physiotherapy at Home',
    desc: 'Professional physiotherapy delivered right at your home for comfortable, effective recovery.',
  },
  {
    num: '04',
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>',
    title: 'Personalized Care',
    desc: 'Care plans tailored to each patient, supporting you and your family every step of the way.',
  },
]

export const STEPS = [
  { num: 'Step 1', title: 'Reach Out', desc: 'Call us or message on WhatsApp. Tell us about your needs and we\'ll listen carefully.', icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.98.36 1.94.7 2.86a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.22-1.22a2 2 0 0 1 2.11-.45c.92.34 1.88.57 2.86.7A2 2 0 0 1 22 16.92z"/>' },
  { num: 'Step 2', title: 'Care Assessment', desc: "Our team assesses the patient's condition and builds a personalized care plan.", icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/>' },
  { num: 'Step 3', title: 'Nurse Matched', desc: 'We match a qualified, background-verified nurse or caretaker suited to your needs.', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { num: 'Step 4', title: 'Care At Home', desc: 'Compassionate care begins at your home, with ongoing support whenever you need it.', icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>' },
]

export const TESTIMONIALS = [
  { text: '"I searched their home care services online, but after seeing their services I liked them very much. I have also referred my relatives for their services. Thank you Grace Home Care."', date: 'Feb 2024' },
  { text: '"Thank you for the good service. My grandparents are very happy — once again thanks to the team. I had taken from other agents but they did not respond well, to be honest. So thank you so much."', date: 'Dec 2023' },
  { text: '"First of all, thanks to the Grace Home Care Nursing team. They are very genuine and good people. The service they provided satisfied me. I like the hard work of the manager — the way he responds makes me happy."', date: 'Jun 2022' },
]

export const GALLERY_FILES = [
  'ceo taking award.jpeg', 'home care nursing services.webp', 'care giving.webp',
  'Elederly care.jpeg', 'elderly care 2.jpeg', 'old age home care.webp',
  'personal care.webp', 'Icu setup.webp', 'grace home care services to the NRI.webp',
  'care take service.webp', 'home care services to the Indian Navy.webp',
  'best home care services in vizag.webp', 'home care nursing.webp',
  'home care services in vizag.webp', 'NRI services in vizag.webp',
  '1.jpeg', '2.jpeg', '3.jpeg', '5.jpeg', '6.jpeg',
  '10.jpeg', '13.jpeg', '15.jpeg', '17.jpeg', '19.jpeg', '21.jpeg', '23.jpeg',
  'unnamed.webp', 'unnamed (1).webp', 'unnamed (2).webp', 'unnamed (3).webp',
  'unnamed (4).webp', 'unnamed (5).webp', 'unnamed (6).webp', 'unnamed (7).webp',
  'unnamed (8).webp', 'unnamed (9).webp', 'unnamed (10).webp', 'unnamed (11).webp',
  'unnamed (12).webp', 'unnamed (13).webp', 'unnamed (14).webp', 'unnamed (15).webp',
  'unnamed (16).webp', 'unnamed (17).webp', 'unnamed (18).webp', 'unnamed (19).webp',
  'unnamed (20).webp', 'unnamed (21).webp', 'unnamed (22).webp', 'unnamed (23).webp',
  'unnamed (24).webp', 'unnamed (25).webp', 'unnamed (26).webp', 'unnamed (27).webp',
  'unnamed (28).webp', 'unnamed (29).webp', 'unnamed (30).webp', 'unnamed (31).webp',
  'unnamed (32).webp', 'unnamed (33).webp', 'unnamed (34).webp', 'unnamed (35).webp',
  'unnamed (36).webp', 'unnamed (37).webp', 'unnamed (38).webp', 'unnamed (39).webp',
  'unnamed (40).webp', 'unnamed (41).webp', 'unnamed (42).webp', 'unnamed (43).webp',
  'unnamed (44).webp', 'unnamed (45).webp', 'unnamed (46).webp', 'unnamed (47).webp',
  'unnamed (48).webp', 'unnamed (49).webp', 'unnamed (50).webp', 'unnamed (51).webp',
  'unnamed (52).webp', 'unnamed (53).webp', 'unnamed (54).webp', 'unnamed (55).webp',
  'unnamed (56).webp', 'unnamed (57).webp', 'unnamed (58).webp', 'unnamed (59).webp',
  'unnamed (60).webp', 'unnamed (61).webp', 'unnamed (62).webp',
]

const CAPTION_MAP = {
  'ceo taking award': 'Chairman Receiving an Award',
  'Elederly care': 'Elderly Care',
  'elderly care 2': 'Elderly Care',
  'home care nursing services': 'Home Care Nursing',
  'grace home care services to the NRI': 'NRI Family Care',
  'home care services to the Indian Navy': 'Serving the Indian Navy',
  'best home care services in vizag': 'Trusted in Vizag',
  'Icu setup': 'Home ICU Setup',
  'care take service': 'Care Taker Service',
  'care giving': 'Compassionate Caregiving',
}

export function prettyCaption(file) {
  const base = file.replace(/\.(webp|jpe?g|png)$/i, '')
  if (CAPTION_MAP[base]) return CAPTION_MAP[base]
  if (/^unnamed/i.test(base) || /^\d+$/.test(base)) return 'Grace Home Care'
  return base.replace(/\b\w/g, c => c.toUpperCase())
}
