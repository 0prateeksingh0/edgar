import componentImg from '../assets/Component.jpg';

export default function AboutSection() {
    return (
      <section className="py-16 px-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Collage */}
          <div className="w-full md:w-1/2">
          <img src={componentImg} alt="About Edgar Interactive" className="rounded-xl" />

          </div>
  
          {/* About Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">About Edgar Interactive</h2>
            <h4 className="text-blue-500 font-semibold">Transforming Transactions - Empowering Businesses</h4>
            <p className="text-gray-600">
              Edgar Interactive is one of the largest providers of technology-enabled solutions in India for over 20 years.
              Edgar interactive’s cutting-edge smart devices coupled with robust software enable organizations to manage their
              last-mile transactions seamlessly and help in streamlining processes, assess data management, identify growth trends,
              increase accountability and profitability.
            </p>
          </div>
        </div>
      </section>
    );
  }
  