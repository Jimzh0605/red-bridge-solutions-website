import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const AccordionItem: React.FC<{ item: FaqItem; isOpen: boolean; toggle: () => void }> = ({ item, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 text-left focus:outline-none group flex justify-between items-center"
        onClick={toggle}
      >
        <span className={`text-lg font-medium font-serif transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
          {item.question}
        </span>
        <span className="ml-6 flex-shrink-0 text-gray-400 group-hover:text-primary">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base text-gray-500 leading-relaxed pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FaqItem[] = [
    {
      question: "Why not go direct to suppliers?",
      answer: "While going direct may seem cheaper initially, the hidden costs of miscommunication, re-tooling, and quality failures often exceed our consulting fees. We provide Value Analysis/Value Engineering (VA/VE) and optimization that typically saves clients significantly more than the cost of our engagement.",
    },
    {
      question: "How do you ensure transparency?",
      answer: "We believe in radical transparency. You are included in open email chains with suppliers, provided with clear, line-item cost breakdowns, and we operate with zero hidden margins. You see exactly what the manufacturer charges.",
    },
    {
      question: "What about quality control?",
      answer: "Quality is engineered, not inspected. We utilize our engineering background to set realistic, precise technical specifications and tolerances (GD&T) upfront. We then enforce strict QA protocols and inspections before any product leaves the factory floor.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            Common concerns regarding international technical procurement and how we address them.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-1">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};