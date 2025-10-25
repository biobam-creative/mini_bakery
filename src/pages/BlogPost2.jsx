import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

// Reuse the same styled components from BlogPost1.js
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 2rem 0;
`;

const Breadcrumb = styled.nav`
  margin-bottom: 2rem;
  font-size: 0.9rem;
  
  a {
    color: ${props => props.theme.primary};
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ArticleHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: ${props => props.theme.accent};
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin: 2rem 0;
`;

const ArticleContent = styled.article`
  line-height: 1.8;
  font-size: 1.1rem;
  
  h2 {
    color: ${props => props.theme.primary};
    margin: 2.5rem 0 1rem 0;
    font-size: 1.8rem;
  }
  
  h3 {
    color: ${props => props.theme.secondary};
    margin: 2rem 0 1rem 0;
    font-size: 1.4rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  blockquote {
    border-left: 4px solid ${props => props.theme.primary};
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${props => props.theme.secondary};
  }
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.primary}15, ${props => props.theme.accent}15);
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  margin: 3rem 0;
  border: 2px solid ${props => props.theme.primary}20;
`;

const BlogPost2 = () => {
  return (
    <Container>
      <Section>
        <Breadcrumb>
          <Link to="/">Home</Link> &gt; <Link to="/blog">Blog</Link> &gt; Current Article
        </Breadcrumb>
        
        <ArticleHeader>
          <ArticleTitle>
            5 Things Every Nigerian in the UK Misses About Home (And How to Find Them)
          </ArticleTitle>
          <ArticleMeta>
            <span>March 10, 2024</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span>Culture</span>
          </ArticleMeta>
        </ArticleHeader>

        <ArticleImage 
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
          alt="Nigerian community gathering"
        />

        <ArticleContent>
          <p>
            It's Saturday morning in Birmingham. Chioma wakes up, makes tea, and suddenly feels 
            a wave of homesickness. Not because anything's wrong—she loves her life in the UK. 
            But it's Saturday, and back home in Nigeria, Saturday morning meant fresh bread from 
            the bakery, family gathered around the table, laughter over breakfast before the day's 
            activities began.
          </p>

          <p>
            Here in Birmingham, Saturday morning feels different. Quieter. Less warm. Less... Nigerian.
          </p>

          <p>
            If you're Nigerian living in the UK, you know this feeling. It comes unexpectedly—a smell, 
            a sound, a Saturday morning—and suddenly you're overwhelmed with missing home. Not dramatically, 
            not making you want to leave the UK, but enough to make you sigh and think, "If only I could have..."
          </p>

          <h2>1. Fresh Bread for Breakfast (The One Thing Everyone Mentions)</h2>

          <h3>What We Miss:</h3>
          <p>
            In Nigeria, breakfast bread isn't just food—it's ritual. Someone (often the youngest able child) 
            is sent to the bakery early morning for fresh bread. You bring it home still warm, wrapped in 
            paper that's slightly oily from the butter. The smell fills the kitchen. The bread is so soft 
            it practically dissolves in your mouth.
          </p>

          <h3>How to Find It in the UK:</h3>
          <p>
            The good news? You don't have to give up this morning ritual anymore. Nigerian bakeries are 
            appearing across the UK, bringing authentic bread to the diaspora. Online ordering means you 
            can get fresh, traditional Nigerian bread delivered to your door—in London, Birmingham, 
            Manchester, Liverpool, and beyond.
          </p>

          {/* Continue with the rest of the article content */}

          <h2>Ready to Bring Home to Your UK Kitchen?</h2>
          <p>
            Food bridges distance in ways nothing else can. A thousand video calls don't provide the 
            same comfort as one bite of food that tastes exactly like home.
          </p>
        </ArticleContent>

        <CTASection>
          <h2 style={{color: props => props.theme.primary, marginBottom: '1rem'}}>
            Never Miss Saturday Morning Bread Again
          </h2>
          <p style={{marginBottom: '2rem', fontSize: '1.1rem'}}>
            Subscribe to our weekly delivery service and enjoy fresh Nigerian bread every Saturday morning, 
            just like back home. Recreate those precious family breakfast moments in your UK home.
          </p>
          <Button primary size="large" style={{marginRight: '1rem'}}>
            Start Weekly Delivery
          </Button>
          <Button>
            Learn About Subscriptions
          </Button>
        </CTASection>
      </Section>
    </Container>
  );
};

export default BlogPost2;