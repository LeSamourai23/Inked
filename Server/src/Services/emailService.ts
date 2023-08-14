import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
require('dotenv').config();

console.log(process.env.AWS_ACCESS_KEY_ID);
const ses = new SESClient({});

function createSendEmailCommand(toAddress: string, fromAddress: string, message: string) {
    return new SendEmailCommand({
        Destination: {
            ToAddresses: [toAddress],
        },
        Source: fromAddress,
        Message: {
            Subject: {
                Charset: 'UTF-8',
                Data: "Your One-Time Password for Inked"
            },
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: message
                }
            }
        }
    })
}

export async function sendEmail(email: string, token: string) {
    console.log("email: ", email, token);

    const message = `Your One-Time Password for Inked is ${token}`;

    const command = createSendEmailCommand(email, "info@inkd.life", message);

    try {
        return await ses.send(command);
    } catch (e) {
        console.log(e);
        return e;
    }
};