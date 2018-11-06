from main import *

def test_ceasar_code():
    assert caesar_code("to jest w sumie dlugie zdanie", 13) == "gb wrfg j fhzvr qyhtvr mqnavr"
    assert caesar_uncode_known("gb wrfg j fhzvr qyhtvr mqnavr", 13) == "to jest w sumie dlugie zdanie"
    assert "to jest w sumie dlugie zdanie" in caesar_uncode_blind("gb wrfg j fhzvr qyhtvr mqnavr")
    assert caesar_uncode_known(caesar_code("kromka kromka ponad wszystko, pieczywo wygrywa zawsze",8),8) == "kromka kromka ponad wszystko, pieczywo wygrywa zawsze"
    assert caesar_code("KrOmKa", 3) == "NuRpNd"

def test_vigenere_code():
    assert vigenere_code("ATTACKATDAWN", "LEMONLEMONLE") == "LXFOPVEFRNHR"
    assert vigenere_uncode("nGmni Tskcxipo esdskkxgmejvc !","key") == "dCode Vigenere automatically !"
    assert vigenere_uncode(vigenere_code("Anno dla Ciebie te testy robie po nocach, zeby nie bylo ze cos mi nie dziala.", "aotokluczjestktorymasprawiczewiadomosctabezpiecznabedzie"),"aotokluczjestktorymasprawiczewiadomosctabezpiecznabedzie") == "Anno dla Ciebie te testy robie po nocach, zeby nie bylo ze cos mi nie dziala."

def test_atbash_code():
    assert atbash_code("wizard") == "draziw" # To to samo tylko do konca :D
    assert atbash_code(atbash_uncode("jestem kromek kromalsky ktory kromuje przez swiat radosnie")) == "jestem kromek kromalsky ktory kromuje przez swiat radosnie"
    assert atbash_code(atbash_uncode("Tutaj Chyba jakies duze Litery Maja byc WZIETE POD UWAGE")) == "Tutaj Chyba jakies duze Litery Maja byc WZIETE POD UWAGE"
