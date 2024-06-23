import { Button } from 'flowbite-react';
import React, { ReactNode } from 'react';

interface ConditionalButton {
    showButton: true; // A flag indicating if the button should be shown
    buttonTitle: string|ReactNode; // Title for the button
    buttonHandler: (data?: unknown) => void; // Handler function for the button click
    buttonClassName?:string,// className for the button
    children: React.ReactNode;
    title: string | undefined;
}

interface ConditionalNoButton {
    showButton?: false; // Optional flag indicating if the button should not be shown
    title: string | undefined;
    children: React.ReactNode;
}

type ConditionalInterface = ConditionalButton | ConditionalNoButton;

const PageWrapperWithButton: React.FC<ConditionalInterface> = ({ title, children, ...props }) => {
    if ('showButton' in props && props.showButton) {
        // ConditionalButton branch
        const { buttonTitle, buttonHandler,buttonClassName } = props as ConditionalButton;
        return (
            <div className='px-5 bg-gray-100 h-full'>
                <div className='flex justify-between items-center pt-3 pb-5'>
                    <p className='text-gray-500 text-xl font-medium'>{title}</p>
                    <Button className={buttonClassName} color={"#fe5e37"} onClick={buttonHandler}>{buttonTitle}</Button>
                </div>
                <div className='w-full h-full'>{children}</div>
            </div>
        );
    } else {
        // ConditionalNoButton branch
        return (
            <div className='px-5 bg-gray-100 h-full'>
                <p className='text-gray-500 text-xl font-medium text-left pt-3 pb-5'>{title}</p>
                <div className='w-full h-full'>{children}</div>
            </div>
        );
    }
}

export default PageWrapperWithButton;
