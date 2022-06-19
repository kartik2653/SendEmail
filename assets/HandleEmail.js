/* eslint-disable prettier/prettier */
import email from 'react-native-email';
function sendEmail(name, number, emailID, message) {
  const to = ['info@redpositive.in'];
  const title = 'Contact Us';
  const content = 'Name: ' + name + '\n' + 'Mobile Number: ' + number + '\n' + 'Email: ' + emailID + '\n' + 'Message: ' + message;
  email(to, {
    subject: title,
    body: content,
    checkCanOpen: false, // Call Linking.canOpenURL prior to Linking.openURL
  }).catch(console.error);
}

export default sendEmail;
