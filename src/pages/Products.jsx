import React from "react";
import styled from "styled-components";
import CardWithImageSource, { CardGrid } from "../components/Card";

import classicBread from "../assets/classic.jpeg";
import wholeWheatBread from "../assets/whole wheat.jpg";
import sweetBread from "../assets/sweet.jpeg";
import coconutBread from "../assets/coconut.jpg";
import glutenFreeBread from "../assets/glutenfree.jpg";

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

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Classic Nigerian White Bread",
      description:
        "Traditional soft white bread with the authentic Nigerian taste",
      price: "£3.00 - £4.50",
      image: classicBread,
      imageSource: "https://www.pinterest.com/pin/501095896053073635/",
    },
    {
      id: 2,
      name: "Nigerian Whole Wheat Bread",
      description: "Healthier option maintaining authentic Nigerian flavor",
      price: "£3.50 per loaf (800g)",
      image: wholeWheatBread,
      imageSource: "https://www.zojirushi.com/app/recipe/whole-wheat-bread",
    },
    {
      id: 3,
      name: "Sweet Nigerian Bread (Agege Bread Style)",
      description: "Extra sweet version popular in Lagos and surrounding areas",
      price: "£3.50 per loaf (800g)",
      image: sweetBread,
      imageSource:
        "https://www.travelstart.com.ng/blog/food-nigerians-miss-most-while-living-abroad/",
    },
    {
      id: 4,
      name: "Coconut Nigerian Bread",
      description: "Fusion flavor combining Nigerian tradition with coconut",
      price: "£4.00 per loaf (800g)",
      image: coconutBread,
      imageSource:
        "https://fabwoman.ng/coconut-bread-nigerian-recipe-video-tutorial-fabwoman/",
    },
    {
      id: 5,
      name: "Gluten-Free Nigerian-Style Bread",
      description:
        "For customers with dietary restrictions who miss Nigerian bread",
      price: "£5.00 per loaf (600g)",
      image: glutenFreeBread,
      imageSource:
        "https://mamashire.com/easy-gluten-free-bread-recipe-one-bowl/",
    },
  ];

  const handleAddToCart = (productId) => {
    alert(`Added product ${productId} to cart!`);
    // In a real application, you would add the product to a shopping cart
  };

  return (
    <Container>
      <Section>
        <SectionTitle>Our Bread Selection</SectionTitle>
        <CardGrid>
          {products.map((product) => (
            <CardWithImageSource
              key={product.id}
              image={product.image}
              imageSource={product.imageSource}
              title={product.name}
              description={product.description}
              price={product.price}
              onButtonClick={() => handleAddToCart(product.id)}
            />
          ))}
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Additional Services</SectionTitle>
        <CardGrid>
          <CardWithImageSource
            image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            imageSource="https://unsplash.com/photos/0a96f2a4b9da"
            title="Online Ordering & Delivery"
            description="UK-wide delivery service with fresh bread delivered within 2-3 days of baking"
            showButton={false}
          />
          <CardWithImageSource
            image="https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            imageSource="https://unsplash.com/photos/7aaa83350992"
            title="Loyalty Program"
            description="Points-based system for regular customers with rewards and discounts"
            showButton={false}
          />
          <CardWithImageSource
            image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            imageSource="https://unsplash.com/photos/ef04bbd61622"
            title="Corporate & Event Catering"
            description="Bulk orders for Nigerian community events, corporate lunches, and more"
            showButton={false}
          />
        </CardGrid>
      </Section>
    </Container>
  );
};

export default Products;
