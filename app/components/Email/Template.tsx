import * as React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Heading,
} from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Ny kontakt från vinylspelare.se - {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Ny kontakt från vinylspelare.se</Heading>
          </Section>
          
          <Section style={content}>
            <Text style={label}>Från:</Text>
            <Text style={value}>{name}</Text>
            
            <Text style={label}>E-post:</Text>
            <Text style={value}>{email}</Text>
            
            <Hr style={hr} />
            
            <Text style={label}>Meddelande:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              Detta meddelande skickades från kontaktformuläret på vinylspelare.se
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const header = {
  padding: '32px 24px 0',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 24px',
  padding: '0',
};

const content = {
  padding: '0 24px',
};

const label = {
  color: '#333',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '16px 0 4px',
};

const value = {
  color: '#666',
  fontSize: '16px',
  margin: '0 0 8px',
};

const messageText = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '8px 0 0',
  padding: '16px',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  border: '1px solid #e9ecef',
};

const hr = {
  borderColor: '#e9ecef',
  margin: '24px 0',
};

const footer = {
  padding: '0 24px',
  marginTop: '32px',
};

const footerText = {
  color: '#888',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '0',
};