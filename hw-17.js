// HomeWork: 17.1

class Calculator {
  add(x, y) {
    console.log(x + y)
  }

  substract(x, y) {
    console.log(x - y)
  }

  multiply(x, y) {
    console.log(x * y)
  }

  divide(x, y) {
    if(x == 0) {
      alert('Cant divided by 0')
    }
    console.log(x / y)
  }
}

const calc = new Calculator(10, 5)

calc.add(10, 5)
calc.substract(25, 10)
calc.multiply(5, 3)
calc.divide(150, 10)




// HomeWork: 17.2

class Couch {
  constructor(name, specialization, rating) {
    this.name = name
    this.specialization = specialization
    this.rating = rating
  }

  couchInfo() {
    console.log('Couch:', this.name, 'Specialization:', this.specialization, 'Rating:', this.rating)
  }
}
const couch1 = new Couch('John Doe', 'Fitness', 4.7)
const couch2 = new Couch('Alice Smith', 'Yoga', 4.9)

couch1.couchInfo()
couch2.couchInfo()




// HomeWork: 17.3

class BankAccount {
  constructor(balance) {
    this.balance = balance
  }
  deposit(amount) {
    return this.balance += amount
  }

  withdraw(amount) {
    return this.balance -= amount
  }

  getBalance() {
    return this.balance
  }
}
const account1 = new BankAccount(1000)


console.log(account1.getBalance())

account1.deposit(500)

console.log(account1.getBalance())

account1.withdraw(200)

console.log(account1.getBalance())

