import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home: React.FC = () => {
  const [cursorBlinking, setCursorBlinking] = useState(false);

  return (
    <div className="flex h-screen justify-start text-white overflow-x-hidden mt-12 sm:mt-20 lg:mt-40 mx-12 sm:mx-20 lg:mx-36 ">
      <div className="text-left max-w-full">
        <h1 className="text-2xl sm:text-[2.5rem] md:text-4xl mb-4 sm:pb-2">
          Hi There ! <span className="animate-shake">👋🏻</span>
        </h1>
        <div className="flex flex-wrap items-baseline text-2xl sm:text-[2.5rem] md:text-4xl pb-10 sm:pb-20">
          <span>I'M&nbsp;</span>
          <span className="text-customPurple font-bold">ANTOINE</span>
          <span className="text-customPurple font-bold ml-1 sm:ml-2">CAPEYRON</span>
        </div>
        
        <h1 className="text-[1.5rem] sm:text-[2.5rem] md:text-4xl font-mono text-customPurple sm:font-bold min-h-[3.6rem]">
          <Typewriter
            words={['Fullstack Developer']}
            loop={false}
            typeSpeed={150}
            cursor
            cursorBlinking={cursorBlinking}
            onDelay={() => setCursorBlinking(true)}
            onType={() => setCursorBlinking(false)}
            onDelete={() => setCursorBlinking(false)}
          />
        </h1>
      </div>
    </div>
  );
};

export default Home;
