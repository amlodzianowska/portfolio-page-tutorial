"use client"
import React from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useState } from 'react'

export const Sound = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggle = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
            <audio loop>
                <source src={"/public/audio/birds39-forest-20772.mp3"} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
            <button 
                className='text-foreground rounded-full flex items-center justify-center custom-bg fixed top-4 right-4 w-fit self-start z-50 ' 
                aria-label={"sound"} 
                name={"sound"}
                onClick={toggle}>
                <span className='relative w-14 h-14 p-4 hover:text-accent'>
                    {
                        isPlaying ?
                        <Volume2 className='w-full h-auto' strokeWidth={1.5}/> :
                        <VolumeX className='w-full h-auto' strokeWidth={1.5}/>
                    }
                    <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />
                    <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>Sound</span>
                </span>
            </button>
        </div>
    )
}
