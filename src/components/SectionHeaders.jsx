export default function SectionHeaders(props) {
    return (
        <>
            <h2 className='text-center lg:text-[2.2rem] md:text-[1.8rem] sm:text-[1.4rem] text-[1rem] font-bold mb-1 capitalize'>{props.header}</h2>
            <hr className='header-line w-[90%]'/>
        </>
    )
}