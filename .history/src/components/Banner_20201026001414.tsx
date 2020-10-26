import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import desktopImg from '../images/desktopBanner.png';
import mobileImg from '../images/bannerMobile.png';
import StyledInput from '../styledComponents/Input';

const Banner: React.FC = () => {
  const [mobile, setmobile] = useState(false);
  useEffect(() => {
    windowWidth();
  }, []);
  let windowWidth = () => {
    let win = window.innerWidth;
    if (win < 768) setmobile(true);
    else setmobile(false);
  };
  window.addEventListener('resize', windowWidth);

  return (
    <StyledBanner>
      <div className='caption'>
        <h2>Let's Learn together</h2>
        <p>sign up today and be a part of the fast growing community.</p>

        
      </div>

      <div>
        {mobile ? (
          <img src={mobileImg} alt='imagemobile' />
        ) : (
          <img src={desktopImg} alt='imagedesktop' />
        )}
      </div>
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  flex-wrap: wrap-reverse;
  padding-top: 2em;
  padding-bottom: 2em;

  h2 {
    font-size: 2em;
    margin-bottom: 0.2em;
  }
  p {
    max-width: 400px;
  }

  img {
    width: 100%;
    position: relative;
    left: 0;
    right: 0;
    /* margin-left: -15px; */
  }

  .caption {
    max-width: 400px;
  }


  @media (min-width: 768px) {
    h2 {
      font-size: 2.4em;
    }
    .caption {
      padding: 0;
    }

    img {
      width: 100%;
    }
  }
`;
