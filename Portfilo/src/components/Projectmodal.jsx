import { useEffect,useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import {ImageSlider}  from "./index";


const Projectmodal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "visible";
    }

    // Check if the file is a video by examining the file extension
    const isVideoFile = /\.(mp4|webm|ogg)$/i.test(imgSrc[0]);
    setIsVideo(isVideoFile);
  }, [isOpen, imgSrc]);

  const content = (
    <div className='fixed top-0 left-0 right-0 z-40 h-[100vh] flex justify-center overflow-y-scroll px-2 sm:px-20 sm:py-5 backdrop-blur' onClick={() => setIsOpen(false)}>
      <button className='z-50 absolute top-5 right-5 text-white text-4xl font-light'>
        <MdClose />
      </button>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className='mx-auto w-full max-w-5xl h-fit overflow-hidden mt-20 sm:mt-0 cursor-auto bg-black bg-opacity-60 backdrop-blur-2xl bg-opacity-90 backdrop-filter rounded-md'

      >
        <div className=" sm:py-3 ">
        {isVideo ? (
            <video width="100%" height="auto" controls>
              <source src={imgSrc[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <ImageSlider imgSrc={imgSrc} />
          )}
        </div>
        <div className='px-10 sm:py-5'>
          <p className="text-3xl sm:text-4xl font-bold text-white">{title}<span className="text-main1 text-5xl">.</span> </p>
          {
            tech
              .map(item => <span className="text-main1">{item.name}</span>)
              .reduce((acc, x) => acc === null ? [x] : [acc, <span className="text-main1"> | </span> , x], null)
          }

          <div className='flex text-white flex-col gap-2 my-5'>{modalContent}</div>

          <div className='mb-5 sm:mb-2'>
            <div className='flex items-center gap-5'>
              <a target="_blank" rel="nofollow" href={code} className="flex gap-2 text-main1 items-center">
                <AiFillGithub size='2rem' /> source code
              </a>
              {projectLink ? 
              <a target="_blank" rel="nofollow" href={projectLink} className="flex text-main1 gap-2 items-center">
                <AiOutlineExport size='2rem'/> live project
              </a> : null}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.getElementById("root"));
};

export default Projectmodal