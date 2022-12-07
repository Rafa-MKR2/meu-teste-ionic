export interface NewsApiType{
    status: number
    totalResults: number
    articles: articles[]
}


interface articles{
    author:string
    content:string
    description:string
    publishedAt :string
    source :{id: string, name: string}
    title:string
    url:string
     urlToImage:string
}