import { JSX } from 'react';
import './3d-card.css'
import 'aos/dist/aos.css';

export const Card3d = (): JSX.Element => {

  return (
    <div className="flip-card mx-auto">
      <div className="flip-card-inner">
        <div className="flip-card-front d-flex align-items-center justify-content-center">
          <h4>Hover Me</h4>
        </div>
        <div className="flip-card-back d-flex align-items-center justify-content-center">
          <p>👋 Hello from the back!</p>
        </div>
      </div>
    </div>

  );
};
