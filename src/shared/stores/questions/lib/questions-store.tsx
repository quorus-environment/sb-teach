import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { TQuestion } from "../../../../pages/entry-test/entry-test"

const initialState = {
  answers: [],
  questions: null,
}

export type TQuestionStore = {
  questions: Array<TQuestion> | null
  answers: Array<number | null>
}

export type TQuestionAction = {
  addAnswer: (answer: number | null) => void
  clearStorage: () => void
}

export const useQuestionStore = create<TQuestionStore & TQuestionAction>()(
  devtools((set) => ({
    ...initialState,
    addAnswer: (answer) =>
      set((state) => ({ answers: [...state.answers, answer] })),
    clearStorage: () => set(() => ({ ...initialState })),
    addQuestions: (data: TQuestion[]) => {
      set(() => ({ questions: data }))
    },
  })),
)
