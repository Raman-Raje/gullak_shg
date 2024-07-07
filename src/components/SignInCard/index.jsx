// style
import { LandingWrapper, Card, Title, LogoWrapper, BrandName } from './style';
import logo from '@assets/logo.png';

// supabase
import supabase from "@client/client";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const SignInCard = () => {
  return (
    <LandingWrapper>
      <LogoWrapper>
        <img src={logo} alt="App Logo" />
      </LogoWrapper>
      <BrandName>Gullak</BrandName> {/* Brand Name */}
      <Title>Manage your SHG effortlessly, Anytime, Anywhere.</Title>
      <Card>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
          redirectTo='https://Raman-Raje.github.io/gullak_shg/'
        />
      </Card>
    </LandingWrapper>
  );
};

export default SignInCard;
