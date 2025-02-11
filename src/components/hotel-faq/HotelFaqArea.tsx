import React, { useState } from 'react';
import { ChevronDown, Clock, CreditCard, Utensils, Car, Wifi, Users } from 'lucide-react';
import styles from './HotelFAQ.module.css';

interface FAQ {
  question: string;
  answer: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ElementType; // Changed to ElementType
}

interface FAQData {
  [key: string]: FAQ[];
}

const HotelFaqArea: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: Category[] = [
    { id: 'general', name: 'General', icon: Users },
    { id: 'checkin', name: 'Check-in/out', icon: Clock },
    { id: 'payment', name: 'Payment', icon: CreditCard },
    { id: 'dining', name: 'Dining', icon: Utensils },
    { id: 'amenities', name: 'Amenities', icon: Wifi },
    { id: 'transport', name: 'Transportation', icon: Car },
  ];

  const faqData: FAQData = {
    general: [
      {
        question: "What makes your hotel unique?",
        answer: "Our hotel combines modern luxury with traditional hospitality. We offer stunning views, personalized service, and a prime location near major attractions. Our commitment to sustainability and local culture creates a unique experience for our guests."
      },
      {
        question: "Do you offer special rates for extended stays?",
        answer: "Yes, we offer attractive discounts for stays longer than 7 nights. Corporate rates and monthly stay packages are also available. Please contact our reservations team for detailed information."
      },
      {
        question: "Is the hotel family-friendly?",
        answer: "Absolutely! We offer family rooms, children's activities, and special amenities for young guests. Our restaurants have kids' menus, and we can arrange babysitting services upon request."
      }
    ],
    checkin: [
      {
        question: "What are the check-in and check-out times?",
        answer: "Standard check-in time is 2:00 PM and check-out is 12:00 PM. Early check-in and late check-out can be arranged based on availability for an additional fee."
      },
      {
        question: "What documents do I need for check-in?",
        answer: "Please present a valid government-issued photo ID and the credit card used for booking. International guests should bring their passport."
      }
    ],
    payment: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and digital payments including Apple Pay and Google Pay. Cash payments are also accepted."
      },
      {
        question: "Is there a security deposit required?",
        answer: "Yes, we require a refundable security deposit of ₹2000 at check-in, which will be returned upon check-out after room inspection."
      }
    ],
    dining: [
      {
        question: "What dining options are available?",
        answer: "We have multiple dining venues including our main restaurant serving international cuisine, a rooftop bar, and a café. Room service is available 24/7."
      },
      {
        question: "Do you accommodate dietary restrictions?",
        answer: "Yes, our chefs can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and allergies. Please inform us in advance."
      }
    ],
    amenities: [
      {
        question: "Is WiFi available?",
        answer: "Yes, complimentary high-speed WiFi is available throughout the hotel for all guests."
      },
      {
        question: "What recreational facilities do you offer?",
        answer: "We have a fitness center, swimming pool, spa, and business center. All facilities are open daily from 6:00 AM to 10:00 PM."
      }
    ],
    transport: [
      {
        question: "Do you provide airport transfers?",
        answer: "Yes, we offer airport pickup and drop-off services. Please book at least 24 hours in advance through our concierge."
      },
      {
        question: "Is parking available?",
        answer: "Yes, we offer both self-parking and valet parking services. Electric vehicle charging stations are also available."
      }
    ]
  };

  const toggleItem = (questionId: number): void => {
    setExpandedItems(prev => 
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  const filterFAQs = (): FAQ[] => {
    if (!searchQuery) return faqData[activeCategory];
    
    const filtered: FAQ[] = [];
    Object.values(faqData).forEach(category => {
      category.forEach(item => {
        if (
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          filtered.push(item);
        }
      });
    });
    return filtered;
  };

  const handleCategoryClick = (categoryId: string): void => {
    setActiveCategory(categoryId);
    setSearchQuery('');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqHeader}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <p className={styles.faqDescription}>
          Find quick answers to common questions about our hotel, services, and facilities.
        </p>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search frequently asked questions..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search FAQs"
        />
      </div>

      <div className={styles.categoriesGrid}>
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              className={`${styles.categoryCard} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => handleCategoryClick(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              <IconComponent className={styles.categoryIcon} aria-hidden="true" />
              <span className={styles.categoryTitle}>{category.name}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.faqList} role="region" aria-label="FAQ Answers">
        {filterFAQs().length > 0 ? (
          filterFAQs().map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${expandedItems.includes(index) ? styles.expanded : ''}`}
            >
              <button
                className={styles.questionButton}
                onClick={() => toggleItem(index)}
                aria-expanded={expandedItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <ChevronDown className={styles.toggleIcon} aria-hidden="true" />
              </button>
              <div 
                className={styles.answerPanel}
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className={styles.answerContent}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            No matching questions found. Try a different search term.
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelFaqArea;