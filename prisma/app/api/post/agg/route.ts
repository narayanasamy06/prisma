import prisma from '@/lib/prisma'
export const GET = async ()=> {
    const aggre = await prisma.post.aggregate({
        _sum:{
            likeNum:true,
        },
        _min:{
            likeNum:true,
        }
    });
    
    return new Response(JSON.stringify(aggre));
}