import React from 'react';
import Avatar1 from '../../assets/Avatar1.png';

const Dashboard = () => {
    const contacts = [
        { id: 1, name: 'John', status: 'Available', img: Avatar1 },
        { id: 2, name: 'Mary', status: 'Available', img: Avatar1 },
        { id: 3, name: 'Alexandra', status: 'Available', img: Avatar1 },
        { id: 4, name: 'Rohan', status: 'Available', img: Avatar1 },
        { id: 5, name: 'Hrithik', status: 'Available', img: Avatar1 }
    ];

    return (
        <div className='w-screen flex'>
            <aside className='w-[25%] h-screen bg-secondary'>
                <div className='flex items-center my-8 mx-14'>
                    <div className='border border-primary p-[2px]'><img src={Avatar1} width={50} height={75} alt="User Avatar" /></div>
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Tutorials Dev</h3>
                        <p className='text-lg font-light'>My Account</p>
                    </div>
                </div>
                <hr />
                <div className='mx-14 mt-10'> 
                    <h2 className='text-primary text-lg'>Messages</h2>
                    <div>
                        {contacts.map(({ id, name, status, img }) => (
                            <div key={id} className='flex items-center py-8 border-b border-b-grey-300'>
                                <div className='cursor-pointer flex items-center'>
                                    <img src={img} width={60} height={60} alt={`${name}'s avatar`} />
                                    <div className='ml-6'>
                                        <h3 className='text-lg font-semibold'>{name}</h3>
                                        <p className='text-sm font-light text-grey-600'>{status}</p>
                                    </div> 
                                </div>  
                            </div>  
                        ))} 
                    </div>
                </div>  
            </aside>
            <div></div>
            <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
                <div className='w-[75%] bg-secondary h-[80px] my-14 rounded-full flex items-center px-14 '>
                    <div className='cursor-pointer'>
                        <img src={Avatar1} width={60} height={60} alt="" />
                    </div>
                    <div className='ml-6 mr-auto'>
                        <h3 className='text-lg'>Alexandra</h3>
                        <p className='text-sm font-light text-grey-600'>Online</p>
                    </div>
                    <div className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            <path d="M15 7a2 2 0 0 1 2 2" />
                            <path d="M15 3a6 6 0 0 1 6 6" />
                        </svg>
                    </div>
                </div>
                <div className='h-[75%]  w-full overflow-scroll  shadow-sm'>
                    <div className=' px-14 py-14 whitespace-nowrap'>
                        <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        You can customize the styles as needed.
                        </div>
                        <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                        Feel free to modify the layout 
                        </div>
                        <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        You can customize the styles as needed.
                        </div>
                        <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Feel free to modify the layout 
                        </div>
                        <div className=' max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        You can customize the styles as needed.
                        </div>
                        <div className=' max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                        Feel free to modify the layout 
                        </div>

                    </div>
            
                </div>
           <div className='p-14 w-full flex items-center'>
                 <input placeholder='Type a message...' className='w-[75%] ' inputclassName='p-2 x-4 border-0 shadow-lg rounded-full bg-light focus:ring-0 focus:border-0 outline-none ' /> 

                <div className='ml-4 p-4 cursor-pointer bg-light rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fillg="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                  </svg>
                </div>
                <div className='ml-4 p-4 cursor-pointer bg-light rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M9 12h6"></path>
                 <path d="M12 9v6"></path>
                </svg>

                </div>
            </div> 
            
            </div>
            
            <div className='w-[25%] h-screen bg-light'></div>
        </div>
    );
}

export default Dashboard;
