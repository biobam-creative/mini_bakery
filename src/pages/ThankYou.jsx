import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const ThankYouContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${props => props.theme.accent}15, ${props => props.theme.primary}15);
  padding: 2rem;
`;

const Container = styled.div`
  max-width: 500px;
  width: 100%;
`;

const Card = styled.div`
  background: ${props => props.theme.light};
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2.5rem;
  color: white;
`;

const Title = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: ${props => props.theme.text};
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const NextSteps = styled.div`
  background: ${props => props.theme.light};
  border: 2px solid ${props => props.theme.primary}20;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: left;
`;

const NextStepTitle = styled.h3`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const Countdown = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.secondary};
  margin-top: 1rem;
  font-style: italic;
`;

const ThankYou = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           navigate('/');
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [navigate]);

  const handleContinueNow = () => {
    navigate('/');
  };

  return (
    <ThankYouContainer>
      <Container>
        <Card>
          <SuccessIcon>✓</SuccessIcon>
          
          <Title>Welcome to the Family! 🎉</Title>
          
          <Message>
            Thank you for joining our Community! We're excited to have you on board.
            Check your email for your <strong>10% discount code</strong> and welcome package.
          </Message>

          <NextSteps>
            <NextStepTitle>What happens next?</NextStepTitle>
            <ul style={{lineHeight: '1.8', color: props => props.theme.text}}>
              <li> <strong>Immediately:</strong> Check your inbox for welcome email</li>
              <li> <strong>Today:</strong> Use your 10% discount on first order</li>
              
            </ul>
          </NextSteps>

          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Button primary onClick={handleContinueNow}>
              Continue to Website Now
            </Button>
            <Button onClick={() => navigate('/products')}>
              Shop Our Spices
            </Button>
          </div>

          {/* <Countdown>
            Automatically continuing to homepage in {countdown} seconds...
          </Countdown> */}
        </Card>
      </Container>
    </ThankYouContainer>
  );
};

export default ThankYou;