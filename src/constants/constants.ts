import service1 from "../assets/services/service-1.svg";
import service2 from "../assets/services/service-2.svg";
import service3 from "../assets/services/service-3.svg";
import service4 from "../assets/services/service-4.svg";
import service5 from "../assets/services/service-5.svg";
import service6 from "../assets/services/service-6.svg";
import illustartion1 from "../assets/trafalgar-illustration-2.png";
import illustartion2 from "../assets/trafalgar-illustration-3.png";

import article1 from "../assets/articles/image-1.png";
import article2 from "../assets/articles/image-2.png";
import article3 from "../assets/articles/image-3.png";
import { IArticlesProps } from "../interfaces/LandingPage/articles.interface";
import { IHealthCareProviderProps } from "../interfaces/LandingPage/healthCareProvider.interface";
import { IOurServiceItemProps } from "../interfaces/LandingPage/services.interface";
import { ILandingFooterProps } from "../interfaces/LandingPage/footer.interface";

// Status Codes
export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
  CONFLICT: 409,
};

export const PROVIDED_SERVICES: IOurServiceItemProps[] = [
  {
    serviceImage: service1,
    serviceTitle: `Search doctor`,
    serviceDescription:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    serviceImage: service2,
    serviceTitle: `Online pharmacy`,
    serviceDescription:
      "Buy your medicines with our mobile application with a simple delivery system",
  },
  {
    serviceImage: service3,
    serviceTitle: "Consultation",
    serviceDescription:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    serviceImage: service4,
    serviceTitle: `Details info`,
    serviceDescription:
      "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    serviceImage: service5,
    serviceTitle: `Emergency care`,
    serviceDescription:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    serviceImage: service6,
    serviceTitle: `Tracking`,
    serviceDescription: "Track and save your medical history and health data ",
  },
];

export const HEALTHCARE_PROVIDERS: IHealthCareProviderProps[] = [
  {
    title: `Leading healthcare providers`,
    subTitle:
      "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride  in the solutions we deliver",
    icon: illustartion1,
    buttonText: "Learn More",
    buttonIcon: "",
  },
  {
    title: `Download our mobile apps`,
    subTitle: `Our dedicated patient engagement app and 
    web portal allow you to access information instantaneously (no tedeous form, long calls, 
    or administrative hassle) and securely`,
    icon: illustartion2,
    buttonText: "Download",
    buttonIcon: "",
  },
];

export const ARTICLES: IArticlesProps[] = [
  {
    articleImage: article1,
    articleTitle: `Disease detection, check up in the laboratory`,
    articleDescription:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    articleImage: article2,
    articleTitle: `Herbal medicines that are safe for consumption`,
    articleDescription:
      "Herbal medicine is very widely used at this time because of its very good for your health...",
  },
  {
    articleImage: article3,
    articleTitle: "Natural care for healthy facial skin",
    articleDescription:
      "A healthy lifestyle should start from now and also for your skin health. There are some...",
  },
];

export const FOOTER_LIST: ILandingFooterProps[] = [
  {
    title: "Company",
    footerNavList: [
      { title: "About", onClickHandler: () => {} },
      { title: "Testimonials", onClickHandler: () => {} },
      { title: "Find a doctor", onClickHandler: () => {} },
      { title: "Apps", onClickHandler: () => {} },
    ],
  },
  {
    title: "Region",
    footerNavList: [
      { title: "Indonesia", onClickHandler: () => {} },
      { title: "Singapore", onClickHandler: () => {} },
      { title: "Hongkong", onClickHandler: () => {} },
      { title: "Canada", onClickHandler: () => {} },
    ],
  },
  {
    title: "Help",
    footerNavList: [
      { title: "Help Center", onClickHandler: () => {} },
      { title: "Contact support", onClickHandler: () => {} },
      { title: "Instructions", onClickHandler: () => {} },
      { title: "How it works", onClickHandler: () => {} },
    ],
  },
];
