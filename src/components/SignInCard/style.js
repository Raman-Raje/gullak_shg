import styled from 'styled-components';
import theme from 'styled-theming';
import { colors, textSizes, breakpoints } from '@styles/vars';

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%);
  padding: 20px;
  color: ${colors.white};
`;

export const Card = styled.div`
  background: ${colors.white};
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px; /* Added margin-top to reduce the gap */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  ${breakpoints.mobileL} {
    padding: 30px;
  }
`;

export const Title = styled.h1`
  font-size: ${textSizes['32']};
  color: ${theme('theme', {
    light: colors.white,
    dark: '#fff'
  })};
  text-align: center;
  padding-bottom: 10px;

  ${breakpoints.tablet} {
    font-size: ${textSizes['48']};
  }
`;

export const Subtitle = styled.p`
  font-size: ${textSizes['16']};
  color: ${colors.text.secondary};
  margin-bottom: 20px;

  ${breakpoints.mobileL} {
    font-size: ${textSizes['18']};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  font-size: ${textSizes['16']};
  border: 1px solid ${colors.gray_300};
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${colors.primary};
    outline: none;
  }
`;

