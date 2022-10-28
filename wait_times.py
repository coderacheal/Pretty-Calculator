import datetime

waiting_time = int(input('Enter number of days to wait: '))

# forcasted_I20 = datetime.date(2022, 11,9 )
today = datetime.date.today()

wait_time = datetime.timedelta(waiting_time)

# appointment_date = forcasted_I20 + wait_time
appointment_date = today + wait_time

print()
print(appointment_date.strftime('%A, %d, %B %Y'))
print('-------------------------')