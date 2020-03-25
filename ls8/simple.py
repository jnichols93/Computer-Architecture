import sys

PRINT_BEEJ = 1
HALT = 2
PRINT_NUM = 3

memory = [
	PRINT_BEEJ,
	PRINT_NUM,
	1,
	PRINT_BEEJ,
	PRINT_BEEJ,
	PRINT_BEEJ,
	PRINT_BEEJ,
	HALT

]

pc = 0

while True:
	command = memory[pc]

	if command == PRINT_BEEJ:
		#print beej
		print("Beej!")
		pc += 1
	elif command == HALT:
		#halt
		sys.exit(0)
	else:
		print(f"I did not understand that command: {command}")
		sys.exit(1)