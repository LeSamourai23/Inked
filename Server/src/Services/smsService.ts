import AWS from 'aws-sdk';
require('dotenv').config();

// Configure AWS SNS
const sns = new AWS.SNS({// e.g., 'us-west-2'
    region: 'us-east-1',
  accessKeyId: 'process.env.AWS_ACCESS_KEY_ID',
  secretAccessKey: 'process.env.AWS_SECRET_ACCESS_KEY',
});

// Function to send OTP via SMS using Amazon SNS
async function sendOtpViaSms(phoneNumber: string, otp: string): Promise<void> {
  const params = {
    Message: `Your OTP is: ${otp}`,
    PhoneNumber: phoneNumber,
  };

  try {
    const result = await sns.publish(params).promise();
    console.log('OTP sent via SMS. Message ID:', result.MessageId);
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
}

// Call the sendOtpViaSms function with recipient's phone number and OTP
sendOtpViaSms('+918368862409', '123456'); // Replace with recipient's phone number and generated OTP
