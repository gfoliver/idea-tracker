import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import icon from '../assets/icon.svg';
import Idea from '../interfaces/Idea';
import Modal, { IModalRef } from './Modal';

const Dashboard: React.FC = () => {
    const modalRef = React.useRef<IModalRef>(null);
    const [ideas, setIdeas] = useLocalStorageState<Idea[]>('ideas', { defaultValue: [] });
    const [parent] = useAutoAnimate();

    const removeIdea = (index: number) => {
        let i = ideas;
        i.splice(index, 1);
        setIdeas(i);
    }

    return (
        <div className="flex flex-col min-h-screen Dashboard">
            <Modal ref={modalRef} onSubmit={idea => setIdeas([...ideas, idea])} />
            <header>
                <div className="container py-12 mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="flex items-center text-5xl font-bold">
                            <img src={icon} alt="Light Bulb" className='mr-2' />
                            IdeaTracker
                        </h1>
                        <button 
                            className='px-12 py-5 text-2xl font-bold rounded-lg drop-shadow-md bg-background-lighter text-primary'
                            onClick={() => modalRef.current?.open()}
                        >
                            I've had an idea!
                        </button>
                    </div>
                </div>
            </header>
            <main className='flex-grow bg-background-darker'>
                <div className="container py-14 mx-auto">
                    <div ref={parent} className="grid grid-cols-4 gap-4">
                        {ideas.map((idea, index) => (
                            <div key={index} className="relative p-6 rounded-lg drop-shadow-sm idea bg-background">
                                <button 
                                    className="absolute top-4 right-4 font-bold text-background-darker"
                                    onClick={() => removeIdea(index)}
                                >
                                    x
                                </button>
                                <h2 className="mb-4 font-bold">{idea.name}</h2>
                                <p className="mb-6">{idea.description}</p>
                                <button className='p-3 font-bold leading-none rounded bg-primary'>
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