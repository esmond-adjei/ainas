'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';


interface TeamMemberProps {
  imageSrc: string;
  name: string;
  title: string;
  bio: string;
}

interface TeamMemberOverlayProps extends TeamMemberProps {
  imageSrc: string;
  name: string;
  openModal: boolean;
  setOpenedModal: (value: boolean) => void;
  title: string;
  bio: string;
}


const TeamMemberOverlay: React.FC<TeamMemberOverlayProps> = ({
  openModal,
  setOpenedModal,
  imageSrc,
  name,
  title,
  bio,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpenedModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setOpenedModal]);

  if (!openModal) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          ref={modalRef}
          className="flex flex-col items-center bg-white h-max-[90vh] overflow-y-auto p-8 rounded-lg w-full max-w-lg shadow-lg relative"
        >
          <img
            src={imageSrc}
            alt={name}
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-500 mb-4">{title}</p>
          <p className="text-gray-700 mb-8">{bio}</p>
          <button
            onClick={() => setOpenedModal(false)}
            className="absolute right-2 top-2 p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition"
          >
            <X />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, title, bio }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="mb-8 rounded-lg overflow-hidden transition-transform transform hover:scale-[98%]">
        {/* Team Member Card */}
        <div className="relative cursor-pointer" onClick={toggleModal}>
          <img src={imageSrc} alt={name} className="w-[400px] h-[400px] object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-4 px-6">
            <h3 className="text-white text-xl font-semibold">{name}</h3>
            <p className="text-light text-sm">{title}</p>
          </div>
        </div>
      </div>

      {/* Modal for Detailed Info */}
      <TeamMemberOverlay 
        openModal={isModalOpen} 
        setOpenedModal={setIsModalOpen} 
        imageSrc={imageSrc} 
        name={name} 
        title={title} 
        bio={bio} 
       />
    </>
  );
};

export default TeamMember;