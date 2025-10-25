import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Card, CardContent, CardTitle, CardGrid } from '../components/Card';

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
  color: ${props => props.theme.primary};
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.primary}15, ${props => props.theme.accent}15);
  padding: 4rem 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.accent};
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const BlogCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 3px solid ${props => props.theme.primary};
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.secondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.secondary}20;
`;

const BlogExcerpt = styled.p`
  color: ${props => props.theme.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled(Link)`
  color: ${props => props.theme.primary};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  &::after {
    content: '→';
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: translateX(3px);
  }
`;

const CTAButton = styled(Button)`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
`;

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Nigerian Bread Tastes Different: The Science and Culture Behind the Softness",
      excerpt: "Discover the fascinating science and cultural traditions that make Nigerian bread uniquely soft, sweet, and different from British bread. Learn about ingredients, techniques, and the emotional connection to home.",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      readTime: "8 min read",
      date: "March 15, 2024",
      category: "Food Science"
    },
    {
      id: 2,
      title: "5 Things Every Nigerian in the UK Misses About Home (And How to Find Them)",
      excerpt: "From fresh bread rituals to community warmth, explore the top things Nigerians miss most when living in the UK and practical ways to bring pieces of home into your British life.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      readTime: "10 min read",
      date: "March 10, 2024",
      category: "Culture"
    }
  ];

  return (
    <Container>
      <HeroSection className="pattern-bg">
        <HeroTitle>Nigerian Bread Blog</HeroTitle>
        <HeroSubtitle>
          Discover the science, culture, and stories behind authentic Nigerian bread. 
          From baking techniques to cultural traditions, explore what makes our bread special.
        </HeroSubtitle>
        <Button primary>Subscribe to Blog Updates</Button>
      </HeroSection>

      <Section>
        <SectionTitle>Latest Articles</SectionTitle>
        <CardGrid>
          {blogPosts.map(post => (
            <BlogCard key={post.id}>
              <BlogImage src={post.image} alt={post.title} />
              <CardContent>
                <div style={{marginBottom: '0.5rem'}}>
                  <span style={{
                    background: props => props.theme.primary,
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {post.category}
                  </span>
                </div>
                <CardTitle>{post.title}</CardTitle>
                <BlogMeta>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </BlogMeta>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMoreLink to={`/blog/${post.id}`}>
                  Read Full Article
                </ReadMoreLink>
                <CTAButton primary>
                  Order Fresh Nigerian Bread
                </CTAButton>
              </CardContent>
            </BlogCard>
          ))}
        </CardGrid>
      </Section>

      <Section style={{backgroundColor: '#f8f4e9'}}>
        <div style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
          <h2 style={{color: props => props.theme.primary, marginBottom: '1rem'}}>
            Never Miss Fresh Bread Again
          </h2>
          <p style={{marginBottom: '2rem', fontSize: '1.1rem'}}>
            Subscribe to our weekly bread delivery and enjoy authentic Nigerian bread 
            delivered fresh to your door every Saturday morning.
          </p>
          <Button primary size="large">
            Start Your Subscription
          </Button>
        </div>
      </Section>
    </Container>
  );
};

export default Blog;