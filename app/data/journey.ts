export interface JourneyStep {
  step: number;
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Register",
    description: "Create your dealer account online in minutes",
  },
  {
    step: 2,
    title: "Verify",
    description: "Complete the verification process for your practice",
  },
  {
    step: 3,
    title: "Quote",
    description: "Request a custom quote for your order",
  },
  {
    step: 4,
    title: "Order",
    description: "Place your order through our secure platform",
  },
  {
    step: 5,
    title: "Ship",
    description: "Receive real-time tracking from our nearest warehouse",
  },
  {
    step: 6,
    title: "Deliver",
    description: "Get your devices delivered within 2-5 business days",
  },
];
