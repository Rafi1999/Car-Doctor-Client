import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img className='rounded-lg shadow-2xl w-3/4' src={person} />
    <img className='w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white' src={parts} />
    </div>
    <div className='lg:w-1/2 space-y-3 p-4'>
    <h3 className='text-3xl text-orange-600 font-semibold'>About Us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quisquam cum vero autem hic minima, laudantium ducimus at quia officia, minus sit nam alias, optio itaque rem. Eius, laudantium qui?</p>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit quisquam cum vero autem hic minima, laudantium ducimus at quia officia, minus sit nam alias, optio itaque rem.</p>
      <button className="btn bg-orange-600 border-none">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;