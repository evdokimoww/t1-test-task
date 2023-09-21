import React from 'react';

// Реализовать интерфейс заметок
// При инициализации приложения получить с "бекенда" список заметок (thunk.js)
// Заметки должны хранится в сторе redux
// Note - компонент одной заметки
// Заметки могут быть с одинаковыми названиями
// Заметки должны удалятся по клику на Note
// Заметки должны быть отсортированы по алфавиту
// Количество заметок должно быть подсчитано в header
// По кнопке + заметки должны добавляться
// Поле ввода должно очищаться после добавления

export const App = () => {
    return (
        <>
            <div className="header">Notes list, total {'{Total notes must be here}'}</div>
            <div className="container">
                {/* button must add notes */}
                <div className="btn">
                    +
                </div>
                <input
                    type="text"
                    value={'123'}
                    className="textInput"
                    autoFocus
                />
                {/* render notes here */}
            </div>
        </>
    );
};