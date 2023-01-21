import prismaClient from "../../prisma";

interface ProductRequest{

    category_id: string;
}


export class ListByCategoryService{

    async execute({ category_id }: ProductRequest){

        const findBycategory = await prismaClient.product.findMany({

            where: {  category_id}

        });
    return findBycategory;
    }
}