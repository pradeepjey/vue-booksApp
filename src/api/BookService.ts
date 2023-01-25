import { APILINK } from "./api-links";
import httpClient from "./http-client";

class BookService {
    /**
     * To get all the books
     * 
     * @returns promise
     */
    getBookList(): Promise<any> {
        return httpClient.get(APILINK.GET_BOOKS);
    }
  
    /**
     * To get single book
     * 
     * @param id string
     * @returns promise
     */
    getBook(id: any): Promise<any> {
        return httpClient.get(APILINK.GET_BOOK+id);
    }

    /**
     * To get favorutie books
     * 
     * @returns promise
     */
    getFavouriteBookList(): Promise<any> {
        return httpClient.get(APILINK.GET_FAVOURITE_BOOKS);
    }

    /**
     * To set favourite book status
     * 
     * @param bookId string
     * @param status boolean
     * @returns promise
     */
    setFavouriteStatus(bookId: any, status: boolean): Promise<any> {
        let url = APILINK.SET_FAVOURITE_BOOK + bookId + "/" + status; 
        return httpClient.patch(url, {})
    }

    /**
     * Book search
     * @param txt string
     * @returns promise
     */
    searchBook(txt : string){
        let url = APILINK.SEARCH_BOOK;
        let object = { txt: txt };
        return httpClient.post(url, object);
    }
}
  
export default new BookService();