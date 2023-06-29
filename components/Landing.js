export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row max-w-full h-screen">
        <div className="flex-1 md:mx-auto">
          <h1 className="text-dark-blue text-5xl font-normal">
            Organizacja wycieczek autokarowych dla szkół i wycieczek
            zorganizowanych
          </h1>
          <button>Facebook</button>
          <button>Instagram</button>
        </div>
        <div className="flex-1 md:w-1/2 w-full"></div>
      </div>
    </>
  );
}
