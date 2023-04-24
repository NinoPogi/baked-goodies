import { useEffect } from "react";
import { Card, Heading, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CakeCustomize = () => {
  useEffect(() => {
    document.title = "Custom Cakes| Baked Goodies by H";
  }, []);
  return (
    <VStack align="left">
      <Heading>Custom Cakes</Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="6px">
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/259357241_369347541544188_3175964449940706277_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGpYho7HqL_1T6bJoV65TzKHzh8dx6Z6RAfOHx3HpnpEL7AGR-YgwVYQB-YVvHSRg9sbsOZWXxEO0UeKt1anO0X&_nc_ohc=BExzYwDCO-kAX_I6d3F&_nc_oc=AQlhkApWLzAcdjDua1xaw87Th2jUpQL_i2Q295-ZY4PIV2ftK7PYGT2nFh3avoXP0Vc&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfDfCzAitLvCZ_gZZxRIYzmep-9BxMaHuxRc-E8J2Snt8g&oe=644AA0B0"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Minimalist Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/292398893_509197717559169_6778669487896730466_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeG4rYQ1GhcuQtbA46JiJRFduCPE2V3ce2W4I8TZXdx7ZZ8ae6PLwlGMV6XYB6PN7sWanpmPpv3-CzZkMcY9qx9R&_nc_ohc=QGCUWWavWnEAX_ekRRV&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfA1WaUHWxXApl_wQEix-a4F9j_9ICMo1NzeWZ2x7G30Qw&oe=644C0F61"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Money Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/284246299_483090780169863_7437678542940655047_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGqevDuAFHzQfIxWFUzrg8FfXV93joK8NR9dX3eOgrw1HxrwU6RBxoqfC0LZMXNw1HFoKcaRphHuZjdueZUjhfY&_nc_ohc=PIdMKOG7TucAX9UwPcM&_nc_ht=scontent.fcrk1-1.fna&oh=00_AfBqgOyT1p76W0ReN02_abK7dwJG57QLlCQ8gqVf6CWEow&oe=644B9197"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Number Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/326991027_644138414149739_4610893143328353051_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeG3yym4mb-8PEuqJOtevUOnzoUJ9MlubwHOhQn0yW5vAcqMIVzJCh2f-tQZog1sDdkWVl60GWaTBE-A3ia8f8fI&_nc_ohc=l6odvnUZKK8AX9ceodP&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfBMPWT3t6JuhRFFtpBaerVo40GBfBFzdbP14k_p2wewbg&oe=644BABE0"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Mini Number Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t1.6435-9/189533870_256069289538681_5183201760546664147_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeERa8nN13i9ZmSJLoHtCPjy1a4_XUKePY7Vrj9dQp49jiWp32al-Y0Cck4GsN_FRoZ9FzH-lyFV7QpRGiav3QL4&_nc_ohc=Z5Dx7S7vOvkAX_9bZeb&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfAq10zXtKxuxAKcCJspd1ZfZZhisVht7KP5hPIAElJBww&oe=646DB476"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Theme Cake</Heading>
        </Link>
      </SimpleGrid>
      <Heading>Tier Cakes</Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="6px">
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/262028726_377676887377920_3764481159814570587_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeG4ZJi0aUDTbJviXvG-AFMLff9bpnYJy7p9_1umdgnLuoIIGyeD_871-Duc7S5tna1BuuF6T78fse9FsK3THAk9&_nc_ohc=74NCliQueWkAX-xTMM7&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfBwoWtlBHTdZa7C9D-kp6c4CYM71E3PFG94jYRSz4PqPQ&oe=644B27DF"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Baby Tier Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-2.fna.fbcdn.net/v/t39.30808-6/262812233_380368670442075_320688180572110207_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGe9irHFI_-LKjOOMEPT6MuDqZDJankiJUOpkMlqeSIlT7_Hfpf1Vg8e4BzK8axPRFRasmWyG_xkMGLv_isuqPA&_nc_ohc=Tk0ex_BkU84AX-ohlgU&_nc_ht=scontent.fcrk1-2.fna&oh=00_AfBrGu6T5JSnhuEGhuhT3VQ7g27rA1CIbYkJ7fTEGC2zzg&oe=644B11FA"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Mini Tier Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-6/272444114_408768177602124_5141190135202257324_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFb_63fzWJ_I8Pmhg8KMR8MaTn3q31Fv7BpOferfUW_sKpiqtzwE8jcw4mx24XAwhTJdDRfl-FnekOLy7-InfyB&_nc_ohc=QIFujUSYwSEAX-PjFS1&_nc_ht=scontent.fcrk1-1.fna&oh=00_AfB-PutbCClHokNYjZsmsJ22F0G3T-aUgAGAFQyIkv01aA&oe=644BD6D4"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Small Tier Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/327610518_555615773263975_3638597737166668897_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHEBjygwzSHioyxSS4riq2Im0COb4quLr-bQI5viq4uv7iEWOE9SUcDlVMRGTuMVpUxyhiNJzsr_n3l3ko-rsiY&_nc_ohc=_lbs5DenDbsAX_usk8p&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfBoCY-ug2vZj6sJPsrodnTKyPS9YP-_0o09GN_gv63aJw&oe=644C2F22"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Big Tier Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-6/301221522_540641871081420_5322157655041135661_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHWkSyYfjot5Vn9fbJ1Me2siZMf4OgwpBaJkx_g6DCkFktqsCRErHSJq4tNT7aWuO6OxywrvIprOhqkw_ydB5gh&_nc_ohc=fipNp72TMnMAX9OlFjw&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfD0wEH9l6jbcRg1l8SHTu8_m0qCcmHB2UMtBq0h5bwvoQ&oe=644B90AD"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">Small 3 Tier Cake</Heading>
        </Link>
        <Link to="/">
          <Card overflow="hidden" variant="unstyled">
            <Image
              src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/273673588_419275119884763_7701642744834601501_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHT-pdyvix1c1tyV3FTxywq7Hoo8XRz-V7seijxdHP5Xk0Y6XmLTjtUBSRaitwr2xCrabPyzjw1YzK2hESLNYRU&_nc_ohc=etX5sZz-Wv4AX9GTsM4&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfC20xUaJk6dEaooFKuogS7jT7BKwmn7uQXxv1f-7of2_w&oe=644BA76E"
              boxSize="300px"
            />
          </Card>
          <Heading fontSize="2xl">3 Tier Cake</Heading>
        </Link>
      </SimpleGrid>
    </VStack>
  );
};

export default CakeCustomize;
