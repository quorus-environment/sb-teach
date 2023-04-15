import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { TQuestion } from "../../../../pages/entry-test/entry-test"

const initialState = {
  answers: [],
  questions: [
    {
      id: "1",
      type: "React",
      question: "Бла-бла",
      answers: [1, 2, 3, 4],
      answer: 2,
    },
    { id: "2", type: "Js", question: "Ы-Ы", answers: [1, 2, 3, 4], answer: 1 },
    {
      id: "3",
      type: "React",
      question: "и-и",
      answers: [1, 2, 3, 4],
      answer: 3,
    },
  ],
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
  })),
)
