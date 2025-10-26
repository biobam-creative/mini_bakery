import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const LandingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.secondary} 100%);
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

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
  
  span {
    color: ${props => props.theme.accent};
  }
`;

const Subtitle = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: ${props => props.theme.primary};
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${props => props.theme.text};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid ${props => props.theme.secondary}20;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const BenefitsList = styled.ul`
  text-align: left;
  margin: 1.5rem 0;
  padding-left: 1rem;
  
  li {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.text};
  }
`;

const PrivacyNote = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
  margin-top: 1rem;
  opacity: 0.8;
`;

const Landing = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      
      // Call the callback to move to thank you page
      onEmailSubmit();
      navigate('/thank-you')
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('There was an error submitting your email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LandingContainer>
      <Container>
        <Card>
          <Logo>Nigerian <span>Bread</span></Logo>
          {/* <Subtitle>Authentic African Flavors, Ethically Sourced</Subtitle> */}
          
          <Title>Welcome to Our  Community!</Title>
          {/* <Description>
            Join thousands of food lovers discovering authentic African spices. 
            Get exclusive access to recipes, cooking tips, and special offers.
          </Description> */}

          {/* <BenefitsList>
            <li>🎁 <strong>10% off</strong> your first order</li>
            <li>📚 Exclusive African recipes weekly</li>
            <li>🌱 First access to new spice blends</li>
            <li>👨‍🍳 Cooking tips from African chefs</li>
            <li>💌 Special subscriber-only discounts</li>
          </BenefitsList> */}

          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              primary 
              disabled={isSubmitting}
              style={{padding: '1rem'}}
              
            >
              {isSubmitting ? 'Joining...' : 'Join the Community'}
            </Button>
          </Form>

          <PrivacyNote>
            We respect your privacy. Unsubscribe at any time. By joining, you agree to our terms and privacy policy.
          </PrivacyNote>
        </Card>
      </Container>
    </LandingContainer>
  );
};

export default Landing;