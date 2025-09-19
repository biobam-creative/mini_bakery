import React from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardGrid,
  CardTitle,
  CardImage,
} from "../components/Card";
import Button from "../components/Button";
import founderImage from "../assets/founder.jpeg";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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

const About = () => {
  const values = [
    {
      value: "Authenticity",
      explanation:
        "Maintaining traditional Nigerian recipes and baking methods",
    },
    {
      value: "Quality",
      explanation:
        "Using only natural, locally sourced ingredients without preservatives",
    },
    {
      value: "Community",
      explanation:
        "Serving the Nigerian diaspora and building cultural connections",
    },
    {
      value: "Innovation",
      explanation: "Combining traditional methods with modern convenience",
    },
    {
      value: "Cultural Bridge",
      explanation:
        "Introducing British customers to Nigerian culinary heritage",
    },
  ];

  const milestones = [
    {
      year: "2023",
      event: "Market research conducted among 270,000+ Nigerians in the UK",
    },
    {
      year: "2023",
      event:
        "Business plan developed identifying significant demand for authentic Nigerian bread",
    },
    {
      year: "2023",
      event:
        "Production facility planned for Leicester with automated bread-making equipment",
    },
    {
      year: "2023",
      event:
        "Online ordering system and delivery network designed for UK-wide service",
    },
    {
      year: "2023",
      event: "Partnerships established with local ingredient suppliers",
    },
  ];

  const team = [
    {
      image: founderImage,
      name: "Goodness Ajala",
      position: "Head Baker & Owner ",
      bio: "Drawing from extensive experience operating a successful bakery in Nigeria, our founder brings authentic knowledge of traditional Nigerian bread-making techniques to the UK market. With a passion for preserving cultural food traditions and serving the Nigerian community.",
    },
  ];

  return (
    <Container>
      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <Card>
          <CardContent>
            <p>
              Nigerian Bread Mini Bakery was founded with a simple mission: to
              bring the authentic taste of Nigerian bread to Nigerians living in
              the UK while introducing British customers to the rich flavors of
              Nigerian baking traditions. Recognizing the gap in the market for
              fresh, authentic Nigerian bread, our founder leveraged years of
              bakery experience from Nigeria to establish this venture.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Our Mission</SectionTitle>
        <Card>
          <CardContent>
            <p>
              To preserve and share Nigerian bread-making traditions by
              producing authentic, fresh, and high-quality Nigerian bread for
              the UK market, connecting the Nigerian diaspora to their culinary
              heritage while introducing new customers to the unique flavors of
              Nigeria.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Our Vision</SectionTitle>
        <Card>
          <CardContent>
            <p>
              To become the leading provider of authentic Nigerian bread in the
              UK, creating a bridge between cultures through food and building a
              community that celebrates Nigerian culinary traditions.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <CardGrid>
          {team.map((member, index) => (
            <Card key={index} style={{ width: "300px" }}>
              <CardImage src={member.image} alt={member.name} />
              <CardContent>
                <CardTitle>{`${member.name} - ${member.position}`}</CardTitle>
                <p style={{ fontSize: "13px" }}>{member.bio}</p>
                {/* <p>
                  <strong>{product.price}</strong>
                </p> */}
                <Button primary style={{ marginTop: "1rem" }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <Card>
          <CardContent>
            <ul>
              {values.map((value, index) => (
                <li key={index}>
                  <strong>{value.value}:</strong> {value.explanation}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Company Milestones</SectionTitle>
        <Card>
          <CardContent>
            <ul>
              {milestones.map((milestone, index) => (
                <li key={index}>
                  <strong>{milestone.year}:</strong> {milestone.event}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Section>
    </Container>
  );
};

export default About;
