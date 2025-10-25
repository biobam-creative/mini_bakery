import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

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
  color: ${props => props.theme.secondary};
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

const BlogPost1 = () => {
  return (
    <Container>
      <Section>
        <Breadcrumb>
          <Link to="/">Home</Link> &gt; <Link to="/blog">Blog</Link> &gt; Current Article
        </Breadcrumb>
        
        <ArticleHeader>
          <ArticleTitle>
            Why Nigerian Bread Tastes Different: The Science and Culture Behind the Softness
          </ArticleTitle>
          <ArticleMeta>
            <span>March 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Food Science</span>
          </ArticleMeta>
        </ArticleHeader>

        <ArticleImage 
          src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" 
          alt="Fresh Nigerian bread on traditional fabric"
        />

        <ArticleContent>
          <p>
            If you've ever eaten Nigerian bread, you know immediately that it's different. 
            That distinctive softness. The slightly sweet taste. The way it practically melts 
            in your mouth. And if you're Nigerian living in the UK, you've probably spent 
            years searching for bread that tastes like home—only to be disappointed again 
            and again by British bread that's just... not the same.
          </p>

          <p>
            But what exactly makes Nigerian bread so different? Is it just nostalgia, or are 
            there real differences in ingredients and techniques? Today, we're diving deep into 
            the science, culture, and tradition behind Nigerian bread to understand why it 
            tastes the way it does—and why it means so much to those who grew up eating it.
          </p>

          <h2>The First Bite: What Makes Nigerian Bread Unique?</h2>

          <p>
            Let me paint a picture. You're a Nigerian student who just arrived in the UK for 
            university. You're homesick, so you head to Tesco to buy bread for breakfast. 
            You choose what looks like a normal white loaf, take it home, toast it, and take 
            a bite with your tea. Something's wrong. The texture is different—denser, chewier. 
            The taste is bland. It doesn't pull apart the same way. This isn't bread as you know it.
          </p>

          <p>
            This experience happens to thousands of Nigerians every year because Nigerian bread 
            and British bread are fundamentally different products, despite sharing the same name. 
            Understanding these differences helps us appreciate the craft behind authentic Nigerian baking.
          </p>

          <h2>The Ingredient Secret: What Goes Into Nigerian Bread</h2>

          <p>
            At first glance, Nigerian bread and British bread use similar base ingredients: 
            flour, water, yeast, salt, and sugar. But the proportions and additional ingredients 
            create entirely different results.
          </p>

          <h3>The Sugar Factor</h3>
          <p>
            Nigerian bread contains significantly more sugar than typical British bread. While 
            a standard British white loaf might use 2-3% sugar by flour weight, Nigerian bread 
            often uses 8-12%. This isn't just about sweetness—sugar affects texture, browning, 
            moisture retention, and shelf life. It creates that characteristic soft, tender crumb 
            that Nigerians associate with quality bread.
          </p>

          <h3>The Fat Content</h3>
          <p>
            Nigerian bread typically includes more butter or margarine than British bread. This 
            added fat creates a softer, more tender texture. It also contributes to that rich 
            mouthfeel and helps the bread stay fresh longer without preservatives.
          </p>

          {/* Continue with the rest of the article content */}

          <h2>Conclusion: The Art and Heart of Nigerian Bread</h2>

          <p>
            Nigerian bread is simultaneously simple and complex. Simple in its basic ingredients—flour, 
            water, yeast, sugar, salt, fat. Complex in its technique, cultural significance, and the 
            skill required to produce authentic results consistently.
          </p>

          <blockquote>
            "What makes Nigerian bread different isn't any single factor—it's the interplay of 
            ingredients, techniques, culture, and care."
          </blockquote>

          <p>
            Understanding why Nigerian bread tastes different helps us appreciate the craft behind 
            authentic baking. It's not just following a recipe—it's preserving culture, creating 
            connection, and bringing a taste of home to those who miss it.
          </p>
        </ArticleContent>

        <CTASection>
          <h2 style={{color: props => props.theme.primary, marginBottom: '1rem'}}>
            Taste the Difference Yourself
          </h2>
          <p style={{marginBottom: '2rem', fontSize: '1.1rem'}}>
            Ready to experience authentic Nigerian bread made with traditional recipes and genuine care? 
            Order your fresh bread today and discover why our customers say it tastes exactly like home.
          </p>
          <Button primary size="large" style={{marginRight: '1rem'}}>
            Order Fresh Bread Today
          </Button>
          <Button>
            Explore Our Bread Selection
          </Button>
        </CTASection>
      </Section>
    </Container>
  );
};

export default BlogPost1;