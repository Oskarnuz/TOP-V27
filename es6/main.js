// Dados los siguientes arreglos de objetos completas la misión:

  const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
  ]
  
  const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]
  
  const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]

  courses.forEach(function(course) {
    console.log(`- ${course.title}`)
    enrollments.forEach(function(enrollment) {
        if(course._id === enrollment.course_id) {
            students.forEach(function(student) {
                if(student._id === enrollment.student_id) {
                    console.log(`* ${student.name}`)
                }
            })
        }
    })
  })
    
   
  
// - JavaScript I
//   * Pedro Perez
// - HTML y CSS I
//   * Pedro Perez
//   * Maria Gomez
console.log("__________________________")

students.forEach(function(student, index) {
    console.log(`- ${student.name}`)
    enrollments.forEach(function(enrollment, index) {
        if(student._id === enrollment.student_id) {
            courses.forEach(function(course, index) {
                if(course._id === enrollment.course_id) {
                    console.log(`* ${course.title}`)
                }
            })
        }
    })
  })

// - Pedro Perez
//   * JavaScript I
//   * HTML y CSS I
// - Maria Gomez
//   * HTML y CSS I


