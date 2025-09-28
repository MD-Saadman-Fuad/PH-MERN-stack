import React from 'react';
import vector1 from '../../assets/bg/vector1.png';


const Banner = ({ progress, resolved }) => {
    return (
        <div className='w-full shadow-md bg-gray'>
            <div className='max-w-[1440px] mx-auto flex-row md:flex justify-center items-center p-4 bg-gray text-black gap-8'>
                <div className='md:w-[700px] md:h-[250px] items-center flex justify-center relative'
                    style={{
                        borderRadius: '8px',
                        background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)'
                    }}
                >
                    <div className='flex justify-between'>
                        <div
                            className='absolute inset-0 rounded-lg'

                            style={{
                                borderRadius: '8px',
                                backgroundImage: `url(${vector1})`,
                                backgroundSize: '50%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '1px calc(100%)',
                                opacity: 1

                            }}
                        ></div>
                        
                        <div className='absolute inset-0 rounded-lg'
                            style={{
                                borderRadius: '8px',
                                backgroundImage: `url(${vector1})`,
                                backgroundSize: '50%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: '1px 1px',
                                opacity: 1,
                                transform: 'scaleX(-1)'
                            }}
                        ></div>
                    </div>
                    <div className='text-center font-bold text-white relative  z-10 p-4' >
                        <h1 className='text-2xl'>In - Progress</h1>
                        <h1 className='text-5xl'>{progress}</h1>
                    </div>

                </div>
                <div className='md:w-[700px] md:h-[250px] items-center flex justify-center relative'
                    style={{
                        borderRadius: '8px',
                        background: 'linear-gradient(90.00deg, rgba(84, 207, 103.68001556396484, 1), rgba(0, 130, 122.20001220703125, 1) 100%)'
                    }}
                >
                    <div
                        className='absolute inset-0 rounded-lg'

                        style={{
                            borderRadius: '8px',
                            backgroundImage: `url(${vector1})`,
                            backgroundSize: '50%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '1px calc(100% - 1px)',
                            opacity: 1
                        }}
                    ></div>
                    <div
                        className='absolute inset-0 rounded-lg'

                        style={{
                            borderRadius: '8px',
                            backgroundImage: `url(${vector1})`,
                            backgroundSize: '55%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '5px 1px',
                            opacity: 1,
                            transform: 'scaleX(-1)'
                        }}
                    ></div>
                    <div className='text-center font-bold text-white relative z-10 p-4' >
                        <h1 className='text-2xl'>Resolved</h1>
                        <h1 className='text-5xl'>{resolved}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;