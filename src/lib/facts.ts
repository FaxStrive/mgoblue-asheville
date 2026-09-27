// facts.ts
//
// Typed, empty facts module. The build stage fills every value in from the
// client's onboarding record. Nothing in this file may ship with a value
// belonging to any other client. If a build ever leaves one of these null or
// empty and deploys anyway, that is a bug in the build stage, not a default
// to quietly accept.

export type ServiceArea = {
  city: string;
  state: string;
};

export type Service = {
  name: string;
  description: string;
};

export type Offer = {
  headline: string;
  detail: string;
};

export type Hours = {
  day: string;
  open: string | null;
  close: string | null;
};

export type ClientFacts = {
  companyName: string | null;
  phone: string | null;
  email: string | null;
  city: string | null;
  state: string | null;
  serviceAreas: ServiceArea[];
  services: Service[];
  offers: Offer[];
  hours: Hours[];
  logoPath: string | null;
};

// Every field starts empty or null. The build stage populates this from the
// client's onboarding record before the site is ever deployed.
export const facts: ClientFacts = {
  companyName: null,
  phone: null,
  email: null,
  city: null,
  state: null,
  serviceAreas: [],
  services: [],
  offers: [],
  hours: [],
  logoPath: null,
};
