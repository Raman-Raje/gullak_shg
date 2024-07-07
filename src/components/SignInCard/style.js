import styled from 'styled-components';
import theme from 'styled-theming';
import { colors, textSizes, breakpoints } from '@styles/vars';

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #CCBBA6 0%, #A68B6D 100%);
  padding: 20px;
  color: ${colors.white};
  text-align: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Card = styled.div`
  background: ${colors.white};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  ${breakpoints.mobileL} {
    padding: 30px;
  }
`;

export const BrandName = styled.h1`
  font-size: ${textSizes['32']};
  margin-top: 10px;
  color: ${theme('theme', {
    light: colors.white,
    dark: '#fff',
  })};

  ${breakpoints.tablet} {
    font-size: ${textSizes['48']};
  }
`;

export const Title = styled.h2`
  font-size: ${textSizes['24']};
  margin: 0;
  padding: 0 0 20px 0;
  color: ${theme('theme', {
    light: colors.white,
    dark: '#fff',
  })};

  ${breakpoints.tablet} {
    font-size: ${textSizes['32']};
  }
`;


