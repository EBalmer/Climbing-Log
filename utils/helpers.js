const gradeProps = [
    { grade: 'V1', color: '#a6cee3' },
    { grade: 'V2', color: '#1f78b4' },
    { grade: 'V3', color: '#b2df8a' },
    { grade: 'V4', color: '#33a02c' },
    { grade: 'V5', color: '#fb9a99' },
    { grade: 'V6', color: '#e31a1c' },
    { grade: 'V7', color: '#fdbf6f' },
    { grade: 'V8', color: '#ff7f00' },
    { grade: 'V9', color: '#cab2d6' },
    { grade: 'V10', color: '#6a3d9a' }]

export function countGrades(routes) {
    let summedGradeList = []
    gradeProps.forEach(gradeProp => {
        let temp = routes.filter(route => route === gradeProp.grade)
        summedGradeList.push({ y: temp.length, x: gradeProp.grade, fill: gradeProp.color})
    })
    summedGradeList = summedGradeList.filter(gradeCount => gradeCount.y !== 0)
    return summedGradeList
}

export function maxGrade(routes) {
    max = null
    gradeProps.forEach(gradeProp => {
        if (routes.includes(gradeProp.grade)) {
            max = gradeProp.grade
        }
    })
    return max
}