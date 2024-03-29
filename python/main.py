import math

special_signs = {",", " ", ".", "?", "!"}
alphabet ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"

def get_alphabet():
    return alphabet

def get_alphabet_length():
    return len(alphabet)

def caesar_code(message, key):
    key = int(key)
    message = str(message)
    message_list = list(message)
    for i in range(len(message_list)):
        if message_list[i] in alphabet:
            letter_ascii = ord(message_list[i])
            if letter_ascii > 96:
                letter_ascii -= 97
                add = 97
            else:
                letter_ascii -= 65
                add = 65
            letter_ascii += key
            letter_ascii = (letter_ascii % 26) + add
            # letter_ascii += add
            message_list[i] = chr(letter_ascii)
    message = "".join(message_list)
    return message


def caesar_uncode_blind(message):
    message = str(message)
    possible_answers = list()
    for i in range(26):
        possible_answers.append(caesar_code(message, i))
    return possible_answers


def caesar_uncode_known(message, key):
    key = int(key)
    return caesar_code(message, 26-key)


def vigenere_code(message, key):
    message = str(message)
    message_list = list(message)
    key = str(key)
    key_len = len(key)
    key_key = 0
    for i in range(len(message)):
        if message[i] in alphabet:
            message_list[i] = caesar_code(message[i], (ord(key[key_key].lower()) - 97) % 26)
            key_key += 1
            key_key = key_key % key_len
    return "".join(message_list)


def vigenere_uncode(message, key):
    message_list = list(message)
    key = str(key)
    key_len = len(key)
    key_key = 0
    for i in range(len(message)):
        if message[i] in alphabet:
            message_list[i] = caesar_code(message[i], 26-((ord(key[key_key].lower()) - 97) % 26))
            key_key += 1
            key_key = key_key % key_len
    return "".join(message_list)


def atbash_code(message):
    message_list = list(message)
    alphabet_atbash = dict()
    for i in range(26):
        alphabet_atbash[chr(i + 97)] = chr(97 + (25 - i))
    for i in range(len(message_list)):
        if message_list[i] in alphabet:
            big = False
            if ord(message_list[i]) < 95:
                big = True
            message_list[i] = alphabet_atbash[message_list[i].lower()]
            if big == True:
                message_list[i] = message_list[i].upper()
    return "".join(message_list)


def atbash_uncode(message):
    return atbash_code(message)


def transposition_code(message, key):
    key = int(float(key))
    message = "".join(message.split(" "))
    coded_message = ""
    message = "".join(message.split(" "))
    for i in range(key):
        for j in range(int(math.ceil(float(len(message))/key))):
            if i + j*key < len(message):
                coded_message += message[i + j*key]
    return coded_message


def transposition_uncode_known(message, key):
    key = int(float(key))
    message = "".join(message.split(" "))
    decoded_message = list(range(len(message)))
    x = 0
    y = 0
    letter = 0
    for i in range(key):
        while x + y*key < len(message):
            decoded_message[x + y*key] = message[letter]
            letter += 1
            y += 1
        y = 0
        x += 1
    return "".join(decoded_message)


def transposition_uncode_blind(message):
    possible_answers = list()
    for i in range(1, len(message)):
        possible_answers.append(transposition_uncode_known(message, i))
    return possible_answers


def bacon_code(message):
    coded_message = ""
    for letter in message:
        if letter in alphabet:
            number = ord(letter.lower()) - 97
            if number >= 16:
                coded_message += "b"
                number -= 16
            else:
                coded_message += "a"
            if number >= 8:
                coded_message += "b"
                number -= 8
            else:
                coded_message += "a"
            if number >= 4:
                coded_message += "b"
                number -= 4
            else:
                coded_message += "a"
            if number >= 2:
                coded_message += "b"
                number -= 2
            else:
                coded_message += "a"
            if number >= 1:
                coded_message += "b"
                number -= 1
            else:
                coded_message += "a"
            coded_message += " "
    coded_message = coded_message[:-1]
    return coded_message


def bacon_uncode(message):
    uncoded_message = ""
    for x in message.split(" "):
        number = 0
        for i in range(len(x)):
            if x[-i - 1] == "b":
                number += int(math.pow(2, i))
        uncoded_message += chr(number + 97)
    return uncoded_message


def original_vinegere_code(message, key_letter):
    key_letter = key_letter.lower()
    coded_message = ""
    for i in message:
        if i in alphabet:
            new_key_letter = i.lower()
            coded_message += caesar_code(i, (ord(key_letter.lower()) - 97) % 26)
            key_letter = new_key_letter
        else:
            coded_message += i
    return coded_message

