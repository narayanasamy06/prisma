import prisma from '@/lib/prisma'
export const GET = async ()=> {
    // const users = await prisma.user.findMany({ 
    //    where:{
        
    //     id:{
    //         not:{
    //             gt:4
    //         }
    //     },
    //     AND:[
    //        { email:{
    //             contains:"io"
    //         }},
    //         {
    //          role:"USER" ,  
    //         }
    //     ]

    //    }
    // });
    const users = await prisma.user.findMany({
        where:{
            posts:{
                every:{
                    published:true,
                }
            },
            
        },
       
    });
    
    return new Response(JSON.stringify(users));
}