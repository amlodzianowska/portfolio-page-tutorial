"use client"
import React from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({onClose, toggle}) => {
    return createPortal(
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8">
                <p className="font-light">Would you like to play the background music?</p>
                <div className="flex items-center justify-center space-x-4">
                    <button onClick={toggle} className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2">Yes</button>
                    <button onClick={onClose} className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded">No</button>
                </div>
            </div>
        </div>,
        document.getElementById("my-modal")
    )
}

export const Sound = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showModal, setShowModal] = useState(false);
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
      } else {
        setShowModal(true);
      }
    }, []);
    

    const toggle = () => {
        const newState = !isPlaying;
        setIsPlaying(newState)
        newState ? audioRef.current.play() : audioRef.current.pause();
        localStorage.setItem("musicConsent", String(newState));
        setShowModal(false);
    }

    return (
        <div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
            {
                showModal && <Modal onClose={() => setShowModal(false)} toggle={toggle}/>
            }
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
