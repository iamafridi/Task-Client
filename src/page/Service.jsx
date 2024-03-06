
import Container from '../components/ui/Container'
import useAxios from '../hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import ServiceCard from '../components/ServiceCard'
import Header from '../components/ui/Header'
import { useState } from 'react'
import { capitalizeWords } from '../utils/Capitalize'

const categories = [
    "Enterprise", "Professional", "Personal",
]

const Service = () => {
    const axios = useAxios();
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('')
    const [page, setPage] = useState(1);

    const getServices = async () => {
        const res = await axios.get(`/services?sortField=price&sortOrder=${price}&category=${category}`);
        return res;
    }


    const { data: services, isLoading, isError, error } = useQuery({
        queryKey: ['service', price, category],
        queryFn: getServices,
    })
    console.log(services);


    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    if (isError) {
        return <p>Something Went Wrong: {error}</p>
    }


    return (
        <>
            <Container className='mt-10'>
                <Container className="mt-10">
                    <Header title="Services">
                        Services Here
                    </Header>
                </Container>
            </Container>

            <Container>
                <div className='my-12 flex justify-end items-center border-2 border-primary rounded-2xl p-5 gap-5'>
                    <h1 className='flex-1 text-xl font-semibold'>
                        Check Our Service Here
                    </h1>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Category</span>
                        </label>
                        <select className='input input-bordered' onChange={(e) => setCategory(e.target.value)}>
                            <option disabled selected>
                                choose One
                            </option>
                            {categories.map((item) => (<option key={item} value={item}>{capitalizeWords(item)}</option>))}
                        </select>
                    </div>
                    <div className='form-control'>
                        <label className='label'>
                            <span className='label-text'>Price</span>
                        </label>

                        <select className='input input-bordered' onChange={(e) => setPrice(e.target.value)}>
                            <option disabled selected>
                                Choose One
                            </option>
                            <option value="asc">From Low to High</option>
                            <option value="desc">From High to Low</option>

                        </select>
                    </div>

                </div>

            </Container>

            <Container className="mb-64">
                {isLoading ? <p>Loading...</p> : <div className='grid  mt-24 grid-cols-3 gap-10'>
                    {/* Services Card Here  */}
                    {
                        services?.data?.result?.map((item) => (
                            <ServiceCard key={item?.id} service={item} />
                        ))
                    }
                </div>}
            </Container>
            <Container className="mb-64 flex justify-end">
                <div className="join border-2 border-primary ">
                    <button onClick={handlePrevious} className="join-item btn">«</button>
                    <button onClick={() => setPage(1)} className="join-item btn">1</button>
                    <button onClick={() => setPage(2)} className="join-item btn ">2</button>
                    <button onClick={() => setPage(3)} className="join-item btn">3</button>
                    <button onClick={() => setPage(4)} className="join-item btn">4</button>
                    <button onClick={handleNext} className="join-item btn">»</button>
                </div>
            </Container>
        </>
    )
}

export default Service