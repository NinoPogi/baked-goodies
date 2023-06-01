import { VStack, Heading, OrderedList, ListItem, Text } from "@chakra-ui/react";

const TermsPage = () => {
  return (
    <VStack paddingX="40px">
      <Heading>Terms of Service</Heading>
      <Text>
        These Terms of Service ("Agreement") govern your use of the [your
        website name] website ("Website") and any related services offered
        through the Website. By accessing or using the Website, you agree to be
        bound by this Agreement. If you do not agree with any part of this
        Agreement, you should not use the Website.
      </Text>
      <OrderedList>
        <ListItem>
          Services Offered
          <OrderedList>
            <ListItem>
              Baked Goodies by H offers an online platform for customers to
              order cakes and related products ("Products").
            </ListItem>
            <ListItem>
              Baked Goodies by H reserves the right to modify, suspend, or
              discontinue any aspect of the Website or the services provided at
              any time without prior notice.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Ordering and Delivery
          <OrderedList>
            <ListItem>
              By placing an order through the Website, you acknowledge and agree
              that you are responsible for providing accurate and complete
              information, including delivery address, contact details, and any
              specific requirements.
            </ListItem>
            <ListItem>
              Baked Goodies by H is not responsible for any delays, damages, or
              losses that may occur during the delivery process. Delivery times
              are estimates and may vary depending on various factors.
            </ListItem>
            <ListItem>
              You agree to review and comply with the Vendor's terms and
              policies regarding cancellations, returns, refunds, and any other
              specific terms related to the Products.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Intellectual Property
          <OrderedList>
            <ListItem>
              The Website and its contents, including but not limited to text,
              graphics, logos, images, and software, are the property of Baked
              Goodies by H and its licensors and are protected by intellectual
              property laws.
            </ListItem>
            <ListItem>
              You may not reproduce, distribute, modify, transmit, perform, or
              display any portion of the Website without prior written consent
              from Baked Goodies by H.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          User Conduct
          <OrderedList>
            <ListItem>
              You agree to use the Website only for lawful purposes and in a
              manner that does not infringe upon the rights of others or
              restrict or inhibit anyone else's use and enjoyment of the
              Website.
            </ListItem>
            <ListItem>
              You agree not to engage in any activity that could damage,
              disable, overburden, or impair the Website or interfere with the
              proper functioning of the Website.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Disclaimer of Warranties
          <OrderedList>
            <ListItem>
              The Website and its content are provided on an "as-is" and "as
              available" basis without any warranties of any kind, either
              express or implied.
            </ListItem>
            <ListItem>
              Baked Goodies by H does not warrant that the Website will be
              error-free, uninterrupted, secure, or free of viruses or other
              harmful components.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Limitation of Liability
          <OrderedList>
            <ListItem>
              To the extent permitted by applicable law, Baked Goodies by H and
              its affiliates, officers, directors, employees, agents, and
              licensors shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or in
              connection with your use of the Website.
            </ListItem>
            <ListItem>
              Baked Goodies by H shall not be liable for any damages, losses, or
              costs incurred as a result of your interactions or transactions
              with the Vendors.
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Governing Law and Jurisdiction
          <OrderedList>
            <ListItem>
              This Agreement shall be governed by and construed in accordance
              with the laws of [your jurisdiction].
            </ListItem>
            <ListItem>
              Any disputes arising out of or in connection with this Agreement
              shall be subject to the exclusive jurisdiction of the courts
              located in [your jurisdiction].
            </ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Modifications to the Agreement
          <OrderedList>
            <ListItem>
              Baked Goodies by H reserves the right to modify or update this
              Agreement at any time by posting the revised version on the
              Website.
            </ListItem>
            <ListItem>
              Your continued use of the Website after any modifications to this
              Agreement shall constitute your acceptance of such modifications.
            </ListItem>
          </OrderedList>
        </ListItem>
      </OrderedList>
    </VStack>
  );
};

export default TermsPage;
