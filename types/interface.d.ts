interface ProductResponse {
    limit: number
    products: Product[]
    skip: number
    total: number
}

interface Review {
    comment: string,
    date: string,
    rating: number,
    reviewerEmail: string,
    reviewerName: string
}

interface Image {
  url: string
}

// interface Tag {
//     tag: string
// }

interface Product {
  id: number
  title: string
  price: number
  description: string,
  rating: number
  images: Image[]
  thumbnail: string
  tags: string[]
}