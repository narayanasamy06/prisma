import prisma from '@/lib/prisma'
export const GET = async ()=> {
   const order = await prisma.post.findMany({
    orderBy:{
        likeNum:"asc"
    }
   });
    
    return new Response(JSON.stringify(order));
}