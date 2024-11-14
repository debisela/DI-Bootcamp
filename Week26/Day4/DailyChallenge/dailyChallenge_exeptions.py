
try:
    number1 = int(input("Enter one number:"))
    number2 = int(input("Enter another number:"))
    print(number1/number2)
except ZeroDivisionError:
    print("Cant divide through 0")
except ValueError:
    print("Please enter a valid number")
else:
    print("division successfull")

