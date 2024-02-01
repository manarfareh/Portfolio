import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import {Projectmodal} from '../components'

const Projectcard = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
  deg
}) => {
  const [hovered, setHovered] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }

    // Check if the file is a video by examining the file extension
    const isVideoFile = /\.(mp4|webm|ogg)$/i.test(imgSrc[0]);
    setIsVideo(isVideoFile);
  }, [isInView, controls, imgSrc]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        className="text-white  "
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className='w-full aspect-video relative overflow-hidden rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg bg-gray-300'
        >
          {isVideo ? (
            <video
              width="100%"
              height="auto"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full"
            >
              <source src={imgSrc[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={imgSrc[0]}
              alt={`An image of the ${title} project.`}
              className="w-5/6 absolute b-0 left-1/2 -translate-x-1/2 translate-y-12 duration-300"
              style={{
                width: hovered ? "90%" : "85%",
                rotate: hovered ? deg : "0deg",
              }}
            />
          )}
        </div>
        <div className='px-2 mt-4'>
          <div width="100%">
            <div className='  items-center justify-center  gap-5  '>
              <h4 className="font-bold text-2xl flex-shrink-0">{title}</h4>
              <div className='w-full h-[1px] bg-main1' />

              <div ref={ref} className='flex text-white gap-2 '>
                {projectLink ? 
                  <motion.span
                    variants={{
                      initial:{ x: -30, opacity: 0 },
                      visible:{ x: 0, opacity: 1 },
                    }}
                    initial='initial'
                    animate={controls}
                    transition={{ease:'easeInOut', duration: 1 }}
                    className='hover:text-main1'
                  >
                    <a href={projectLink} target="_blank" rel="nofollow">
                      <AiOutlineExport size="2.4rem" />
                    </a>
                  </motion.span> : null }

                  {code ?
                    <motion.span
                    variants={{
                      initial:{ x: 30, opacity: 0 },
                      visible:{ x: 0, opacity: 1 },
                    }}
                    initial='initial'
                    animate={controls}
                    transition={{ease:'easeInOut', duration: 1 }}
                    className='hover:text-main1'
                    >
                      <a href={code} target="_blank" rel="nofollow">
                        <AiFillGithub size="2.4rem" />
                      </a>
                    </motion.span>
                  : null}

            </div>

            </div>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
          {tech.map((tag) => (
            <span
              key={`${tag.name}`}
              className={`text-[15px]  bg-slate-600 px-2 py-1 bg-opacity-30 rounded-3xl ${tag.color}`}
            >
              #&nbsp;{tag.name}
            </span>
          ))}
        </div>
          <div>
            <p className='font-extralight text'>
              {description}{" "}<br />
              <span onClick={() => setIsOpen(true)} className="text-main1  cursor-pointer">Learn more {">"}</span>
            </p>
          </div>
        </div>
      </motion.div>
      <Projectmodal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};

export default Projectcard