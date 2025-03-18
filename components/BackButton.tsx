'use client';

import { ChevronLeft } from "lucide-react"

export const BackButton = ({className=''}:{className?: string}) => {
    return (
        <div 
        className={'back-btn bg-white mb-4 border border-borderColor rounded-full p-3 w-max hover:bg-gray-100 cursor-pointer ' + className}
        onClick={() => window.history.back()}
      ><ChevronLeft size={24} /></div>
    )
}