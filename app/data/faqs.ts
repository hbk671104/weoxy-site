export interface FAQ {
  question: string;
  answer: string;
}

export const shippingFaqs: FAQ[] = [
  {
    question: "What are your shipping cutoff times?",
    answer:
      "Orders placed before 2:00 PM EST on business days are processed the same day. Orders placed after the cutoff will be processed the next business day.",
  },
  {
    question: "Do you offer expedited shipping?",
    answer:
      "Yes, we offer expedited shipping options at checkout. Expedited orders are prioritized and typically arrive within 1-2 business days.",
  },
  {
    question: "Can my order be split into multiple shipments?",
    answer:
      "Yes, orders may be split into multiple shipments if items are located at different warehouses. You will receive tracking information for each shipment.",
  },
  {
    question: "Do you ship to P.O. boxes?",
    answer:
      "We can ship to P.O. boxes via USPS. However, for larger items or expedited shipping, we recommend providing a physical address.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of delivery for unused items in original packaging. Please contact our support team to initiate a return.",
  },
  {
    question: "Do you offer bulk or freight shipping?",
    answer:
      "Yes, we offer bulk freight shipping for large orders. Contact our sales team at sales@weoxy.com for bulk shipping quotes and arrangements.",
  },
];

export const supportFaqs: FAQ[] = [
  {
    question: "How do I set up my WeOxy device?",
    answer:
      "Please refer to the Quick Start Guide included with your device. You can also download it from our Support page. The setup takes less than 5 minutes.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "Battery life depends on your model and flow setting. The Q5 provides up to 7 hours, Q6 up to 9 hours, and Q7 up to 10 hours on the lowest pulse setting.",
  },
  {
    question: "Can I use my WeOxy on an airplane?",
    answer:
      "Yes, all WeOxy portable oxygen concentrators are FAA approved for use during air travel. The Q7 is rated for altitudes up to 26,781 feet.",
  },
  {
    question: "How do I clean my device?",
    answer:
      "Wipe the exterior with a soft, damp cloth. Clean the nasal cannula regularly and replace it as recommended. Never submerge the device in water.",
  },
  {
    question: "What does the warranty cover?",
    answer:
      "Our 5-year warranty covers manufacturing defects and component failures under normal use. It includes our advance replacement program — we ship a replacement within 48 hours.",
  },
  {
    question: "How do I contact technical support?",
    answer:
      "You can reach our support team by phone at 1-(617)-963-8999 or email at sales@weoxy.com, Monday through Friday, 8 AM to 6 PM EST.",
  },
  {
    question: "Where can I purchase replacement parts?",
    answer:
      "Replacement batteries and accessories are available through our Products page. Log in to your dealer account to see pricing and place orders.",
  },
  {
    question: "Do you offer training for healthcare providers?",
    answer:
      "Yes, we provide product training and educational materials for healthcare providers. Contact our sales team to schedule a training session or request materials.",
  },
];
