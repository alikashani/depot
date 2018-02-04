class BankAccount:
    type = 'Normal Account'    # variable shared by all objects of the class

    def __init__(self, name):
        # default variables unique to each object:
        self.userName = name
        self.balance = 0.0

    # Object Methods:

    def showBalance(self):
        print self.balance
        return

    def withdrawMoney(self, amount):
        self.balance -= amount
        return

    def depositMoney(self, amount):
        self.balance += amount
        return

object1 = BankAccount('Hello')
object2 = BankAccount('Goodbye')

print object1.userName
print object2.userName

object1.depositMoney(100)
object2.depositMoney(200)

object1.showBalance()
object2.showBalance()

account3 = BankAccount('oranges')
print account3.__class__

string = 'Cat'
print string.__class__

class ExecutiveAccount( BankAccount ):
    # Overriden attribute
    type = 'Executive Account'

    # Extended functionality
    def requestCredit(self, amount):
        self.balance += amount

executive = ExecutiveAccount('CEO')

class SpecialExecutiveAccount(ExecutiveAccount):
    def requestCredit(self, amount):
        self.balance = ExecutiveAccount.requestCredit(self, amount)
        return

print isinstance(executive, SpecialExecutiveAccount)
print isinstance(executive, BankAccount)
print issubclass(SpecialExecutiveAccount, BankAccount)

class Base(object):
    def __init__(self):
        print "Base created"

class ChildA(Base):
    def __init__(self):
        Base.__init__(self)

class ChildB(Base):
    def __init__(self):
        super(ChildB, self).__init__()


ChildA()
ChildB()

print issubclass(Base, object)
