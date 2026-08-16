export const SERVICE_DIVISIONS = [
  {
    slug: "ict",
    title: "ICT Solutions",
    shortTitle: "ICT Solutions",
    icon: "flaticon-layers",
    image: "/assets/img/ogalsan/servers.jpg",
    eyebrow: "Technology & Digital Systems",
    summary:
      "End-to-end ICT consulting, infrastructure, and digital systems tailored to how your organization works.",
    description:
      "OgaalSan helps organizations plan, build, and run reliable ICT environments — from strategy and infrastructure to software, networks, and ongoing support. We focus on practical systems that improve operations, security, and service delivery.",
    highlights: [
      "ICT strategy, assessment, and digital roadmaps",
      "Infrastructure, networks, and systems setup",
      "Software, platforms, and process digitization",
      "IT support, maintenance, and capacity transfer",
    ],
    outcomes: [
      {
        title: "Clear technology direction",
        text: "A practical ICT roadmap aligned with your goals, budget, and team capacity.",
      },
      {
        title: "Reliable digital operations",
        text: "Systems and infrastructure that help your people work faster and more securely.",
      },
      {
        title: "Local delivery, lasting value",
        text: "Solutions designed for your context, with knowledge transfer built in.",
      },
    ],
  },
  {
    slug: "business-development",
    title: "Business Development",
    shortTitle: "Business Development",
    icon: "flaticon-business-presentation",
    image: "/assets/img/ogalsan/marketing.jpg",
    eyebrow: "Growth & Market Expansion",
    summary:
      "Business development and digital growth support that helps you attract clients, strengthen your offer, and scale sustainably.",
    description:
      "We support startups and growing organizations with practical business development — from refining your offer and go-to-market approach to digital marketing and client acquisition. Our focus is measurable growth, not generic advice.",
    highlights: [
      "Business model and growth strategy support",
      "Market positioning and offer development",
      "Digital marketing and client acquisition",
      "Partnerships, proposals, and expansion planning",
    ],
    outcomes: [
      {
        title: "Stronger market position",
        text: "Clear messaging and offers that make it easier to win the right clients.",
      },
      {
        title: "Practical growth systems",
        text: "Sales and marketing actions your team can run consistently.",
      },
      {
        title: "Scalable business direction",
        text: "Support from early ideas through expansion-ready operations.",
      },
    ],
  },
  {
    slug: "training",
    title: "Training & Capacity Building",
    shortTitle: "Training & Capacity Building",
    icon: "flaticon-report-1",
    image: "/assets/img/ogalsan/training-2.jpg",
    eyebrow: "Skills & Professional Development",
    summary:
      "Hands-on digital skills and ICT training so your team can confidently use modern tools and platforms.",
    description:
      "OgaalSan designs and delivers practical training for professionals, institutions, and teams. We focus on applied learning — ICT tools, digital skills, and business capabilities your people can use immediately at work.",
    highlights: [
      "ICT and digital skills training programs",
      "Custom workshops for teams and institutions",
      "Professional capacity-building pathways",
      "Training design, facilitation, and follow-up support",
    ],
    outcomes: [
      {
        title: "Confident teams",
        text: "Staff who can use digital tools and processes without constant external support.",
      },
      {
        title: "Applied learning",
        text: "Workshops and programs built around real tasks, not theory-only sessions.",
      },
      {
        title: "Institutional capability",
        text: "Training that strengthens your organization beyond a one-day event.",
      },
    ],
  },
];

export function getServiceDivision(slug) {
  return SERVICE_DIVISIONS.find((item) => item.slug === slug) || null;
}
