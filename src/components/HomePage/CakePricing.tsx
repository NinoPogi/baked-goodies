import { Card, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const images = [
  "https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.15752-9/334901661_237032208721501_81756737782414583_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHI6q4qBuvqDzuHSTMZz08vziygPnrI2q3OLKA-esjarUY7YnNJEg-89G3oSU_IdoiwQ925ZPHk0fDfxSxZeuaQ&_nc_ohc=uBrGoapsQUsAX_v1YKk&_nc_ht=scontent.fcrk1-5.fna&oh=03_AdTIFFtJnOkTp1waOY8J4jWdwtBBGnzYKekzcHgs1k0e-g&oe=646DA333",
  "https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.15752-9/334893621_244269174623717_4316464065814422307_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH9Yt3a-J8RpD_jihqeji8hLWMduhubFpAtYx26G5sWkDAaS2XJCh481T1MlznB9IXZElS5ezUD5aOVWPucPxn6&_nc_ohc=P-u1hNLn6LcAX_qZelP&_nc_ht=scontent.fcrk1-3.fna&oh=03_AdRejuXTYFCQGiaxv9iqxn-4QQR33f5LYC8_iKNkqeYiWQ&oe=646D84D5",
  "https://scontent.fcrk1-1.fna.fbcdn.net/v/t1.15752-9/320663709_935109440830020_4379161973805083444_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFYuZnI7SUP13ZEialBEqwgUbdy3MoweiBRt3LcyjB6IA2TFHAjqTtXaIUwR-1RQlBFHSkDWeht6pV__2DJIzXe&_nc_ohc=SAGUnPzn-x0AX-sfXcO&_nc_ht=scontent.fcrk1-1.fna&oh=03_AdQP_CNwygNQ5jhQyZ8GMMqoh3kwyaux9eF6Wyf0jRkWKw&oe=646DAFC3",
  "https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.15752-9/324523593_711572910377862_859113642038631888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGrynNCVRbvwxhog-786VBRHDUf7VfBKXccNR_tV8Epd7AKMfM5Dk5qJ3kGwNrt1jiZ-C5-jQ0-8aAl2LqPSa_Q&_nc_ohc=kMJg8MjqwLwAX-Bx2v8&_nc_ht=scontent.fcrk1-2.fna&oh=03_AdTKticKgQXm7HiF176njyt8gFs7raTiMX6i60Weu-fCLA&oe=646DAA56",
  "https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/320690959_723187632408546_548818855628515440_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHlWD2ucXR6C0vaWFIuegcaviTLzDFvf---JMvMMW9_7yflJe1b7wvyyb7e3d1WY_itTDE3CTiZ4vLs5lvvPc2o&_nc_ohc=e-EBWqsmKAsAX8ozt5S&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdTTFhPDQXRLZl7hEI-zeEbMR0d40qZVmVDhUesUQ6CmMg&oe=646D9A0F",
  "https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.15752-9/324177715_710670677241115_1294584568834531332_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGv3EJeOAZya-gDvEMPytoWf9g7csQQUVJ_2DtyxBBRUiIsO63fee9WgehxXeZ_nrcLmML6C-Ud9tLxV0HJUEEE&_nc_ohc=1k1uOpciZGYAX8Esxpm&_nc_oc=AQn4grZDMgE5i8rapNy2HiH_vVdrkkfvmPBGJNH6iyLaX4gsmfsVGq8dCMn-d8Cn2eQ&_nc_ht=scontent.fcrk1-3.fna&oh=03_AdRUoxFdGHv9vI21phYZ9QJbXiglAPfcLRM0m8a_1QTviQ&oe=646D914E",
  "https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/324219114_8615736838498337_1609247397007611313_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGnEvtPGl9XUB9-TFvVIqf-VeowqUnCn_pV6jCpScKf-uyH2LfZ-JgEYueQG-0fPsG7W8WVi-yL1td6JhJlKFJ1&_nc_ohc=OrRgBhLjFuAAX8X_UYm&_nc_ht=scontent.fcrk1-4.fna&oh=03_AdSsOcPjRI_sdNquzQ5GJaMoYgcvAGmsAtLNXH3bzM7OPQ&oe=646D88CD",
  "https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.15752-9/324160797_758417198479954_4025395508056724552_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGfvYWg2w0eySDbfR0ajM1420vqnRFr1OHbS-qdEWvU4XeflEt0TULYK15i_AL3iz3O8rjLcY1zU_SxmT3afTOp&_nc_ohc=3b1mOgIhDmAAX_5FFUa&_nc_ht=scontent.fcrk1-5.fna&oh=03_AdQaoKUXo0nsS2eQCZuY-Cu67MlYD-XYGWd-ymC4DNI-Bg&oe=646DA1B7",
  "https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.15752-9/322964891_3782651638651167_2688252727805768361_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF2sRnrZdrClAeRyVXBel_yGYzaSqRH5OYZjNpKpEfk5mDxtPTpeoFDOV3fXhGtIYEqyKswXjhvNup4IxrDtAn3&_nc_ohc=xX3EkeksBqsAX_hWG11&_nc_ht=scontent.fcrk1-5.fna&oh=03_AdQJ3oxCU5XqWM2G0weLBuysSm82Iw6xCPML3T7uDggaog&oe=646D9F49",
  "https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.15752-9/320514022_896226224729022_7985998190124476257_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF4opoCr9dqvClR2XmC3BcOBplS_jADCdEGmVL-MAMJ0QXSfMtNaUJ1MG58mU-Z0i3uLTUR8G5r7eONd6LhyVCr&_nc_ohc=gT-7TyJ9GvcAX_kxMp5&_nc_ht=scontent.fcrk1-5.fna&oh=03_AdSuKCUW-gxmpc1kAM8-D1f0Xt-U6xx5wNVg9M3dobsMsA&oe=646D9A8F",
  "https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.15752-9/320751017_1675498292883684_2236666078630232846_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGN4ZRDCEp92ETSIDtYUFNzf1WD22kmFg9_VYPbaSYWDyOjtroyaplwJIJoO12UxTmn63xkBfn2mhvi2fyi94T7&_nc_ohc=M-zsTIJ-QZUAX-nFp2q&_nc_ht=scontent.fcrk1-3.fna&oh=03_AdQwl4mizFH-6HTZ6Q6GLVp05-Yi66ThYXlp8Z5ENMdpVw&oe=646DA57F",
  "https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.15752-9/323538543_938579767310572_6154014899224300759_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHPcKcF2YHShPaJ7_tkWwz_38M0W3m92s_fwzRbeb3az89ztpliQgk1Vct0zMYI9vef4UIR1wOP9J5WpxuBcNNM&_nc_ohc=Y3sqsYZzQAgAX-Wx3bz&_nc_ht=scontent.fcrk1-5.fna&oh=03_AdTHk_qvZtESXFjaKALx9Stlj9LzzmdVXE2O6nySNJWccw&oe=646DA11E",
  "https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.15752-9/324391331_3410433562570199_8498888012371364205_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEO9VTta1kSufqRdkydPY-aKZ-v19dzRmgpn6_X13NGaFLk8RLyYWGF5ZEMrOXAhemk03LDzU1mHu7BJtYcjdFY&_nc_ohc=ORTTKaAR5SIAX_VIHjw&_nc_ht=scontent.fcrk1-3.fna&oh=03_AdSAq9LHRH85yRTVeZLfFEJAZ162T2eBAYfkWiPrLrjgJw&oe=646D9E18",
  "https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.15752-9/318945220_1103981060295727_8570989503757705843_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF5RSV6Q_YdRq0BXFpYYopK1NoRVrGphE_U2hFWsamETy5hIBnReLVngY6CRdzMKanJ-qRj9Nhtc1K2x87f5ZVn&_nc_ohc=IQhPzhh5KFsAX8ol1M8&_nc_ht=scontent.fcrk1-5.fna&oh=03_AdQsugI9VsnRuE82CU5qfBDRBn3v1m1dIecKUnKW3xSHCg&oe=646D983A",
];

const CakePricing = () => {
  return (
    <>
      <Heading>PRICING</Heading>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing="6px">
        {images.map((url) => (
          <Card
            borderRadius="20px"
            overflow="hidden"
            variant="unstyled"
            mb="40px"
          >
            <Image src={url} boxSize="300px" />
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CakePricing;
