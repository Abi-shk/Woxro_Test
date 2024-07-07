import './index.css';
import Footer from "./Footer";
import Header from "./Header";
import fortniteImage from './assets/fortnite.jpg';
import Item from './Item';




function App() {

  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col items-center w-full bg-black text-center">
        <img src={fortniteImage} alt="Fortnite" className="my-8 w-full max-w-4xl object-cover" />
        <p className="text-white text-sm">Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or <br /> live event, or disover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has <br /> an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite...Drop in.</p>
        <button className="bg-white text-black px-4 py-2 my-4 rounded-sm w-80 mt-10">Visit Website</button>

        <div className="flex flex-wrap justify-center gap-4 mt-24">
          <Item />
        </div>

        <section className="flex flex-col items-center justify-center mt-12 text-center px-4 w-full text-white font-thin">
          <h2 className="text-2xl">Our Contribution</h2>
          <p className="mt-4 w-1/3 max-lg:w-1/2 max-md:w-full">Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparallel benefits for our client. </p>
          <div className="flex flex-wrap justify-center gap-20 max-md:gap-14 mt-14">
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-5xl">5M</h3>
              <p>Daily User <br /> Engagements</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-5xl ">$500K</h3>
              <p >Revenue Surge for a <br /> Platform</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-5xl">10X</h3>
              <p>ROAS on all our <br /> marketing campaigns</p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center px-4 w-full text-white">
          <h2 className="text-3xl font-thin">Interested In Delving Deeper Into The Project?</h2>
          <p className="mt-8">
            If you’d like to explore further details about our initiatives or any of our <br /> affliated brands, don't hesitate to connect. You can reach out to us via <br /> email at <a href="mailto:hello@abc.com" className="font-semibold">hello@abc.com</a> or give us a call at <span className="font-semibold">+91 490 29028710</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <button className="text-white font-semibold text-sm px-4 py-2 border-2 border-white w-72">Ring Us On Skype</button>
            <button className="bg-white font-semibold text-sm text-black px-4 py-2 rounded w-72">Contact Us</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
