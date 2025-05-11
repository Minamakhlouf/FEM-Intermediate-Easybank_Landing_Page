import Button from "./Button"

export default function Hero() { 
    return <section className="bg-[hsl(0,0%,98%)] relative lg:grid lg:grid-cols-2 xl:grid-cols-[auto_555px_555px_auto] lg:grid-rows-[auto] overflow-x-clip">
        <div className="relative aspect-[1.33] bg-[url('/bg-intro-mobile.svg')] bg-center  bg-cover mb-[2.56rem] lg:static lg:aspect-auto lg:bg-[url('/bg-intro-desktop.svg')] lg:bg-[position:10%_60%] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 xl:col-start-3 lg:mb-0 xl:col-end-5 lg:bg-[length:85rem]">
            <div className="absolute w-[90%] bg-cover left-[50%] -translate-x-[50%] -bottom-[5%] aspect-[0.81] bg-[url('/image-mockups.png')] lg:w-[34rem] lg:top-[0] lg:right-[0] lg:left-auto lg:bottom-auto lg:translate-x-[0] xl:w-[46rem] xl:translate-x-[16%] xl:-translate-y-[15%]"></div>
        </div>
        <div className="relative z-[5] md:absolute md:inset-0 md:flex md:flex-col md:justify-center lg:relative lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 xl:col-start-2 xl:col-end-3">
            <div className="text-center w-[90%] max-w-[40rem] mx-auto pb-[5.5rem] md:bg-white/95 md:p-[2rem] lg:bg-transparent lg:py-[10.625rem] xl:px-0 xl:text-left xl:max-w-[28rem] xl:mx-0">
                <h1 className="text-[2.5rem] leading-[1] md:text-[3rem] xl:text-[3.5rem]">Next generation digital banking</h1>
                <p className="text-[.9375rem] text-[#9597a5] leading-[1.66] mt-[1rem] mb-[3rem] lg:mt-[1.5rem] lg:mb-[2.25rem]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <Button/>
            </div>
        </div>
    </section>
}