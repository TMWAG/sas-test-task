interface IPost {
  id: number
  title: string
  body: string
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
  tags: string[]
  userReaction?: 'liked' | 'disliked'
}

interface IPostResponse {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}

interface IComment {
  id: number
  body: string
  postId: number
  likes: number
  user: {
    id: number
    username: string
    fullName: string
  }
}

interface ICommentResponse {
  comments: IComment[]
  total: number
  skip: number
  limit: number
}
