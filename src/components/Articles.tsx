import { articles, Article } from "../data/articles"

export default function Articles() {
    return (
        <section className={`bg-[hsl(0,0%,98%)]`}>
            <div className="py-[5.5rem] mx-auto max-w-[1110px]">
                <h2 className={`text-[2rem] text-center mb-[2rem] tracking-[-.57px] lg:text-[2.5rem] lg:text-left lg:mb-[2.5rem]`}>Latest Articles</h2>
                <div className={`w-[87.2%] mx-auto flex flex-col gap-[3rem] md:grid md:grid-cols-2 xl:grid-cols-4 lg:w-full xl:gap-[2rem]`}>
                    {articles.map((article: Article, index) => {
                        return <div key={index}>
                            <div className="aspect-[1.275]"><img className="w-full h-full object-cover" src={article.icon} alt={article.title} /></div>
                            <div className={`px-[2rem] py-[1.5rem] bg-[white]`}>
                                <p className={`text-[.625rem] leading-[1.8] mb-[.5rem]`}>By: {article.author}</p>
                                <h3 className={`text-[1rem] hover:text-[#30c88f] transition-colors cursor-pointer leading-[1.25rem] tracking-[-.29.px] text-[#2d314d] mb-[.5rem]`}>{article.title}</h3>
                                <p className={`text-[#9597a5]`}>{article.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}