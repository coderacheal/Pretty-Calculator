fig1 = int(input("Enter a no: "))
fig2 = int(input("Enter a no: "))
sign = input("Choose an operation(+,-,*,/): ")
if sign == '+':
    answer = fig1 + fig2
elif sign == "-":
    answer = fig1 - fig2
elif sign == "*":
    answer = fig1 * fig2
elif sign == "/":
    answer = fig1 / fig2
print(answer)