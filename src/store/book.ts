import { defineStore } from 'pinia'
import Book from './../types/Book'
import BookService from '../api/BookService'
import { toRaw } from 'vue'

export const useBookStore = defineStore('book', {
    state: () => {
      return {
        bookList: [] as Book[],
        favouriteBookList: [] as Book[],
        currentBook: {} as Book,
        currentPage:  "" as String,
        predictedValue: "" as String,
        typedValue: "" as String
      }
    },
    getters: {
        getBookList: (state) => toRaw(state.bookList),
        getFavouriteBookList: (state) => state.favouriteBookList,
        getCurrentBook: (state) => state.currentBook,
        getCurrentPage: (state) => state.currentPage,
        getPredictedValue: (state) => state.predictedValue,
        getTypedValue: (state) => state.typedValue
    },
    actions: {
        async getBooksFromAPI() {
            return this.bookList = await BookService.getBookList()
        },
        async getFavouriteBooksFromAPI() {
            return this.favouriteBookList = await BookService.getFavouriteBookList()
        },
        async getBookFromAPI(id: string) {
            return this.currentBook = await BookService.getBook(id)
        },
        async setBookFromAPI(id: string, status: boolean) {
            return await BookService.setFavouriteStatus(id, status)
        },
        async searchBookFromAPI(txt: string) {
            return await BookService.searchBook(txt)
        },
        setPredictedValue(value: string) {
            return this.predictedValue = value
        },
        setTypedValue(value: string) {
            return this.typedValue = value
        },
        setSearchResult(book: any) {
            return this.bookList = [book]
        },
        setCurrentPage(page: any) {
            return this.currentPage = page
        }
    }
})
