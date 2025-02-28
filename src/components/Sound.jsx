"use client"
import React from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const handleFirstUserInteraction = () => {
        const consent = localStorage.getItem("musicConsent");
        if (consent === "true" && !isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        }
        ["click", "keydown", "touchstart"].forEach((event) => {
            document.removeEventListener(event, handleFirstUserInteraction) 
        });
    }

    useEffect(() => {
      const consent = localStorage.getItem("musicConsent");

      if (consent) {
        setIsPlaying(consent === "true");
        if (consent === "true") {
            ["click", "keydown", "touchstart"].forEach((event) => {
                document.addEventListener(event, handleFirstUserInteraction)
            })
        }
      }
    }, []);
    

    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(newState)
        newState ? audioRef.current.play() : audioRef.current.pause();
        localStorage.setItem("musicConsent", String(newState));
    }

    return (
        <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
            <audio loop ref={audioRef}>
                <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg"/>
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
