###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################
import random
# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

# There are a few things you will have to discover for yourself for this game!
# Here are some useful hints:

# Try to figure out what this code is doing and how it might be useful to you

def get_guess():
    return list(input("What is your guess?"))
def generate_code():
    digits = [str(num) for num in range(10)]

    random.shuffle(digits)
    return str(digits[::3])

def generate_clues(code, user_guess):
    if user_guess == code:
        return "code cracked!"

    clues = []
    for ind,num in enumerate(user_guess):
        if num == code[ind]:
            clues.append('match')
        elif num in code:
            clues.append('close')

    if clues == []:
        return ["nope"]
    else:
        return clues

print("welcome code breaker")
secret_code = generate_code()
clue_report = []
while clue_report != "code cracked!":
    guess = get_guess()
    clue_report = generate_clues(guess, secret_code)
    print('here is the result of your guess: ')
    for clue in clue_report:
        print(clue)

# Think about how you will compare the input to the random number, what format
# should they be in? Maybe some sort of sequence? Watch the Lecture video for more hints!
