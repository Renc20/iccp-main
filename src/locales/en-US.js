// ----- Components -----

export const EnNavLinks = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/mission-vision', label: 'Mission + Vision' },
  { link: '/resources', label: 'Resources' },
  { link: '/contact', label: 'Contact' },
];

export const EnAllLinks = {
  home: EnNavLinks[0],
  about: EnNavLinks[1],
  mission: EnNavLinks[2],
  resources: EnNavLinks[3],
  contact: EnNavLinks[4],
  application: { link: '/application', label: 'Membership Application' },
  success: { link: 'success', label: 'Thank You' },
};

export const EnContactForm = {
  name: 'Name',
  email: 'Email Address',
  phone: 'Phone Number',
  message: 'Additional Details (Optional)',
  cta: 'Submit',
};

export const EnMembershipForm = {
  title: 'Application Form',
  section1: 'Basic Information',
  name: 'Full Name',
  phone: 'Phone Number',
  email: 'Email Address',
  dob: 'Date of Birth',
  mailingAddress: 'Mailing Address',
  gender: 'Gender',
  denomination: 'Denomination',
  churchInformation: 'Church Information',
  churchName: 'Church Name',
  churchMailingAddress: 'Church Mailing Address',
  experience: 'Experience & Qualifications',
  experienceQ1: 'Briefly describe your pastoral experience.',
  experienceQ2: 'Briefly describe the extent of your theological training.',
  experienceQ3: 'Do you have any relevant certifications or licenses?',
  beliefs: 'Beliefs & Practices',
  beliefsQ1: 'Please describe your theological beliefs and practices.',
  beliefsQ2: 'What areas of ministry are you most passionate about?',
  expectations: 'Expectations',
  expectationsQ1:
    'What do you hope to gain from your membership in this organization?',
  expectationsQ2:
    'What areas are you currently looking to grow in as a pastor?',
  expectationsQ3: 'What do you hope to contribute to the organization?',
  references: 'References (optional)',
  referencesQ1:
    'Can you provide the contact information of one or two pastoral references who can vouch for your work or character?',
  commitment: 'Commitment',
  commitmentQ1:
    "Are you willing to commit to actively participate in the organization's activities and initiatives?",
  commitmentQ2: 'How much time can you commit on a regular basis?',
  submit: 'Submit Application',
};

export const EnNewsletterForm = {
  name: 'Name',
  email: 'Email Address',
  cta: 'Submit',
  redirectUrl: '/success',
};

export const EnFooter = {
  verseText:
    '“He said to them, “Go into all the world and preach the gospel to all creation.”',
  verseRef: 'Mark 16:15',
  ctaHeader: 'View our Latest Report',
  ctaButton: 'Access Report',
  more: 'More Links',
  terms: 'Terms & Conditions',
  gdpr: 'GDPR Information',
  cta: 'Sign up for our newsletter',
  ctaText: 'Get one email per week with our latest news.',
  copyright:
    '© 2023 International Coalition of Christian Pastors. All Rights Reserved.',
};

// ----- Pages -----

export const EnHomepageContent = {
  header: 'Building Stronger Pastors Together',
  cta1: 'Learn More',
  cta2: 'Apply for Membership',
  paragraph1:
    'The ICCP is an non-denominational, international group of Christian pastors and leaders who have the shared goal of spreading the gospel to the ends of the earth utilizing lessons learned and best practices.',
  valuesCta: 'See Our Values',
  testimonialHeader: 'What People Are Saying',
  testimonial1body:
    'ICCP has been a true blessing in my ministry. The resources and training provided have helped me grow as a pastor and better serve my community. I am grateful for this organization and all that it does to support Christian pastors and leaders.',
  testimonial1name: 'Rev. David Brown',
  testimonial1title: 'Senior Pastor',
  testimonial2body:
    'I have been a part of ICCP for several years now and I can say with certainty that it has been a game-changer for my ministry. The connections I’ve made and the knowledge I’ve gained through GCPG have been invaluable.',
  testimonial2name: 'Rev. Elizabeth Rodriguez',
  testimonial2title: 'Associate Pastor',
  testimonial3body:
    'As a young pastor, I was looking for guidance and support in my ministry, and I found it in ICCP. The mentorship and resources provided have helped me to grow and serve my congregation with confidence. I am so grateful for this organization and all that it does.',
  testimonial3name: 'Rev. Michael Lees',
  testimonial3title: 'Youth Pastor',
  stat1:
    'of pastors who have participated in ICCP training report improved preaching skills and increased confidence in their ministry.',
  stat2: 'of Americans identify as Christian.',
  stat3:
    'Research shows that regular church attendance has been linked to better physical and mental health outcomes, including lower rates of depression and stress',
  contactHeader: 'Contact Us',
  contactInfo:
    'We’d love to hear from you! Fill out the form below and a member of the ICCP team will get back to you as soon as possible. Whether you have a question, comment, or just want to connect, we’re here to help.',
};

