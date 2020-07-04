import { Question, Option } from './classes'

export const QUESTIONS: Question[] = [
    {
        id: 1,
        name: 'Test question number 1?',
        options: [
                    {id: 1, name: 'test option 1', isAnswer: true, isSelected: false},
                    {id: 2, name: 'test option 2', isAnswer: false, isSelected: false},
                    {id: 3, name: 'test option 3', isAnswer: true, isSelected: false},
                    {id: 4, name: 'test option 4', isAnswer: false, isSelected: false}
                ],
        isCorrect: false
    },
    {
        id: 2,
        name: 'Test question number 2?',
        options: [
                    {id: 1, name: 'test option 1', isAnswer: true, isSelected: false},
                    {id: 2, name: 'test option 2', isAnswer: false, isSelected: false},
                    {id: 3, name: 'test option 3', isAnswer: false, isSelected: false},
                    {id: 4, name: 'test option 4', isAnswer: false, isSelected: false}
                ],
        isCorrect: false
    }
]