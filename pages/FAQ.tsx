import React, { useState, useCallback, memo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

// FAQ data moved outside component
const FAQ_ITEMS: FaqItem[] = [
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

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  toggle: () => void;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = memo(({ item, isOpen, toggle, index }) => {
  const contentId = `faq-content-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-gray-200">
      <button
        id={buttonId}
        className="w-full py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset group flex justify-between items-center"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className={`text-lg font-medium font-serif transition-colors duration-200 ${isOpen ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
          {item.question}
        </span>
        <span className="ml-6 flex-shrink-0 text-gray-400 group-hover:text-primary" aria-hidden="true">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <p className="text-base text-gray-600 leading-relaxed pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';

export const FAQ: React.FC = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gray-50 py-16" aria-labelledby="faq-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="faq-heading" className="text-4xl font-serif font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Common concerns regarding international technical procurement and how we address them.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-1" role="list">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              toggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
});

FAQ.displayName = 'FAQ';
