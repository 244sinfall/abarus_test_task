import {TableItem} from "./tableData";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum FilterType {
    id,
    title,
    body
}

export interface TableContentState {
    data: TableItem[],
    displayedData: TableItem[],
    currentPage: number,
    maxPage: number,
    searchString: string
    filterBy: FilterType
    filterDescending: boolean // От меньшего к большему при true, от большего к меньшему при false
}
const maxRecordsForPage = 10
const initialState: TableContentState = {
    data: [],
    displayedData: [],
    currentPage: 1,
    maxPage: 1,
    searchString: "",
    filterBy: FilterType.id,
    filterDescending: false
}


export const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setContent: (state, action: PayloadAction<TableItem[]>) => {
            state.data = action.payload
            state.displayedData = action.payload
            state.maxPage = Math.ceil(action.payload.length / maxRecordsForPage)
        },
        setSearchString: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload
            state.currentPage = 1
            let searched = 0
            state.displayedData = state.data.filter((val) => {
                if(val.body.includes(action.payload) ||
                    val.title.includes(action.payload) ||
                    String(val.id).includes(action.payload)) {
                        searched++
                        return true
                    }
                    return false
            })
            state.maxPage = Math.ceil(searched / maxRecordsForPage)
        },
        setFilterType: (state, action: PayloadAction<FilterType>) => {
            state.filterBy = action.payload
            state.currentPage = 1
            switch (action.payload) {
                case FilterType.id:
                    state.displayedData.sort((first, second) => {
                        if(first.id > second.id) return -1
                        return 1
                    })
                    break
                case FilterType.title:
                    state.displayedData.sort((first, second) => {
                        if(first.title > second.title) return -1
                        return 1
                    })
                    break
                case FilterType.body:
                    state.displayedData.sort((first, second) => {
                        if(first.body > second.body) return -1
                        return 1
                    })
                    break
                default:
                    break
            }
        },
        inverseSortingOrder: (state) => {
            state.filterDescending = !state.filterDescending
            state.currentPage = 1
            state.displayedData.reverse()
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    }
})

export const { setSearchString, inverseSortingOrder, setFilterType, setContent, setPage } = contentSlice.actions;