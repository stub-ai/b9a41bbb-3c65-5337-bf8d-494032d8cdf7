import Image from 'next/image';
import PricingCard from '../components/PricingCard';

const plans = [
  {
    name: 'Basic',
    price: '$20/month',
    features: ['1 Website', '5 GB Storage', 'Unlimited Bandwidth', '24/7 Support'],
  },
  {
    name: 'Pro',
    price: '$40/month',
    features: ['3 Websites', '20 GB Storage', 'Unlimited Bandwidth', '24/7 Support'],
  },
  {
    name: 'Enterprise',
    price: '$60/month',
    features: ['Unlimited Websites', 'Unlimited Storage', 'Unlimited Bandwidth', '24/7 Support'],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-10">Our Pricing Plans</h1>
      <div className="flex flex-wrap justify-center">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </main>
  );
}