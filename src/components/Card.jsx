import React from "react";
import styled from "styled-components";
import Button from "./Button";

// Styled components
export const Card = styled.div`
  background-color: ${(props) => props.theme.light};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.primary};
`;

export const CardDescription = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
`;

export const CardPrice = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primary};
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const ImageSourceLink = styled.a`
  display: block;
  font-size: 0.8rem;
  color: ${(props) => props.theme.text};
  opacity: 0.7;
  margin-top: 0.5rem;
  text-decoration: none;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

// Card component with image source link
const CardWithImageSource = ({
  image,
  imageSource,
  title,
  description,
  price,
  showButton = true,
  buttonText = "Add to Cart",
  onButtonClick,
}) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />

      <CardContent>
        {imageSource && (
          <ImageSourceLink
            href={imageSource}
            target="_blank"
            rel="noopener noreferrer"
          >
            Image source: {new URL(imageSource).hostname}
          </ImageSourceLink>
        )}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardPrice>{price}</CardPrice>
        {showButton && (
          <Button primary onClick={onButtonClick}>
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CardWithImageSource;
