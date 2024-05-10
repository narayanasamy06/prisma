import prisma from '@/lib/prisma'
export const GET = async (req:Request)=> {
   const {searchParams} = new URL(req.url);
    // console.log(searchParams);
    const pgnum = +(searchParams.get("pgnum")??0);
    const pgsize = +(searchParams.get("pgsize")??0);
    const posts = await prisma.post.findMany({
        skip:pgnum*pgsize,
        take:pgsize,
    });
   
    
    return new Response(JSON.stringify(posts));
}