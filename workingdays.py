from datetime import datetime, timedelta

def count_weekends(total_days,start_day_of_week):
    # Calculate number of complete weeks
    complete_weeks = total_days // 7
    
    # Calculate extra days beyond complete weeks
    extra_days = total_days % 7

    weekend_days = 0
    for i in range(extra_days):
        if (start_day_of_week + i) % 7 in (5, 6):  # Saturday is 5, Sunday is 6
            weekend_days += 1
    new_end_day = (start_day_of_week + extra_days) % 7
    total_weekends = complete_weeks * 2 + weekend_days
    workdays = total_days - total_weekends
    plus_days = 0
    while workdays<total_days:

        if (new_end_day + plus_days) % 7 in (5, 6):  # Saturday is 5, Sunday is 6
            weekend_days += 1
        
        else:
            workdays +=1

        plus_days +=1 

    return total_days + plus_days

# Compute the days from monday to sunday
for i in range(7):
    print(count_weekends(20,i))
