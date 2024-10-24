import { defineStore } from 'pinia'

export const usePublicationsStore = defineStore('publications', {
  state: () => ({
    posts: [] as IPost[],
  }),
  actions: {
    async getPosts() {
      if (this.posts.length === 5) {
        return
      } 
      try {
        const postsResponse = await fetch(
          'https://dummyjson.com/posts?limit=5',
        ).then<IPostResponse>(res => res.json())
        this.posts = postsResponse.posts
      } catch (e) {
        console.error(e)
      }
    },
    /**
     * gets post and puts it in store if it not already present in store
    */
    async getPostById(id: number) {
      if (this.posts.find(p => p.id === id)) {
        return
      }
      try {
        const postResponse = await fetch(
          `https://dummyjson.com/posts/${id}`
        ).then<IPost>(res => res.json())
        this.posts.push(postResponse)
      } catch (e) {
        console.error(e)
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
