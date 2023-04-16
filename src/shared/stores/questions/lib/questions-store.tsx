import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { TQuestion } from "../../../../pages/entry-test/entry-test"

const initialState = {
  answers: [],
  questions: null,
}

export type TAnswer = { uuid: string; answer: string }

export type TQuestionStore = {
  questions: Array<TQuestion> | null
  answers: Array<TAnswer>
}

export type TQuestionAction = {
  addAnswer: (answer: TAnswer) => void
  addQuestions: (data: TQuestion[]) => void
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
