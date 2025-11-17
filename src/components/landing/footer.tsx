
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

const footerSections = [
  {
    title: 'ACCEPT PAYMENTS',
    links: [
      { text: 'Payment Gateway', href: '#' },
      { text: 'Payment Pages', href: '#' },
      { text: 'Payment Links', href: '#' },
      { text: 'QR Codes', href: '#' },
      { text: 'payme POS', href: '#', isNew: true },
      { text: 'Subscriptions', href: '#' },
      { text: 'Smart Collect', href: '#' },
      { text: 'Optimizer', href: '#' },
      { text: 'Instant Settlements', href: '#' },
    ],
  },
  {
    title: 'BANKING PLUS',
    links: [
      { text: 'paymeX', href: '#' },
      { text: 'Source to pay', href: '#' },
      { text: 'Current Accounts', href: '#' },
      { text: 'Payouts', href: '#' },
      { text: 'Payout Links', href: '#' },
      { text: 'Corporate Credit Card', href: '#' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { text: 'About Us', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Terms of Use', href: '#' },
      { text: 'Privacy Policy', href: '#' },
      { text: 'Grievance Redressal', href: '#' },
      { text: 'Responsible Disclosure', href: '#' },
      { text: 'Partners', href: '#' },
      { text: 'White papers', href: '#' },
      { text: 'Corporate Information', href: '#' },
    ],
  },
  {
    title: 'PAYROLL',
    links: [{ text: 'paymeX Payroll', href: '#' }],
  },
  {
    title: 'DEVELOPERS',
    links: [{ text: 'Docs', href: '#' }, { text: 'Integrations', href: '#' }, { text: 'API Reference', href: '#' }],
  },
  {
    title: 'HELP & SUPPORT',
    links: [{ text: 'Support', href: '#' }, { text: 'Knowledge base', href: '#' }],
  },
  {
    title: 'BECOME A PARTNER',
    links: [{ text: 'Refer and Earn', href: '#' }, { text: 'Onboarding APIs', href: '#' }],
  },
  {
    title: 'RESOURCES',
    links: [
      { text: 'Blog', href: '#' },
      { text: 'Learn', href: '#' },
      { text: 'Customer Stories', href: '#' },
      { text: 'Events', href: '#' },
      { text: 'Chargeback Guide', href: '#' },
      { text: 'Settlement Guide', href: '#' },
    ],
  },
  {
    title: 'FIND US ONLINE',
    isSocial: true,
    links: [
      { icon: Facebook, href: '#' },
      { icon: Twitter, href: '#' },
      { icon: Instagram, href: '#' },
      { icon: Github, href: '#' },
      { icon: Linkedin, href: '#' },
    ],
  },
  {
    title: 'MORE',
    links: [
      { text: 'Route', href: '#' },
      { text: 'Invoices', href: '#' },
      { text: 'Freelancer Payments', href: '#' },
      { text: 'International Payments', href: '#' },
      { text: 'Flash Checkout', href: '#' },
      { text: 'UPI', href: '#' },
      { text: 'ePOS', href: '#' },
    ],
  },
  {
    title: 'SOLUTIONS',
    links: [
      { text: 'Education', href: '#' },
      { text: 'E-commerce', href: '#' },
      { text: 'SaaS', href: '#' },
      { text: 'BFSI', href: '#' },
    ],
  },
  {
    title: 'REGD. OFFICE ADDRESS',
    isAddress: true,
    address: [
      'payme Software Limited,',
      '1st Floor, SJR Cyber,',
      '22 Laskar Hosur Road, Adugodi,',
      'Bengaluru, 560030,',
      'Karnataka, India',
      'CIN: U72200KA2013PLC097389',
    ],
  },
];
export default function Footer() {
  return (
    <footer className="bg-[#0b2138] text-white">
       <div className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Supercharge your business with FinLanding
              </h2>
              <p className="text-blue-200 mt-2">
                Sign up to experience a seamless flow of money and innovative financial solutions.
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                Sign Up Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-blue-700">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Section */}
          <div className="md:col-span-3 space-y-4">
            <Logo className="h-7 w-auto" />
            <p className="text-sm text-gray-400 leading-relaxed">
              payme is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              paymeX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes.
            </p>
            <p className="text-xs text-gray-500">
              Disclaimer: The paymeX powered Current Account and VISA corporate credit card are provided by RBI licensed banks.
            </p>
            <div className="flex space-x-4">
                <img src="https://payme.com/assets/pci-dss-compliant.svg" alt="PCI DSS Certified" className="h-12" />
                <img src="https://payme.com/assets/iso-certified.svg" alt="ISO Certified" className="h-12" />
                <img src="https://payme.com/assets/aicpa-soc-compliant.png" alt="AICPA SOC" className="h-12" />
            </div>
          </div>

          {/* Right Section */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-gray-400 text-xs tracking-widest uppercase mb-4">
                  {section.title}
                </h4>
                {section.isSocial ? (
                  <div className="flex space-x-4">
                    {section.links.map((link, index) => (
                      <Link key={index} href={link.href!} className="text-gray-400 hover:text-white">
                        <link.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                ) : section.isAddress ? (
                  <div className="text-sm text-gray-400 space-y-1 break-all">
                    {section.address?.map((line, i) => <p key={i}>{line}</p>)}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.text} className="flex items-center">
                        <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                          {link.text}
                        </Link>
                        {link.isNew && (
                          <span className="ml-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                            NEW
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>© payme {new Date().getFullYear()} | All Rights Reserved</p>
          <p className="mt-2">payme Software Limited is an RBI Authorised Online Payment Aggregator.</p>
          <p className="mt-4">Made by Snehil Srivastav | snehilsri925@gmail.com | 8920323014</p>
        </div>
      </div>
    </footer>
  );
}
