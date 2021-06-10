import React from 'react';
const Mycomp = (props) => {
    function getEduc (education) {
        return education
    }
    let obj = {
        skills : "HTML, CSS, JS, React"
    }
    let getExp = (exp) => {
    let experience = true;
    if (experience && props.exp) {
        return <p>Есть опыт коммерческой разработки</p>
    } else {
        return <p>Нет опыта коммерческой разработки</p>
    }
}
    return (
        <div>
            <p>Привет, мое имя {props.firstName} {props.lastName}</p>
            <p>Мне {props.age} года</p>
            <p>Обучался в {getEduc(props.education)}</p>
            <p>{getExp(props.exp)}</p>
            <p>Мои скиллы {obj.skills}</p>
        </div>
    )
}

export default Mycomp