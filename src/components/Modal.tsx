import React from 'react';
import { Dialog } from '@headlessui/react';
import { useForm } from 'react-hook-form';
import Idea from '../interfaces/Idea';

export interface IModalRef {
    open(): void;
}

interface IModalProps {
    onSubmit(data: Idea): void;
}

const Modal = React.forwardRef<IModalRef, IModalProps>(({ onSubmit }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { handleSubmit, register, reset } = useForm<Idea>();

    const open = () => setIsOpen(true);

    React.useImperativeHandle(ref, () => ({ open }));

    const handle = (data: Idea) => {
        onSubmit(data);
        setIsOpen(false);
        reset();
    }

    return (
        <Dialog 
            open={isOpen} 
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <Dialog.Overlay className="flex fixed inset-0 justify-center items-center">
                <Dialog.Backdrop className="fixed inset-0 bg-black opacity-60" />
                <Dialog.Panel className="p-10 px-8 max-w-full rounded-lg bg-background" style={{minWidth: 560}}>
                    <form onSubmit={handleSubmit(handle)}>
                        <h2 className="mb-8 text-4xl font-bold text-white">New Idea</h2>
                        <div className="mb-4 w-full">
                            <label htmlFor="new-idea-name" className='block mb-2 font-bold text-white'>Name</label>
                            <input 
                                type="text" 
                                className='p-4 w-full leading-none text-white rounded bg-background-darker' 
                                id="new-idea-name"
                                {...register('name')}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="new-idea-description" className='block mb-2 font-bold text-white'>Brief description</label>
                            <textarea 
                                id="new-idea-description" 
                                className='p-4 w-full text-white rounded resize-y bg-background-darker' 
                                {...register('description')}
                            />
                        </div>
                        <button className='p-4 w-full font-bold text-white rounded bg-primary' type='submit'>Save</button>
                    </form>
                </Dialog.Panel>
            </Dialog.Overlay>
        </Dialog>
    );
});

export default Modal;