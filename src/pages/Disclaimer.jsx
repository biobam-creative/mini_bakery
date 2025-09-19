import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Card, CardContent } from "../components/Card";

const DisclaimerContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary} 0%,
    ${(props) => props.theme.accent} 100%
  );
  padding: 2rem;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  padding: 2rem 0;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.light};
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Disclaimer = ({ onAccept }) => {
  return (
    <DisclaimerContainer>
      <Container>
        <Section>
          <SectionTitle>Nigerian Bread Mini Bakery</SectionTitle>
          <Card>
            <CardContent>
              <h2>Educational Disclaimer</h2>
              <h3>Important Notice</h3>
              <p>
                The information provided on this website is intended for
                educational purposes only. While every effort has been made to
                ensure the accuracy and reliability of the content, the
                university does not guarantee its completeness or effectiveness.
                This website will be deactivated once the course is completed.
              </p>

              <p>
                Some images used on this site have been sourced from the
                internet and are included for educational and practice purposes
                only. If you are the copyright owner of any image and believe it
                has been used without proper attribution, please contact us, and
                we will make the necessary corrections.
              </p>

              <p>
                The views expressed on this site do not necessarily reflect the
                official policies or positions of the university. The university
                is not responsible for any errors or omissions or the results
                obtained from using this information.
              </p>

              <p>
                By using this website, you acknowledge and agree to these terms.
              </p>

              <ButtonContainer>
                <Button primary onClick={onAccept}>
                  Continue to Website
                </Button>
              </ButtonContainer>
            </CardContent>
          </Card>
        </Section>
      </Container>
    </DisclaimerContainer>
  );
};

export default Disclaimer;
