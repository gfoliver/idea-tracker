import React from 'react';
import { Dialog } from '@headlessui/react';

export interface IModal {
    open(): void;
}

const Modal = React.forwardRef<IModal>((props, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const open = () => setIsOpen(true);

    React.useImperativeHandle(ref, () => ({ open }));

    return (
        <Dialog 
            open={isOpen} 
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <Dialog.Overlay className="fixed inset-0 flex items-center justify-center">
                <Dialog.Backdrop className="fixed inset-0 bg-black opacity-60" />
                <Dialog.Panel className="bg-background px-8 p-10 w-full min-h-screen md:max-w-xl md:min-h-0 md:rounded-lg">
                    <h2 className="text-4xl text-white font-bold mb-8">New Idea</h2>
                    <div className="mb-4 w-full">
                        <label htmlFor="new-idea-name" className='block text-white font-bold mb-2'>Name</label>
                        <input type="text" className='w-full p-4 leading-none rounded bg-background-darker text-white' id="new-idea-name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="new-idea-description" className='block text-white font-bold mb-2'>Brief description</label>
                        <textarea id="new-idea-description" className='w-full p-4 rounded bg-background-darker text-white resize-y' />
                    </div>
                    <button className='bg-primary p-4 w-full rounded font-bold text-white' onClick={() => setIsOpen(false)}>Save</button>
                    <button className='bg-background mt-6 w-full rounded font-bold text-white' onClick={() => setIsOpen(false)}>Close</button>
                </Dialog.Panel>
            </Dialog.Overlay>
        </Dialog>
    );
});

export default Modal;