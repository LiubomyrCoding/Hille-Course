function Student(firstName, lastName, yearBorn, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearBorn = yearBorn;
  this.grades = grades;
  this.attendence = new Array(25);
}
Student.prototype.getInfo = function () {
  const ageOfStudent = 2026 - this.yearBorn;

  console.log('Student name:', this.firstName, this.lastName)
  console.log("Student Age:", ageOfStudent);
};

Student.prototype.present = function () {
  for (let i = 0; i < this.attendence.length; i++) {
    if(!(i in this.attendence)) {
      this.attendence[i] = true
      return
    }
  }

  return
};

Student.prototype.absent = function () {
  for (let j = 0; j < this.attendence.length; j++) {
    if(!(j in this.attendence)) {
      this.attendence[j] = false
      return
    }
  }
};

Student.prototype.summary = function () {
  let summ = 0;

  for (let i = 0; i < this.grades.length; i++) {
    summ += this.grades[i];
  }
  const roundedGrade = Math.round(summ / this.grades.length);

  console.log("The Average of the Grades:", roundedGrade);

  const a = this.attendence.filter(Boolean).length
  const b = this.attendence.filter((visit) => visit == false).length
  const c = a + b

  const w = a / c

  console.log(w)

  if(roundedGrade > 90 && w > 0.9 ) {
    console.log('Exellent!')
  }
  else if(roundedGrade > 90 || w > 0.9) {
    console.log('Good, but it could be better!')
  }
  else {
    console.log('редиска!')
  }
}

const a = new Student("Liubomyr", "Huzhumit", 2012, [99, 99, 99, 100, 100]);
const b = new Student("Martin", "Hrinchuck", 2012, [100, 90, 89, 90, 91]);
const c = new Student("Roman", "Sadovnick", 2012, [41, 67, 52, 69, 61]);

a.getInfo();
a.present();
a.present();
a.present();
a.present();
a.present();
a.present();
a.present()
a.present()
a.present()
a.present()
a.present()
a.present()
a.present()
a.present()
a.present()
a.absent();
a.summary();
console.log(a.attendence)


b.getInfo();
b.present();
b.present();
b.present();
b.present();
b.present();
b.present();
b.present();
b.absent();
b.absent();
b.absent();
b.summary();
console.log(b.attendence)

c.getInfo();
c.present();
c.absent();
c.absent();
c.absent();
c.summary();
console.log(c.attendence)
