import heroBg from '../assets/hero1.png';

export default function Hero() {
    return (
        <section className="relative h-[600px] flex items-center">
            {/* Background Image */}
            <img 
                src={heroBg} 
                alt="Hero Background" 
                className="absolute inset-0 w-full h-full object-cover z-0" 
            />

            {/* Light Black Overlay + Content */}
            <div className="absolute inset-0 bg-opacity-30 z-10 flex flex-col justify-center px-6 md:px-20">
                <h1 className="text-[40px] md:text-[60px] font-semibold leading-[50px] md:leading-[70px] text-white font-poppins max-w-4xl">
                    The smartest way to manage your <span className="text-[#1CC1F2]">last mile</span> transactions
                </h1>
                <p className="text-[16px] text-gray-300 font-poppins font-medium mt-4 max-w-xl">
                    Comprehensive solution combining the robust handheld terminals with intelligent software
                </p>
            </div>
        </section>
    );
}
