import { create } from 'zustand'

const appStore = (set) => ({
    title:[]
})

export const useAppStore = create(appStore);