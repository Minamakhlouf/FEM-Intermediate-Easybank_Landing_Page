export type Reason = {
    title: string; 
    description: string; 
    icon: string; 
}

export const reasons: Reason[] = [
    {
        title: "Online Banking", 
        description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.", 
        icon: "/assets/icon-online.svg"        
    }, 
    {
        title: "Simple Budgeting", 
        description: "See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.", 
        icon: "/assets/icon-budgeting.svg"       
    }, 
    {
        title: "Fast Onboarding", 
        description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.", 
        icon: "/assets/icon-onboarding.svg"         
    }, 
    {
        title: "Open API", 
        description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.", 
        icon: "/assets/icon-api.svg"          
    }
]