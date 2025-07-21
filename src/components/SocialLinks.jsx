import React from 'react';
import './SocialLinks.css';

const links = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/bhuvanesh-kumar-n-s',
    icon: 'fab fa-linkedin-in',
    color: '#0077b5',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bhuvanesh-kumar',
    icon: 'fab fa-github',
    color: '#333',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/bhuvaneshkumar_ns/',
    icon: 'fa fa-code',
    color: '#FFA116',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/bhuvaneshkumar_ns',
    icon: 'fab fa-hackerrank',
    color: '#2EC866',
  },
];

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          className="social-link"
          style={{ backgroundColor: link.color }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={link.icon} />
          <span>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 