import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    comments: [] as IComment[],
  }),
  actions: {
    /**
     * Gets comments by post id from API and stores them if there are no comments associated with that post id
     * @param id Number
     */
    async getCommentsByPostId(id: number) {
      if (this.comments.find(c => c.postId === id)) {
        return
      }
      try {
        const commentsResponse = await fetch(
          `https://dummyjson.com/posts/${id}/comments`,
        ).then<ICommentResponse>(res => res.json())
        this.comments = [...this.comments, ...commentsResponse.comments]
      } catch (e) {
        console.error(e)
      }
    },
    /**
     * Deletes comment by provided id from store
     * @param id Number
     */
    deleteCommentById(id: number) {
      if (!this.comments.find(c => c.id === id)) {
        console.error(`Cannot find comment with id: ${id}`)
        return
      }
      this.comments = this.comments.filter(c => c.id !== id)
    },
  },
})
