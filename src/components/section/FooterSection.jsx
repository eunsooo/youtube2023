import React from 'react';
import {footerText} from '../../constants/constants';

const FooterSection = () => {
  return (
    <footer id="footer" role='contentinfo'>
      <div className="footer_wrap">
        <p className="footer_copy">
          (c) 2023 Eunsoo Lee
        </p>
        <div className="footer_icon">
          <ul>
            {footerText.map((footer, key) => (
              <li key={key}>
                <a 
                  href={footer.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={footer.title}
                >
                  {footer.icon}
                  <span className="ir">{footer.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection