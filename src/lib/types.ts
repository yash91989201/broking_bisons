export type CourseType = {
  name: string;
  imgSrc: string;
  isPro: boolean;
  price: number;
  paymentType: string;
  curriculum: string[];
  registrationFees?: number;
}