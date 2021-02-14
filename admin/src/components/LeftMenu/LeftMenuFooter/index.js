import React from 'react';

import Wrapper from './Wrapper';

const LeftMenuFooter = () => {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>Powered by</span>
        <a key="website" href="#" target="_blank" rel="noopener noreferrer">
          AJBG
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
