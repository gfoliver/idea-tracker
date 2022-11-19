import React from 'react';

import icon from '../assets/icon.svg';
import Modal, { IModal } from './Modal';

const Dashboard: React.FC = () => {
    const modalRef = React.useRef<IModal>(null);

    return (
        <div className="Dashboard min-h-screen flex flex-col">
            <Modal ref={modalRef} />
            <header>
                <div className="container mx-auto py-12">
                    <div className="flex justify-between items-center">
                        <h1 className="text-5xl font-bold flex items-center">
                            <img src={icon} alt="Light Bulb" className='mr-2' />
                            IdeaTracker
                        </h1>
                        <button 
                            className='bg-background-lighter py-5 px-12 rounded-lg drop-shadow-md text-primary font-bold text-2xl'
                            onClick={() => modalRef.current?.open()}
                        >
                            I've had an idea!
                        </button>
                    </div>
                </div>
            </header>
            <main className='bg-background-darker flex-grow'>
                <div className="container mx-auto py-14">
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((idea) => (
                            <div className="idea p-6 bg-background rounded-lg drop-shadow-sm">
                                <h2 className="font-bold mb-4">Idea {idea}</h2>
                                <p className="mb-6">Brief description of the idea...</p>
                                <button className='bg-primary p-3 rounded leading-none font-bold'>
                                    Start this idea
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;