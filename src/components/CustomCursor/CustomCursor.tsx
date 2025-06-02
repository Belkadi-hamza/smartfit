import React, { useState, useEffect } from 'react';
import './CustomCursor.css'; // Nous créerons ce fichier ensuite

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHover, setLinkHover] = useState(false);
  const [textHover, setTextHover] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setClicked(true);
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHover = () => {
      setLinkHover(true);
    };

    const handleLinkLeave = () => {
      setLinkHover(false);
    };

    const handleTextHover = () => {
      setTextHover(true);
    };

    const handleTextLeave = () => {
      setTextHover(false);
    };

    // Ajoutez des écouteurs d'événements
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Détection des liens et textes
    const links = document.querySelectorAll('a, button, [data-cursor="link"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    const texts = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, [data-cursor="text"]');
    texts.forEach(text => {
      text.addEventListener('mouseenter', handleTextHover);
      text.addEventListener('mouseleave', handleTextLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });

      texts.forEach(text => {
        text.removeEventListener('mouseenter', handleTextHover);
        text.removeEventListener('mouseleave', handleTextLeave);
      });
    };
  }, []);

  // Styles combinés pour le curseur
  const cursorStyles = `
    ${linkHover ? 'cursor-link' : ''}
    ${textHover ? 'cursor-text' : ''}
    ${clicked ? 'cursor-click' : ''}
  `;

  return (
    <div 
      className={`cursor ${cursorStyles}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CustomCursor;