export default function SectionHeaders(props) {
    return (
        <>
            <h2 className='text-center lg:text-[2.6rem] md:text-[1.3rem] text-[0.9rem] font-bold mb-2 capitalize'>{props.header}</h2>
            <hr className='header-line w-[90%]'/>
        </>
    )
}