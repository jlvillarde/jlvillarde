import { IoLocationSharp, IoCall, IoDownload } from 'react-icons/io5';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export default function Profile() {
    return (
        <div className="flex py-10 flex-col pt-28 lg:pt-14 items-center">
            <div className="mb-8">
                <img className="rounded-full w-48 h-48 object-cover" src="/portfolio-profile2.jpg" alt="Profile" />
            </div>

            <div className='flex flex-col justify-baseline'>

                <span className="text-3xl font-bold">John Lester Villarde</span>

                <div className='py-2 text-gray-800 dark:text-gray-300'>Fullstack Web Developer</div>

                <div className='flex items-center text-sm font-light'>
                    <IoLocationSharp className='mr-1' />
                    <span>Negros Occidental, Philippines</span>
                </div>

                <div className='flex items-center text-sm font-light'>
                    <IoCall className='mr-1' />
                    <span>+63 930 603 0090</span>
                </div>

                <div className="text-sm w-8/10 text-gray-600 mt-3 dark:text-gray-400 py-2 italic border-gray-300 dark:border-gray-600">
                    "Code is like humor. When you have to explain it, it's bad."
                    <p className="text-right mt-1 text-xs text-gray-500 dark:text-gray-400">
                        – Cory House
                    </p>
                </div>
            </div>


            <div className='flex space-x-1 mt-2 '>
                <a href="/Villarde_John_Lester_Resume.pdf" download className="flex items-center px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600">
                    <IoDownload size={16} className="mr-1.5" />
                    Resume
                </a>
                <a href="https://github.com/jlvillarde" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                    <FaGithub size={20} />
                </a>
                <a href="mailto:villardejohnlester@gmail.com" className="flex items-center p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                    <IoMail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/john-lester-villarde-893916280/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600">
                    <FaLinkedin size={20} />
                </a>
            </div>


        </div >
    )
}