import { defineStore, type _GettersTree } from 'pinia'
import sanity from '../sanity-client'

interface IPost {
  _id: string
  _createdAt: string
  author: IAuthor
}

interface IAuthor {
  name: string
}

interface ICmsState {
  isMenuActive: boolean
  posts: IPost[]
  totalPosts: number
  authors: IAuthor[]
  sortedPosts?: IPost[]
}

interface ICmsActions {
  fetchPosts: (limit?: number) => Promise<void>
  loadMorePosts: (limit?: number) => Promise<void>
  addNewPost: (lpost: IPost) => void
  updatePost: (lpost: IPost) => void
  removePost: (id: string) => void
  fetchAuthors: () => Promise<void>
}

export const useCmsStore = defineStore<'CmsStore', ICmsState, _GettersTree<ICmsState>, ICmsActions>(
  'CmsStore',
  {
    state: () => ({
      isMenuActive: false,
      posts: [],
      totalPosts: 0,
      authors: [],
    }),
    getters: {
      sortedPosts: (state: ICmsState) =>
        state.posts?.sort(
          (a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime(),
        ),
    },
    actions: {
      async fetchPosts(limit?: number) {
        const query = `*[_type == "post"] { ..., author-> } | order(_createdAt desc) ${limit ? `[0...${limit}]` : ''}`
        this.posts = await sanity.fetch(query)

        const count_query = `count(*[_type == "post"])`
        this.totalPosts = await sanity.fetch(count_query)
      },
      async loadMorePosts(limit = 10) {
        const query = `*[_type == "post"] { ..., author-> } | order(_createdAt desc) [${this.posts.length}...${this.posts.length + limit}]`
        this.posts = [...this.posts, ...(await sanity.fetch(query))]
      },
      addNewPost(post: IPost) {
        this.posts = [...this.posts, post]
      },
      updatePost(post: IPost) {
        this.posts = this.posts.map((p) => (p._id === post._id ? post : p))
      },
      removePost(id: string) {
        this.posts = this.posts.filter((p) => p._id !== id)
      },
      async fetchAuthors() {
        const query = `*[_type == "author"] | order(full_name)`
        this.authors = await sanity.fetch(query)
      },
    },
  },
)
