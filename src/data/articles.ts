export type Article = {
    title: string; 
    author: string; 
    description: string; 
    icon: string; 
}

export const articles: Article[] = [
    {
        title: "Receive money in any currency with no fees", 
        author: "Claire Robinson", 
        description: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …", 
        icon: "/assets/image-currency.jpg"        
    }, 
    {
        title: "Treat yourself without worrying about money", 
        author: "Wilson Hutton", 
        description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …", 
        icon: "/assets/image-restaurant.jpg"       
    }, 
    {
        title: "Take your Easybank card wherever you go", 
        author: "Wilson Hutton", 
        description: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …", 
        icon: "/assets/image-plane.jpg"         
    }, 
    {
        title: "Our invite-only Beta accounts are now live!", 
        author: "Claire Robinson", 
        description: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...", 
        icon: "/assets/image-confetti.jpg"          
    }
]