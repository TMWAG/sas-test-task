import { defineStore } from 'pinia'

export const usePublicationsStore = defineStore('publications', {
  state: () => ({
    posts: [] as IPost[],
  }),
  actions: {
    async getPosts() {
      try {
        const postsResponse = await fetch(
          'https://dummyjson.com/posts?limit=5',
        ).then<IPostResponse>(res => res.json())
        this.posts = postsResponse.posts
      } catch (e) {
        console.log(e)
      }
    },
    like(postId: number) {
      const postIdx = this.posts.findIndex(p => p.id === postId)
      if (this.posts[postIdx].userReaction === 'liked') {
        this.posts[postIdx].reactions.likes--
        this.posts[postIdx].userReaction = undefined
        return
      }
      if (this.posts[postIdx].userReaction === 'disliked') {
        this.posts[postIdx].reactions.dislikes--
        this.posts[postIdx].reactions.likes++
        this.posts[postIdx].userReaction = 'liked'
        return
      }
      this.posts[postIdx].reactions.likes++
      this.posts[postIdx].userReaction = 'liked'
    },
    dislike(postId: number) {
      const postIdx = this.posts.findIndex(p => p.id === postId)
      if (this.posts[postIdx].userReaction === 'disliked') {
        this.posts[postIdx].reactions.dislikes--
        this.posts[postIdx].userReaction = undefined;
        return
      }
      if (this.posts[postIdx].userReaction === 'liked') {
        this.posts[postIdx].reactions.likes--
        this.posts[postIdx].reactions.dislikes++
        this.posts[postIdx].userReaction = 'disliked'
        return
      }
      this.posts[postIdx].reactions.dislikes++
      this.posts[postIdx].userReaction = 'disliked'
    },
  },
})
