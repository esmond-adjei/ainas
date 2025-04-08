'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';


interface TeamMemberProps {
  imageSrc: string;
  name: string;
  title: string;
  bio: string;
  showSummary?: boolean;
}

interface TeamMemberModalProps extends TeamMemberProps {
  imageSrc: string;
  name: string;
  openModal: boolean;
  setOpenedModal: (value: boolean) => void;
  title: string;
  bio: string;
}


const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
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
    if (openModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [setOpenedModal, openModal]);

  if (!openModal) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 hcc z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      transition={{ duration: 0.2 }}
      >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        >
        <div
          ref={modalRef}
          className="bg-white max-h-[90vh] max-w-lg overflow-y-auto p-8 rounded-lg shadow-lg relative"
        >
          <img
           src='/cross-circle-bloat.svg'
            alt="cross-circle"
            className="absolute -top-8 -left-8 size-32 z-0"
            />
          <button
            onClick={() => setOpenedModal(false)}
            className="absolute right-2 top-2 p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition"
          >
            <X />
          </button>

          <div className='flex gap-4 justify-start'>
            <img
              src={imageSrc}
              alt={name}
              className="size-32 shrink-0 rounded-full object-cover object-top bg-gray-400 filter grayscale"
            />
            <div>
              <h3 className="text-2xl text-left font-semibold mb-2">{name}</h3>
              <p className="text-gray-600 text-sm w-max px-3 py-1 rounded-3xl bg-slate-200 max-w-[400px] truncate">{title}</p>
            </div>
          </div>

          <p className="py-4">{bio}</p>
        </div>
        </motion.div>
    </motion.div>
  );
};

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, title, bio, showSummary=true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div 
        className="bg-gray-200 relative cursor-pointer w-[300px] h-[400px] hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 bg-cover bg-center" 
        onClick={toggleModal}
        style={{backgroundImage: `url(${imageSrc})`}}
      >
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-4 px-6">
            <h3 className="text-white font-semibold">{name}</h3>
            <p className="text-light text-sm">{title}</p>
          </div>
      </div>

      {/* Modal for Detailed Info */}
      {
        showSummary && (
          <TeamMemberModal 
            openModal={isModalOpen} 
            setOpenedModal={setIsModalOpen} 
            imageSrc={imageSrc} 
            name={name} 
            title={title} 
            bio={bio} 
          />
        )
      }
    </>
  );
};

export default TeamMember;