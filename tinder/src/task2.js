import React from 'react';
const Mycomp = ({firstName, lastName, age, education, exp}) => {
    // let {firstName, lastName} = 
    function getEduc (education) {
        return education
    }
    let obj = {
        skills : "HTML, CSS, JS, React"
    }
    let getExp = (exp) => {
    if (exp) {
        return <p>Есть опыт коммерческой разработки</p>
    } else {
        return <p>Нет опыта коммерческой разработки</p>
    }
}
    return (
        <div>
            <p>Привет, мое имя {firstName} {lastName}</p>
            <p>Мне {age} года</p>
            <p>Обучался в {getEduc(education)}</p>
            <p>{getExp(exp)}</p>
            <p>Мои скиллы {obj.skills}</p>
        </div>
    )
}

export default Mycomp