def original_vinegere_uncode_known(message, key):
    uncoded_message = ""
    key = key.lower()
    for i in message:
        if i in alphabet:
            uncoded_letter = caesar_code(i, 26-((ord(key.lower()) -97) % 26))
            key = uncoded_letter
            uncoded_message += uncoded_letter
        else:
            uncoded_message += i
    return uncoded_message

def original_vinegere_uncode_blind(message):
    possible_answers = list()
    for i in range(26):
        possible_answers.append(original_vinegere_uncode_known(message, chr(i + 97)))
    return possible_answers


def railfence_code(message, key):
    key=int(float(key))
    message = "".join(message.split(" "))
    code_list = list()
    for i in range(key):
        code_list.append("")
    i = 0
    go_up = True
    for x in range(len(message)):
        code_list[i] += message[x]
        if go_up == True:
            i += 1
            if i >= key:
                i -= 2
                go_up = False
        else:
            i -= 1
            if i <= -1:
                i += 2
                go_up = True
    return "".join(code_list)


def railfence_uncode_known(message, key):
    key = int(float(key))
    message = "".join(message.split(" "))
    uncoded_message = ""
    lines_of_text = list()
    for i in range(key):
        lines_of_text.append("")
    letter_amount = int(math.floor(len(message)/float(2*key - 2)))
    letter_modulo = len(message) % (2*key - 2)
    if letter_modulo > 0:
        lines_of_text[0] += message[:letter_amount + 1]
        message = message[letter_amount+1:]
    else:
        lines_of_text[0] += message[:letter_amount]
        message = message[letter_amount:]
    for i in range(1, key-1):
        lines_of_text[i] += message[:2 * letter_amount]
        message = message[2*letter_amount:]
        if letter_modulo > i:
            lines_of_text[i] += message[0]
            message = message[1:]
        if letter_modulo > 2*key - 2 - i:
            lines_of_text[i] += message[0]
            message = message[1:]
    lines_of_text[key-1] = message
    i = 0
    go_up = True
    for x in range(len("".join(lines_of_text))):
        uncoded_message += lines_of_text[i][0]
        lines_of_text[i] = lines_of_text[i][1:]
        if go_up == True:
            i += 1
            if i >= key:
                i -= 2
                go_up = False
        else:
            i -= 1
            if i <= -1:
                i += 2
                go_up = True
    return uncoded_message


def railfence_uncode_blind(message):
    possible_answers = list()
    for i in range(2, len(message)):
        possible_answers.append(railfence_uncode_known(message,i))
    return possible_answers


def weird_alphabet_code(message, key):
    message = message.lower()
    key = key.lower()
    key_alphabet = ""
    weird_alphabet = ""
    coded_message = ""
    for x in key:
        if x not in key_alphabet and x in alphabet:
            key_alphabet += x
    for i in range(26):
        char = chr(97+i)
        weird_alphabet += char
        if char not in key_alphabet:
            key_alphabet += char
    for x in message:
        if x in weird_alphabet:
            coded_message += key_alphabet[weird_alphabet.index(x)]
        else:
            coded_message += x
    return coded_message


def weird_alphabet_uncode(message, key):
    message = message.lower()
    key = key.lower()
    key_alphabet = ""
    alphabet = ""
    uncoded_message = ""
    for x in key:
        if x not in key_alphabet and ord(x.lower()) > 96 and ord(x.lower()) < 123:
            key_alphabet += x
    for i in range(26):
        alphabet += chr(97+i)
        if chr(97+i) not in key_alphabet:
            key_alphabet += chr(97+i)
    for x in message:
        if x in alphabet:
            uncoded_message += alphabet[key_alphabet.index(x)]
        else:
            uncoded_message += x
    return uncoded_message


def try_english_dictionary(possible_answers, dictionary, word_percentage=20):
    more_likely_possible_answers = list()
    for x in possible_answers:
        all_words_amount = len(x.split(" "))
        good_words_amount = 0
        for y in x.split(" "):
            if y.lower() in dictionary:
                good_words_amount += 1
        if good_words_amount/all_words_amount >= word_percentage/100:
            more_likely_possible_answers.append(x)
    if len(more_likely_possible_answers) < 1:
        print("Sorry dude, but I dont think its English message or good Method")
        print("So im returining all possibilities")
        return possible_answers
    return more_likely_possible_answers


def make_dictionary_english():
    dict_file = open("dict.txt", 'r')
    all_lines = dict_file.readlines()
    dictionary = dict()
    for i in range(len(all_lines)):
        all_lines[i] = all_lines[i][:-1]
        dictionary[all_lines[i].lower()] = None
    return dictionary

if __name__ == "__main__":
    nmb =1
    print(railfence_uncode_known(railfence_code("abcdefghijklmnopqrstuvwxyz",nmb),nmb))
