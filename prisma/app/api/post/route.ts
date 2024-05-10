import prisma from '@/lib/prisma'
export const GET = async ()=> {
    // const posts = await prisma.post.findMany();
    const posts = await prisma.post.findMany({
        where:{
            author:{
                is:{
                    id:2
                }
            },
            
        },
       
    });
    
    return new Response(JSON.stringify(posts));
}