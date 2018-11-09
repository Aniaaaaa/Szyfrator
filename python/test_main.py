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

def test_transposition_code():
    assert transposition_code("we are discovered flee at once",3) == "wriorfeoeeesvelanadcedetc"
    assert transposition_code("Generalnie spacje nie powinny przeszkadzac temu kodowaniu", 4) == transposition_code("Generalniespacjeniepowinnyprzeszkadzactemukodowaniu", 4)
    assert transposition_uncode_known(transposition_code("notosprawdzmyczysiedobrzeodkodowuje", 3),3)=="notosprawdzmyczysiedobrzeodkodowuje"

def test_bacon_code():
    assert bacon_code("kromka") == "ababa baaab abbba abbaa ababa aaaaa"
    assert bacon_uncode(bacon_code("naprawde")) == "naprawde"

def test_original_vigenere_code():
    assert original_vinegere_code("bbbbb",'b') == "ccccc"
    assert original_vinegere_uncode_known(original_vinegere_code("kromka kromka uber alles",'g'),'g') == "kromka kromka uber alles"
    assert original_vinegere_code(";'[]!@#$%^&*()-=",'x') == ";'[]!@#$%^&*()-="
    assert original_vinegere_code("b[];',./bb!@#$%^b7890b", 'b') == "c[];',./cc!@#$%^c7890c"
    assert original_vinegere_uncode_known(original_vinegere_code("b[];',./bb!@#$%^b7890b", 'b'),'b') == "b[];',./bb!@#$%^b7890b"

def test_weird_alphabet_code():
    assert weird_alphabet_code("abcdefghijklmnopqrstuvwxyz","bcdefghijklmnopqrstuvwxyz") == "bcdefghijklmnopqrstuvwxyza"
    assert weird_alphabet_code("abcd","xyz") == "xyza"
    assert weird_alphabet_uncode(weird_alphabet_code("kromka jest zyciem, kromka jest wszystkim","kromkasiepowtarza"),"kromkasiepowtarza") == "kromka jest zyciem, kromka jest wszystkim"

def test_railfence_code():
    assert railfence_code("kromkakromkarailfencedoboju", 3) == "kkorfeormarmaalecdbjokkinou"
    assert railfence_uncode_known("kkorfeormarmaalecdbjokkinou",3 ) == "kromkakromkarailfencedoboju"
    assert railfence_code("Generalnie spacje nie powinny przeszkadzac temu kodowaniu", 4) == railfence_code("Generalniespacjeniepowinnyprzeszkadzactemukodowaniu", 4)
    assert railfence_uncode_known(railfence_code("dziendobrysprawdzamczydzialdobrze", 6),6) == "dziendobrysprawdzamczydzialdobrze"

