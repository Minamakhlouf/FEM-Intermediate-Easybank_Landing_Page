import { Reason, reasons} from "../data/reasons"; 

export default function Reasons() {
    return (
        <section className={`bg-[#F4F5F7]`}>
            <div className={`text-center w-[87.2%] mx-auto py-[4rem] max-w-[1110px]`}>
                <div className="lg:text-left lg:max-w-[39rem]">
                    <h2 className={`text-[2rem] tracking-[-.57px] mb-[.875rem] leading-[1.1] lg:mb-[1.125rem]`}>Why choose Easybank?</h2>
                    <p className={`mb-[3.375rem text-[#9597A5] text-[.9375rem] leading-[1.66] tracking-[-.23px] mb-[3.5rem] lg:text-[1.125rem] lg:mb-[4.5rem]`}>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>
                <div className={`flex flex-col gap-[2rem] md:grid md:grid-cols-2 xl:grid-cols-4`}>
                    {reasons.map((reason: Reason, index) => {
                        return <div key={index} className={`text-center lg:text-left`}>
                            <img src={reason.icon} alt={reason.title} className={`mx-auto lg:mx-0`}/>
                            <h3 className={`mt-[1.5rem] mb-[1rem] text-[1.25rem] leading-[1.4] tracking-[-.36px]`}>{reason.title}</h3>
                            <p className={`text-[#9597A5] text-[.9375rem] leading-[1.66] tracking-[-.23px]`}>{reason.description}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}