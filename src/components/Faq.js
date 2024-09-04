import React, { useState, useEffect } from 'react';
import '../styles/Faq.css';
import image1 from '../assets/faq/image1.jpg';
import image2 from '../assets/faq/image2.jpg';
import image3 from '../assets/faq/image3.jpg';
import image4 from '../assets/faq/image4.jpg';

const Faq = () => {
  const [activeColumn, setActiveColumn] = useState(0);

  const handleColumnClick = (index) => {
    setActiveColumn(index);
  };

  const handleColumnHover = (index) => {
    setActiveColumn(index);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        sectionCols.forEach((col, index) => {
          col.addEventListener('mouseenter', () => handleColumnHover(index));
          col.addEventListener('mouseleave', () => handleColumnHover(-1));
          col.removeEventListener('click', () => handleColumnClick(index));
        });
      } else {
        sectionCols.forEach((col, index) => {
          col.addEventListener('click', () => handleColumnClick(index));
          col.removeEventListener('mouseenter', () => handleColumnHover(index));
          col.removeEventListener('mouseleave', () => handleColumnHover(-1));
        });
      }
    };

    const sectionCols = document.querySelectorAll('.section_col');
    sectionCols[0].classList.add('active');
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="app">
      <div className="section">
        <div className="section_header">
          <div className="section_header_list">
            <div className="faqHeader">Frequently Asked Questions</div>
          </div>
        </div>

        <div className="section_container">
          {[
            { id: 0, src: image1, title: 'What is HeAR AI?', number: '01.' },
            { id: 1, src: image2, title: 'How accurate is HeAR AI?', number: '02.' },
            { id: 2, src: image3, title: 'Can HeAR AI replace Existing methods?', number: '03.' },
            { id: 3, src: image4, title: 'How does HeAR AI protect user privacy?', number: '04.' },
          ].map((column, index) => (
            <div
              key={column.id}
              className={`section_col ${activeColumn === index ? 'active' : ''}`}
              onMouseEnter={() => handleColumnHover(index)}
              onMouseLeave={() => handleColumnHover(-1)}
              onClick={() => handleColumnClick(index)}
            >
              <div className="section_col_caption --desktop">
                <span className="span">{column.title}</span>
                {activeColumn === index && (
                  <p className="caption_description">
                    HeAR AI is a groundbreaking artificial intelligence technology developed by Google that can analyze health-related sounds, such as coughs and breathing patterns, to detect early signs of disease.
                  </p>
                )}
              </div>
              <div className="section_col_title">
                <h2 className="h2 --right">{column.number}</h2>
                <p className="--mobile p">Discover More &rarr;</p>
              </div>
              <div className="section_col_number">
                <h1 className="h1">{column.id + 1}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Faq;