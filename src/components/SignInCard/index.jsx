// style
import { LandingWrapper, Card, Title } from './style';

// supabase
import supabase from "@client/client";
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const SignInCard = () => {

  return (
    <LandingWrapper>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Title>Manage your SHG effortlessly, Anytime, Anywhere.</Title>
      </div>
      <Card>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
        />
      </Card>
    </LandingWrapper>
  );
};

export default SignInCard;
