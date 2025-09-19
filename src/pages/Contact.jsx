import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Card, CardContent } from "../components/Card";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "",
    breadSelection: [],
    deliveryLocation: "",
    preferredDay: "",
    specialRequirements: "",
    hearAboutUs: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      const breadSelection = [...formData.breadSelection];
      if (checked) {
        breadSelection.push(value);
      } else {
        const index = breadSelection.indexOf(value);
        if (index > -1) {
          breadSelection.splice(index, 1);
        }
      }
      setFormData({ ...formData, breadSelection });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your order! We will contact you soon.");
    // In a real application, you would send this data to a server
  };

  return (
    <Container>
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Card>
          <CardContent>
            <h3>Ready to Taste Authentic Nigerian Bread?</h3>
            <p>
              Contact us to place orders, ask questions, or learn more about our
              traditional baking methods.
            </p>

            <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="name"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="email"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="phone"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="orderType"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Order Type:
                </label>
                <select
                  id="orderType"
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="regular">Regular Order</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="subscription">Subscription</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                </select>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem" }}>
                  Bread Selection:
                </label>
                <div>
                  <input
                    type="checkbox"
                    id="classic"
                    name="breadSelection"
                    value="classic"
                    onChange={handleChange}
                  />
                  <label htmlFor="classic" style={{ marginLeft: "0.5rem" }}>
                    Classic White
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="wholeWheat"
                    name="breadSelection"
                    value="wholeWheat"
                    onChange={handleChange}
                  />
                  <label htmlFor="wholeWheat" style={{ marginLeft: "0.5rem" }}>
                    Whole Wheat
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="sweet"
                    name="breadSelection"
                    value="sweet"
                    onChange={handleChange}
                  />
                  <label htmlFor="sweet" style={{ marginLeft: "0.5rem" }}>
                    Sweet/Agege Style
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="coconut"
                    name="breadSelection"
                    value="coconut"
                    onChange={handleChange}
                  />
                  <label htmlFor="coconut" style={{ marginLeft: "0.5rem" }}>
                    Coconut
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="glutenFree"
                    name="breadSelection"
                    value="glutenFree"
                    onChange={handleChange}
                  />
                  <label htmlFor="glutenFree" style={{ marginLeft: "0.5rem" }}>
                    Gluten-Free
                  </label>
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="deliveryLocation"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Delivery Location:
                </label>
                <input
                  type="text"
                  id="deliveryLocation"
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="preferredDay"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Preferred Delivery Day:
                </label>
                <select
                  id="preferredDay"
                  name="preferredDay"
                  value={formData.preferredDay}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  <option value="">Select a day</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                </select>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="specialRequirements"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Special Requirements:
                </label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                ></textarea>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="hearAboutUs"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  How did you hear about us?:
                </label>
                <select
                  id="hearAboutUs"
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="socialMedia">Social Media</option>
                  <option value="friend">Friend Referral</option>
                  <option value="africanStore">African Store</option>
                  <option value="onlineSearch">Online Search</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <Button type="submit" primary>
                Place Order / Send Inquiry
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card style={{ marginTop: "2rem" }}>
          <CardContent>
            <h3>Company Contact Information</h3>
            <p>
              <strong>Production Facility & Head Office:</strong>
              <br />
              Nigerian Bread Mini Bakery
              <br />
              Unit 15, Industrial Estate
              <br />
              Leicester, LE4 6XY
              <br />
              United Kingdom
            </p>

            <p>
              <strong>Order & Customer Service:</strong>
              <br />
              Order Hotline: +44 (0) 116-XXX-XXXX
              <br />
              WhatsApp Orders: +44 (0) 7XXX-XXX-XXX
              <br />
              Email: orders@nigerianbreaduk.com
              <br />
              Customer Service: info@nigerianbreaduk.com
            </p>

            <p>
              <strong>Business Hours:</strong>
              <br />
              Production: Daily 4:00 AM - 2:00 PM
              <br />
              Customer Service: Monday - Saturday 8:00 AM - 6:00 PM
              <br />
              Sunday: 10:00 AM - 4:00 PM
              <br />
              Order Cutoff: 8:00 PM for next-day baking
            </p>
          </CardContent>
        </Card>
        <Card style={{ marginTop: "2rem" }}>
          <CardContent>
            <h3>Delivery Area</h3>
            <p>
              <strong>Primary Delivery Area:</strong>
              <br />
              • Greater London Area <br />
              • Birmingham & West Midlands <br />
              • Manchester & Greater Manchester <br />
              • Liverpool & Merseyside <br />• Leicester & Leicestershire
            </p>

            <p>
              <strong>Extended Delivery Area:</strong>
              <br />• Available to most UK addresses with 2-3 day delivery
            </p>
          </CardContent>
        </Card>
      </Section>
    </Container>
  );
};

export default Contact;
