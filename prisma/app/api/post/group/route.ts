import prisma from '@/lib/prisma'
export const GET = async ()=> {
    const group = await prisma.post.groupBy({
        by:["authorId"],
        _sum:{  
            likeNum:true,
        },
        _count:{
            id:true,
        },
        _max:{
            likeNum:true,
        }
    });
    
    return new Response(JSON.stringify(group));
}