// styling
import styled from 'styled-components/macro';
import {flex} from '@styles/vars';

// components
import Page from '@layout/Page';
import {Container} from '@components/Widget/style';
import Lottie from 'lottie-react';
import {motion} from 'framer-motion';

// assets
import notFound from '@assets/404.json';

const FlexContainer = styled(Container)`
  justify-content: center;
  padding: 24px;
`;

const Animation = styled.div`
  max-height: 400px;
  display: flex;
  margin: 0 auto;
`;

const Content = styled.div`
  ${flex.col};
  gap: 24px;
  align-items: center;
  text-align: center;

  button {
    max-width: 240px;
  }
`;

const UnAuthorized = () => {

    return (
        <Page title="Page not found">
            <FlexContainer as={motion.div} i
                           nitial={{opacity: 0}}
                           whileInView={{opacity: 1}}
                           transition={{duration: .4}}
                           viewport={{once: true}}>
                <Animation>
                    <Lottie className="lottie" animationData={notFound}/>
                </Animation>
                <Content>
                    <h2>You are not authorized to view this page</h2>
                </Content>
            </FlexContainer>
        </Page>
    );
}

export default UnAuthorized;