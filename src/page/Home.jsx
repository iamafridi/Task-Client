import intoImage from '../asset/images/mainImage.jpg'
import Container from '../components/ui/Container'

const Home = () => {
    return (
        <Container>
            <div className='flex my-24 gap-5'>
                <div className='flex-[1] flex flex-col justify-between'>
                    <h1 className='text-7xl font-bold'>Work More <span className='text-primary'>Efficiently</span></h1>
                    <p className='text-3xl font-semibold'>Plan, Track and Organize your daily work
                    <br /> <br /> <span className='text-2xl font-medium italic '>An Application to focus on what matters</span>
                    </p>
                   
                    <div className=' flex gap-4'>
                        <button className='btn btn-primary'>Book A Service</button>
                        <button className='btn btn-outline'>Read Blogs</button>
                    </div>
                    <div className="divider" />
                    <div className='flex  items-center gap-3'>
                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/QNsPWqv/jimmy-fermin-bqe0-J0b26-RQ-unsplash.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/QvfnHy4/philip-martin-5a-GUy-CW-PJw-unsplash.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/PYVw8mk/albert-dera-ILip77-Sbm-OE-unsplash.jpg" />
                                </div>
                            </div>
                            <div className="avatar placeholder">
                                <div className="w-12 bg-neutral text-neutral-content">
                                    <span>+ 99</span>
                                </div>
                            </div>
                        </div>
                        <p>Rated 5 out 5 by our clients</p>
                    </div>
                </div>
                <div  className='flex-[1] h-[600px] rounded-xl overflow-hidden'>
                    <img src={intoImage} alt="introImage" className='w-full h-full object-cover' />
                </div>
            </div>
        </Container>
    )
}

export default Home