interface IPost {
  id: number,
  title: string,
  body: string,
  reactions: {
    likes: number,
    dislikes: number,
  },
  views: number,
  userId: number,
  tags: string[],
  userReaction?: 'liked' | 'disliked'
}

interface IPostResponse {
  posts: iPost[],
  total: number,
  skip: number,
  limit: number,
}