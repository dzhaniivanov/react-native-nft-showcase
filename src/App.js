import { Download, SectionWrapper, Features } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NTFs.Start Selling & Growing"
        description="Buy,store,collect NFTs,exchange & earn crypto.Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace.Smooth constat colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is build using Expo which runs natively on all users devices.You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens.The first screen lists all NFTs while the second one shows the details of a specifit NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
    </>
  );
};

export default App;
