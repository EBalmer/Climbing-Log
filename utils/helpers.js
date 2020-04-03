export function test() {
    return 'Test Success'
}

const grades = ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10']

export function countGrades(routes) {
    let summedGradeList = []
    grades.forEach(grade => {
        let temp = routes.filter(route => route === grade)
        summedGradeList.push({y: temp.length, x: grade})
    })
    summedGradeList = summedGradeList.filter(gradeCount => gradeCount.y !== 0)
    return summedGradeList
}
