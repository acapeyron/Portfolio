import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home: React.FC = () => {
  const [cursorBlinking, setCursorBlinking] = useState(false);

  return (
    <>
      <div className="flex h-screen justify-start items-center text-white text-center">
        <div className="ml-40 text-left">
          <h1 className="text-5xl mb-4 ">
            Hi There ! <span className="animate-shake">👋🏻</span>
          </h1>
          <p className="text-5xl flex">
            I'M&nbsp;
            <p className="text-purple-400 font-bold">ANTOINE CAPEYRON</p>
          </p>
          <br />
          <br />
          <h1 className="text-5xl font-mono text-purple-400 min-h-[3.6rem]">
            <Typewriter
              words={['Fullstack Developer']}
              loop={false}
              cursor
              cursorBlinking={cursorBlinking}
              onDelay={() => setCursorBlinking(true)}
              onType={() => setCursorBlinking(false)}
              onDelete={() => setCursorBlinking(false)}
            />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
