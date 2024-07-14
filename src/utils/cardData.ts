export interface CardData {
  id: number;
  image: string;
  title: string;
  desc: string;
  alt: string;
}

export const cardData: CardData[] = [
  {
    id: 1,
    image: "/cards-icon.png",
    title: "Customizable card",
    desc: "Custom your own card for your exact incomes and expenses needs.",
    alt: "Custom card",
  },
  {
    id: 2,
    image: "/coin-icon.png",
    title: "No payment fee",
    desc: "Transfer your payment all over the world with no payment fee.",
    alt: "Payment",
  },
  {
    id: 3,
    image: "/purse-icon.png",
    title: "All in one place",
    desc: "The right place to keep your credit and debit cards, boarding passes & more.  ",
    alt: "One place",
  },
];
