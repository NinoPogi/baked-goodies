import { VStack, Text, Heading, ListItem, OrderedList } from "@chakra-ui/react";

const PrivacyPolicyPage = () => {
  return (
    <VStack paddingX="40px">
      <Heading>Privacy Policy</Heading>
      <Text>
        This Privacy Policy ("Policy") describes how Baked Goodies by H ("we,"
        "us," or "our") collects, uses, and protects the personal information
        provided by users ("you" or "your") of our website. By accessing or
        using our website, you acknowledge that you have read, understood, and
        agree to be bound by this Policy.
      </Text>
      <OrderedList>
        <ListItem>
          Information We Collect
          <OrderedList>
            <ListItem>
              Personal Information: When you create an account and use our
              website's login functionality, we may collect personal
              information, such as your name, email address, and password.
            </ListItem>
            <ListItem>
              Cookies: We may use cookies to enhance your user experience and
              provide you with personalized features. Cookies are small files
              stored on your device that allow us to recognize your preferences
              and provide a tailored experience when you log in.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Use of Information
          <OrderedList>
            <ListItem>
              Personal Information: We use the personal information provided
              during the login process to authenticate your identity, enable
              access to your account, and provide our services to you.
            </ListItem>
            <ListItem>
              Cookies: We use cookies to remember your login information and
              preferences, streamline the login process, and enhance your
              overall user experience. We do not use cookies for any other
              purposes without your explicit consent.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Data Retention
          <OrderedList>
            <ListItem>
              We will retain your personal information for as long as necessary
              to fulfill the purposes outlined in this Policy or as required by
              applicable laws. If you wish to delete your account and have your
              personal information removed from our systems, please contact us
              using the information provided in Section 6.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Information Security
          <OrderedList>
            <ListItem>
              We implement reasonable security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction. However, please note that no method of transmission
              over the internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Third-Party Services and Links
          <OrderedList>
            <ListItem>
              Our website may contain links to third-party websites or services.
              This Privacy Policy does not apply to those third-party websites
              or services. We encourage you to review the privacy policies of
              those third parties before providing any personal information.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Contact Us
          <OrderedList>
            <ListItem>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or the handling of your personal information,
              please contact us at goodiesbaked9@gmail.com.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Changes to the Privacy Policy
          <OrderedList>
            <ListItem>
              We reserve the right to modify or update this Privacy Policy at
              any time. Any changes to this Policy will be posted on our website
              with the updated date. Your continued use of our website after any
              modifications to this Policy constitutes your acceptance of such
              changes.
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
    </VStack>
  );
};

export default PrivacyPolicyPage;
