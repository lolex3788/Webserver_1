alfabetet = "ABCDEFGHIJKLMNOPQRSTUDWXYZ_."

# ta in en rad text med ett tal följt av ell mellanrum och ett meddeLande
inputRow = input('Skriv in ett tal följt av ett mellanrum och ett meddelande: ')

# separera talet och meddelandet
separatedRow = inputRow.split(' ')
rotation = int(separatedRow[0])
messege = separatedRow[1].upper()

# Rotera alla bokstäver i meddelandet antalet steg som talet anger
resultMessege = ""
for letter in messege:
    indexOfLetter = alfabetet.index(letter)
    indexOfLetter += rotation
    if indexOfLetter > len(alfabetet) -1:
        indexOfLetter -= len(alfabetet)
    resultMessege += alfabetet[indexOfLetter]

# Vänd på det roterade meddelandet och skriv ut
print(resultMessege[::-1])