export const EnMissionVisionPageContent = {
  header: 'Our Mission & Vision',
  mission: 'Mission Statement',
  missionText:
    'The International Christian Coalition of Pastors (ICCP) is a non-denominational, international group of Christian pastors and leaders committed to uniting believers around the world to serve God and share the gospel. We strive to empower each other to be agents of transformation and reconciliation in our communities, to be a light and a witness of God’s love and grace, and to be a unified voice in speaking out against injustice, poverty, and oppression. We recognize and celebrate the strength of our differences, providing our members with the knowledge and resources they need to be effective in their mission and to foster a spirit of unity among us. Together, we are determined to create a better world, rooted in the love of God.',
  vision: 'Vision Statement',
  visionText:
    'The International Christian Coalition of Pastors (ICCP) envisions a world where all believers are united in the mission of sharing the gospel and spreading the love of God. We are committed to fostering collaboration and fellowship among our members, to equipping them with the knowledge and resources they need to be effective in their mission, and to providing a safe and welcoming space for discussion and dialogue. We seek to be a unified voice for the global Christian community, and to bring about lasting and meaningful change in our world.',
};

export const EnApplicationPageContent = {
  h2: 'Apply for Membership in ICCP',
  p1: 'Welcome to the Membership Application page. We are excited that you are interested in becoming a member of the ICCP. The ICCP is committed to providing its members with the resources they need to be effective in their mission.',
  p2: 'Please fill out the application form below to start the membership process. We look forward to getting to know you.',
  p3: 'After beginning the application process, you can expect to hear from us within 3-5 business days.',
  formHeader: 'Application Form',
};

export const EnSuccessPageContent = {
  header: 'Thank You',
  text: 'We have received your submission and will be in touch shortly.',
  btnText: 'Go to homepage',
};

export const EnResourcesPageContent = {
  title: 'Resources',
  card1: 'Educational Materials',
  card2: 'Training Programs',
  card3: 'Mentorship Opportunities',
  p1: "By applying for membership to the ICCP, you can learn more about the various resources and opportunities we offer, such as our educational materials, training programs, and mentorship opportunities. As a member, you'll be among the first to know when new resources and opportunities become available. We believe that by working together and sharing our knowledge and experience, we can make a greater impact in spreading the gospel to the ends of the earth.",
  p2: 'Apply for membership today to learn more about how ICCP can help you grow as a Christian pastor or leader.',
  cta: 'Apply Now',
  header2: 'Resources + access.',
  p3: 'The ICCP is committed to providing its members with the resources they need to be effective in their mission. We offer a variety of educational materials, training programs, and mentorship opportunities in order to equip our members with the knowledge and tools they need to lead effectively. We also provide access to the latest news and trends in the field of Christian ministry and cultural preservation, and strive to be a source of information and support for our members. Our aim is to provide our members with the resources they need to be successful in realizing their mission.',
  header3: 'Helping you succeed.',
  p4: 'We also offer a range of programs and resources to help our members in their ministry. We provide access to resources such as prayer and worship resources, small group ministry tools, and outreach tools to help members reach their communities. In addition, our website includes devotionals and other forms of spiritual encouragement, as well as resources to help members grow and develop their ministries. We are committed to helping our members succeed in their mission.',
  header4: 'Subscribe for Notifications & Updates from ICCP.',
  p5: 'If you would like to stay up to date on the latest news and resources from the ICCP, you can subscribe to our newsletter. We will send you regular updates about our initiatives and activities. Our newsletter is a great way to stay informed and connected with the ICCP and our members. We look forward to keeping you up to date and helping you succeed in your mission.',
};

export const EnAboutPageContent = {
  h1: 'About the ICCP',
  p1: 'The ICCP is an non-denominational, international group of Christian pastors and leaders who have the shared goal of spreading the gospel to the ends of the earth utilizing lessons learned and best practices.',
  p2: 'We seek to empower each other to be agents of transformation and reconciliation in our communities, to be a light and a witness of God’s love and grace, and to be a unified voice in speaking out against injustice, poverty, and oppression. We are committed to working together to create a more just and equitable world, rooted in the love of God.',
  headingUnity: 'Unity & Diversity',
  contentUnity: [
    'We recognize and celebrate the strength of our differences, embracing our various backgrounds, cultures, and perspectives as valuable contributions to our collective mission.',
    'We value our diversity and strive to create an inclusive environment where all are welcome and respected.',
    'At the same time, we recognize that it is only through a commitment to unity that we can effectively work together to make a difference.',
    'We strive to foster a spirit of unity among our members, recognizing that it is only through our collective voice and actions that we can make the greatest impact.',
    'We believe that our differences can be a source of strength, and that through our unity we can bring about lasting and meaningful change in our world.',
  ],
  headingResources: 'Resources & Support',
  contentResources: [
    'We provide our members with the knowledge and resources they need to be effective in their mission.',
    'We offer a variety of resources, including educational materials, training programs, and mentorship opportunities. We are also committed to creating a safe and welcoming space for discussion and collaboration.',
    'We invite you to join us in building the Kingdom of God, and to be a part of this movement of unity and transformation. Together, we can make a lasting impact in our world and be a beacon of hope to those in need.',
  ],
  headingGet: 'Get Involved',
  contentGet: [
    'Everyone is invited to join us in this important mission and become part of the ICCP.',
    'As a member, you will have the opportunity to contribute to our many initiatives, whether you are a member of a large organization or an individual looking to make a difference.',
    'We believe that everyone should have a chance to be part of our mission, so we encourage all to take part in this unique opportunity to get involved and make a lasting impact. Come make a difference together.',
  ],
};

export const EnContactPageContent = {
  title: 'Contact',
  alertText: 'Looking for the Membership Application form?',
  alertLink: 'Find it here.',
  paragraph:
    'We’d love to hear from you! Fill out the form below and a member of the ICCP team will get back to you as soon as possible. Whether you have a question, comment, or just want to connect, we’re here to help.',
};
