import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import CardWithImageSource, { CardGrid } from "../components/Card";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-position: center;
  color: ${(props) => props.theme.light};
  padding: 6rem 0;
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.primary};
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Testimonial = styled.blockquote`
  background-color: ${(props) => props.theme.light};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadow};
  position: relative;
  
  &::before {
    content: """;
    font-size: 5rem;
    color: ${(props) => props.theme.primary};
    opacity: 0.2;
    position: absolute;
    top: -1rem;
    left: 1rem;
  }
`;

const Home = () => {
  const testimonials = [
    {
      id: 1,
      text: "Finally! Authentic Nigerian bread in the UK. It tastes exactly like the bread from my childhood in Lagos. The texture and flavor are perfect.",
      author: "Adebayo K., Nigerian Student in London",
    },
    {
      id: 2,
      text: "As someone married to a Nigerian, I've learned to love Nigerian bread. This bakery delivers the real deal - soft, sweet, and incredibly fresh.",
      author: "Sarah M., British Customer, Manchester",
    },
    {
      id: 3,
      text: "The online ordering system is so convenient. I can get fresh Nigerian bread delivered weekly without having to search African stores across London.",
      author: "Funmi O., Healthcare Worker, Birmingham",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Authentic Nigerian Recipes",
      description: "Traditional methods and flavors from Nigeria",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageSource: "https://unsplash.com/photos/b28f40a0ae38",
    },
    {
      id: 2,
      title: "Fresh Daily Baking",
      description: "Baked fresh every morning using natural ingredients",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageSource: "https://unsplash.com/photos/7f47ccb76574",
    },
    {
      id: 3,
      title: "UK-Wide Delivery",
      description: "Order online and get fresh bread delivered to your door",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageSource: "https://unsplash.com/photos/9991f1c4c750",
    },
    {
      id: 4,
      title: "No Preservatives",
      description: "Made with natural ingredients, no artificial additives",
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      imageSource: "https://unsplash.com/photos/c8fd9a32b7a2",
    },
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>
            Authentic Nigerian Bread - Fresh, Traditional, Delivered
          </HeroTitle>
          <HeroSubtitle>
            Taste the authentic flavors of home with our traditional Nigerian
            bread, baked fresh daily in the UK and delivered to your doorstep
          </HeroSubtitle>
          <Button primary>Order Fresh Bread Today</Button>
          <Button style={{ marginLeft: "10px" }}>
            Explore Our Bread Selection
          </Button>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>Why Choose Nigerian Bread Mini Bakery?</SectionTitle>
          <CardGrid>
            {features.map((feature) => (
              <CardWithImageSource
                key={feature.id}
                image={feature.image}
                imageSource={feature.imageSource}
                title={feature.title}
                description={feature.description}
                showButton={false}
              />
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section style={{ backgroundColor: "#f0f0f0" }}>
        <Container>
          <SectionTitle>What Our Customers Say</SectionTitle>
          <TestimonialGrid>
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id}>
                <p>{testimonial.text}</p>
                <cite>- {testimonial.author}</cite>
              </Testimonial>
            ))}
          </TestimonialGrid>
        </Container>
      </Section>
    </>
  );
};

export default Home;
